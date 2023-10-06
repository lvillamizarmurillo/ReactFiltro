import { check } from 'express-validator';

const completa = [
    check('nombre').isString().withMessage({status: 400, message: 'El nombre es obligatorio y debe ser string'}),
    check('imagen').isArray({ min: 0, max: 5 }).withMessage({status: 400, message: 'Las imagen es obligatorio y debe ser 5'}),
    check('valoracion').isNumeric().withMessage({status: 400, message: 'Las valoracion es obligatorio y debe ser numerica '}),
    check('descripcion').isString().withMessage({status: 400, message: 'La descripcion es obligatorio y debe ser string'}),
    check('precio').isNumeric().withMessage({status: 400, message: 'El precio es obligatorio y debe ser numerico '}),
    check('descuento').isNumeric().withMessage({status: 400, message: 'El descuento es obligatorio y debe ser 0 o 1 '})
];

export const DTO = {
    "1.0.0": completa
}