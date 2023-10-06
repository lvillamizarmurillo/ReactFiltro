import db from "../../db/conexion.js";
import { ObjectId } from "mongodb";
import { validarToken } from "../../helpers/jwt.js";
const productos = await db.getInstance().changeCollection('producto').connect();
const favorito = await db.getInstance().changeCollection('favoritos').connect();
const categoria = await db.getInstance().changeCollection('categoria').connect();

export default class Producto {
    static async getProductoV1(req,res){
        if(!req.rateLimit) return;
        const data = await productos.aggregate([
            {
                $match: {}
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    imagen: 1,
                    valoracion: 1,
                    descripcion: 1,
                    precio: 1,
                    "codigo": '$_id'
                }
            }
        ]).toArray()
        res.status(200).json({status: 200,message: data})
    }
    static async getProductoCategoria(req,res){
        if(!req.rateLimit) return;
        if (!req.params.categoria) return res.status(400).json({status: 400,message: 'Es necesario poner la categoria en la url para buscar'})
        const data = await productos.aggregate([
            {
                $match: {categoria: req.params.categoria}
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    imagen: 1,
                    valoracion: 1,
                    descripcion: 1,
                    precio: 1,
                    "codigo": '$_id'
                }
            }
        ]).toArray()
        if (data.length == 0) return res.status(400).json({status: 400,message: 'Esta categoria o no existe, o no tiene productos.'})
        res.status(200).json({status: 200,message: data})
    }
    static async getProductoSoloPorNombre(req,res){
        if(!req.rateLimit) return;
        if (!req.body.nombre) return res.status(400).json({status: 400,message: 'Es necesario poner el nombre para buscar.'})
        const data = await productos.aggregate([
            {
                $match: {nombre: req.body.nombre}
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    imagen: 1,
                    valoracion: 1,
                    descripcion: 1,
                    precio: 1,
                    "codigo": '$_id'
                }
            }
        ]).toArray()
        if (data.length == 0) return res.status(400).json({status: 400,message: 'Este producto no esta disponible.'})
        res.status(200).json({status: 200,message: data})
    }
    static async getProductoSoloPorCodigo(req,res){
        if(!req.rateLimit) return;
        if (!req.body.codigo) return res.status(400).json({status: 400,message: 'Es necesario poner el codigo para buscar.'})
        const data = await productos.aggregate([
            {
                $match: {_id: new ObjectId(req.body.codigo)}
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    imagen: 1,
                    valoracion: 1,
                    descripcion: 1,
                    precio: 1,
                    "codigo": '$_id'
                }
            }
        ]).toArray()
        if (data.length == 0) return res.status(400).json({status: 400,message: 'Este producto no esta disponible.'})
        res.status(200).json({status: 200,message: data})
    }
    static async getFavoritos(req,res){
        if(!req.rateLimit) return;
        const user = await validarToken(req.headers['authorization'].slice(7))
        const data = await favorito.aggregate([
            {
                $match: {correo: user.correo}
            },
            {
                $lookup: {
                    from: "producto",
                    localField: "nombre",
                    foreignField: "nombre",
                    as: "contenido"
                }
            },
            {
                $project: {
                    _id: 0,
                    correo: 0,
                    ["contenido._id"]: 0,
                    ["contenido.descuento"]: 0
                }
            }
        ]).toArray()
        if (data.length == 0) return res.status(200).json({status: 200,message: 'Aun no tienes nada guardado.'})
        res.status(200).json({status: 200,message: data})
    }
    static async guardarFavoritos(req,res){
        const user = await validarToken(req.headers['authorization'].slice(7))
        if (!req.body.nombre) return res.status(400).json({status: 400,message: 'Es necesario poner el nombre para guardar.'})
        const consulta = await favorito.findOne({nombre: req.body.nombre,correo: user.correo})
        if(consulta) return res.status(400).json({status: 400,message: 'Este producto ya lo tienes en favoritos.'})
        req.body.correo = user.correo
        const data = await productos.findOne({nombre: req.body.nombre})
        if(!data) return res.status(400).json({status: 400,message: 'Este producto no esta disponible.'})
        await favorito.insertOne(req.body)
        res.status(200).json({status: 200,message: 'Se guardo el producto en favoritos.'})
    }
    static async deleteFavoritos(req,res){
        const user = await validarToken(req.headers['authorization'].slice(7))
        if (!req.body.nombre) return res.status(400).json({status: 400,message: 'Es necesario poner el nombre para elimina.'})
        req.body.correo = user.correo
        const data = await favorito.findOne({nombre: req.body.nombre,correo: user.correo})
        if(!data) return res.status(400).json({status: 400,message: 'Este producto no lo puedes eliminar, o porque no es tuyo o no existe en favoritos.'})
        await favorito.deleteOne({nombre: req.body.nombre,correo: user.correo})
        res.status(200).json({status: 200,message: 'Se elimino el producto de favoritos.'})
    }
    static async postProducto(req,res){
        if (!req.body.nombre) return res.status(400).json({status: 400,message: 'El nombre es obligatorio y debe ser string.'})
        if (!req.body.categoria) return res.status(400).json({status: 400,message: 'Las categoria es obligatoria y debe ser string.'})
        if (!req.body.descripcion) return res.status(400).json({status: 400,message: 'La descripcion es obligatorio y debe ser string.'})
        if (!req.body.precio) return res.status(400).json({status: 400,message: 'El precio es obligatorio y debe ser numerico.'})
        if (!req.body.descuento) return res.status(400).json({status: 400,message: 'El descuento es obligatorio y debe ser 0 o 1.'})
        const consulta = await categoria.findOne({nombre: req.body.categoria})
        if(!consulta) return res.status(400).json({status: 400,message: 'La categoria con la que quieres guardar el producto no existe.'})
        await productos.insertOne(req.body)
        res.status(200).json({status: 200,message: 'Se guardo el producto con exito.'})
    }
}