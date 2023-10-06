import {Router} from "express";
import routesVersioning from 'express-routes-versioning';
import { limitGetProducto, limitPostProducto } from "../helpers/rateLimit.js";
import Producto from "../version/v1/producto.js";
import passportHelper from "../helpers/passporthelper.js";

const version = routesVersioning();
const appProducto = Router();
// accept-version
appProducto.use(passportHelper.authenticate('bearer', {session: false}));

appProducto.get("/:categoria?", limitGetProducto(), version({
    "1.0.0": Producto.getProductoV1,
    "1.0.1": Producto.getProductoCategoria,
    "1.0.2": Producto.getFavoritos
}));
appProducto.post("/", limitPostProducto(), version({
    "1.0.0": Producto.getProductoSoloPorNombre,
    "1.0.1": Producto.getProductoSoloPorCodigo,
    "1.0.2": Producto.guardarFavoritos
}));

appProducto.delete("/", limitPostProducto(), version({
    "1.0.0": Producto.deleteFavoritos
}));


export default appProducto;