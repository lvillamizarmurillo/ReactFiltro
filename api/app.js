import { loadEnv } from 'vite';
import express from "express";
import cors from "cors";
import appProducto from "./routes/producto.js";
import appLogin from "./routes/login.js";

const env = loadEnv("development", process.cwd(), 'VITE')
const app = express();

app.use(cors());
app.use(express.json());
app.use(async(req,res,next)=>{
    if (!req.headers['accept-version']) return res.status(400).send({status:400,message:'Ingrese la version del api'})
    next()
})
app.use("/login", appLogin);
app.use("/producto", appProducto);
const config = JSON.parse(env.VITE_CONFIG_EXPRESS);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
}); 