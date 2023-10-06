import db from "../../db/conexion.js";
const productos = await db.getInstance().changeCollection('producto').connect();

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
                    descuento: 0
                }
            }
        ]).toArray()
        res.status(200).json({status: 200,message: data})
    }
    static async getProductoCategoria(req,res){
        if(!req.rateLimit) return;
        if (!req.params.categoria) return res.status(400).json({status: 200,message: 'Es necesario poner la categoria en la url para buscar'})
        const data = await productos.aggregate([
            {
                $match: {categoria: req.params.categoria}
            },
            {
                $project: {
                    _id: 0,
                    descuento: 0
                }
            }
        ]).toArray()
        res.status(200).json({status: 200,message: data})
    }
}    

// export const getProductoCategoria = async (req, res, next) => {
//     res.status(200).send(':)')
//     // if(!req.rateLimit) return;
//     // await Promise.all(DTO[`${req.headers["accept-version"]}`].map(res => res.run(req)));
//     // const {errors} = validationResult(req);
//     // if (errors.length) return res.status(400).json({ errors });


//     // if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});
//     // const collection = db.collection("producto");
//     // res.status(201).json({link: "https://http.cat/images/201.jpg", message:":)", data: await collection.insertOne(req.body)})
// }