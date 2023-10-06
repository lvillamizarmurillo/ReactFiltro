import {Router} from "express";
import routesVersioning from 'express-routes-versioning';
import { getLogin } from "../version/v1/login.js";
import { createToken } from "../helpers/jwt.js";

const version = routesVersioning();
const appLogin = Router();
// accept-version
appLogin.use(createToken)

appLogin.post("/", version({
    "1.0.0": getLogin,
}));

export default appLogin;