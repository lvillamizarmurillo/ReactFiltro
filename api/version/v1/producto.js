import { validationResult } from 'express-validator';
import { conexion } from "../../db/conexion.js";
import { DTO } from "../validate/producto.js";
const db = await conexion();

export const getProductoV1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});
   

    res.status(200).json({link: "https://http.cat/images/200.jpg", message:":)", data: await db.collection("producto").find({}).toArray()})
}

export const postProductoV1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    await Promise.all(DTO[`${req.headers["accept-version"]}`].map(res => res.run(req)));
    const {errors} = validationResult(req);
    if (errors.length) return res.status(400).json({ errors });


    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});
    const collection = db.collection("producto");
    res.status(201).json({link: "https://http.cat/images/201.jpg", message:":)", data: await collection.insertOne(req.body)})
}