import db from "../db/conexion.js";
import { jwtVerify, SignJWT } from "jose";
import { loadEnv } from "vite";
import { ObjectId } from "mongodb";

const env = loadEnv("development", process.cwd(), 'JWT_SECRET')

const usuario = await db.getInstance().changeCollection('usuarios').connect();
const createToken = async(req,res,next)=>{
    if (Object.keys(req.body).length === 0) return res.status(400).send({status: 400, message: "datos no enviados"});
    const encoder = new TextEncoder();
    const result = await usuario.findOne({ correo: req.body.correo, password: req.body.contraseña});
    if(!result) return res.status(401).send({status: 401,message: "Usuario no encontrado"});
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(env.JWT_SECRET));
    req.data = {status: 200,message: jwtConstructor};
    next();
}
const validarToken = async (token)=>{
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env.JWT_SECRET)
        );
        return usuario.findOne({_id: new ObjectId(jwtData.payload.id)});
    } catch (error) {
        return false;
    }
}

export {
    createToken,
    validarToken
}