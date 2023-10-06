# Tienda de zapatos

Trata basicamente de un apartado en el que se pueden listar productos, en este caso zapatos, se pueden listar por categorias, buscar un producto por nombre o el codigo de este, añadir productos a favoritos o eliminarlos.

## Funcionalidades del Backend

- Tiene todo el apartado de arriba funcionalmente:
- **Autenticación mediante JWT**: Los usuarios pueden registrarse e iniciar sesión de forma segura utilizando JSON Web Tokens (JWT).

## Necesario para probar el backend

1.Se instalan las dependencias del package.json con el siguiente comando:

```
npm i
```



1. Se debe poner en la variable .env.example, luego renombrarlo unicamente como .env

```
VITE_PORT_FRONTEND=5196
VITE_PORT_BACKEND=5197
VITE_HOSTNAME="127.0.0.1"

VITE_ATLAS_USER="latinoamericacampus233"
VITE_ATLAS_PASSWORD="Unc*2023"
VITE_ATLAS_DB="db_atlas"

VITE_URI_MONGO="mongodb+srv://lvillamizarmurillo:nomeacuerdo123@cluster0.1wthqi6.mongodb.net/"

JWT_SECRET = 'tunometecabrasarambambiche'
```



1. Para correr el servidor se usa el comando:

```
npm run start
```

# MongoDb

Antes de iniciar, debe por el documento que hay en scrips ejecutar lo siguiente:

**Importante**

Se modifico la base de datos inicial por estas razones:

1. Se añadio a la coleccion de productos un apartado llamado categoria que hace referencia a la coleccion de esta. Se implemento ya que para el backend al momento de separar los productos por categorias se vio necesario para separarlos de manera optimizada.
2. Se añaden la coleccion de usuarios y favoritos. Esto se debe a que se vio necesario llevar el registro de cada usuario, teniendo la permanencia de datos en el apartado de favoritos y asi cuando vuelvan a ingresar, se sigan guardando en el carro los productos que este añadio a favoritos.

```
use("db_atlas");
db.createCollection("producto");
db.createCollection("categoria");
db.createCollection("usuarios");
db.createCollection("favoritos");

db.usuarios.insertMany([
    {
        nombre: "Pablo",
        correo: "pablo@gmail.com",
        password: "123"
    },
    {
        nombre: "Camilo",
        correo: "camilo@gmail.com",
        password: "123"
    }
])

db.favoritos.insertMany([
    {
        nombre: "Tenis deportivos 2",
        correo: "camilo@gmail.com"
    },
    {
        nombre: "Tenis deportivos 3",
        correo: "camilo@gmail.com"
    },
    {
        nombre: "Tenis deportivos 4",
        correo: "pablo@gmail.com"
    }
])

db.producto.insertMany([
    {
        nombre: "Tenis Urban Para Hombre Zapatos De Golf De Mujer Air 1 Rojo",
        categoria: 'Zapatos de portivos',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Tenis deportivos 2",
        categoria: 'Zapatos de portivos',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Tenis deportivos 3",
        categoria: 'Zapatos de portivos',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Tenis deportivos 4",
        categoria: 'Zapatos de portivos',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Zapatos elegantes 1",
        categoria: 'Zapatos elegantes',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Zapatos elegantes 2",
        categoria: 'Zapatos elegantes',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Zapatos elegantes 3",
        categoria: 'Zapatos elegantes',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Zapatos elegantes 4",
        categoria: 'Zapatos elegantes',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Tacones a la moda 1",
        categoria: 'Zapatos a la moda',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Tacones a la moda 2",
        categoria: 'Zapatos a la moda',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Tacones a la moda 3",
        categoria: 'Zapatos a la moda',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Tacones a la moda 4",
        categoria: 'Zapatos a la moda',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Botas aestetick 1",
        categoria: 'Zapatos aestetick',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Botas aestetick 2",
        categoria: 'Zapatos aestetick',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Botas aestetick 3",
        categoria: 'Zapatos aestetick',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    },
    {
        nombre: "Botas aestetick 4",
        categoria: 'Zapatos aestetick',
        imagen:[
            "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
        ],
        valoracion: 5,
        descripcion: "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
        precio: 171491,
        descuento: 0
    }
]);

db.categoria.insertMany([
    {
        nombre: "Zapatos de portivos"
    },
    {
        nombre: "Zapatos elegantes"
    },
    {
        nombre: "Zapatos a la moda",
    },
    {
        nombre: "Zapatos aestetick"
    }
]);
```

**Puedes buscar el archivo en api/db/query.mongodb**

## Uso

Para cualquier consulta se debe loguear con el siguiente usuario:

Post

version: 1.0.0

```
http://localhost/login
```

Seguido en el body colocar el siguiente usuario:

```
{
  "email": "camilo@gmail.com",
  "password": "123"
}
```

Luego el token generado se debera colocar en Auth/BearerToken

Ej:

```
sauhdusaihdiuahsiudyhsaoiudjaisdsanlkjdnaskjhdijsahdkjhsakjdhsakjhdkjashd
```



O en headers colocar Authorization seguido de Bearer (token)

Ej:

```
Authorization:   Bearer sjahdiuashdiuahsodijsaoijdsioajdoijdoiasjdoijasoijdoiasoidjsa
```

# Consultas

1. Lista todos los productos que se encuentran:

   version: 1.0.0

Get

```
http://localhost/producto
```



2. Lista todos los productos que se encuentran por una categoria(Esta se pasa por parametros, ej):

version: 1.0.1

Get

```
http://localhost/producto/Zapatos elegantes
```

3. Lista un producto por nombre:

version: 1.0.2

Get

```
http://localhost/producto
```

```
{
  "nombre": "Tenis Urban Para Hombre Zapatos De Golf De Mujer Air 1 Rojo"
}
```

4. Lista un producto por codigo(Esto se obtiene de endpoints anteriores):

version: 1.0.3

Get

```
http://localhost/producto
```

```
{
  "nombre": "Tenis Urban Para Hombre Zapatos De Golf De Mujer Air 1 Rojo"
}
```

5. Lista todos los productos en favorito del usuario:

version: 1.0.4

Get

```
http://localhost/producto
```

6. Guarda en favoritos un producto:

version: 1.0.0

Post

```
http://localhost/producto
```

```
{
  "nombre": "Tacones a la moda 1"
}
```

6. Elimina un producto de favoritos:

version: 1.0.0

Delete

```
http://localhost/producto
```

```
{
  "nombre": "Tacones a la moda 1"
}
```

6. Guarda un producto en la base de datos:

version: 1.0.0

Post

```
http://localhost/producto
```

```
{
  "nombre": "Tacones a la moda 1",
  "categoria": "Zapatos a la moda",
  "imagen": [
    "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
  ],
  "descripcion": "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
  "precio": 171491
}
```

