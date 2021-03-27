# Proyecto utilizando Express Validator
---------
### Proyecto basado en la arquitectura MVC (Modelo - Vista - Controlador)

#### Node / Express / EJS / Express-Validator

#### Validación de Formularios
---------

1. Crear el repositorio
2. Clonar el repositorio:

`git clone [url del repositorio]`

3. Inicializar npm ejecutando el siguiente comando:

`npm init -y`

4. Definir como punto de entrada a la aplicación app.js
- Dentro del package.json:

`"main: app.js",`

5. Instalar express en el proyecto ejecutando el siguiente comando:

`npm install express --save`

6. Crear el archivo app.js
- Requerir Express
- Confirgurar el servidor

7. Crear la estructura de carpetas

------
## Vistas

1. Instalar ejs

`npm i ejs`

2. Configurar EJS como el template engine en app.js

`app.set("view engine", "ejs")`

3. Configurar el acceso a la carpeta de recursos estáticos

`app.use (express.static(publicPath));`

4. Renderizar utilizando res.render en el mainController

`res.render("index");`

--------------------

## Controladores

- Atienden los distintos pedidos del cliente y generan comunicación entre las vistas y los modelos.
- Es el intermediario entre las vistas y el modelo.
- Provee mayor escalabilidad y control sobre el código.
- Se debe implementar un controlador por cada recurso que tiene la aplicación

1. Crear la carpeta controllers en la raíz del proyecto

2. Dentro de la carpeta controllers crear el controlador

- nombreDelRecursoController.js

3. Definir una variable y asignarle un objeto literal
- Ese objeto literal atenderá varios métodos
- Por ejemplo pagina index, pagina detalle de producto y página edición de producto

4. Vincular el controlador con las rutas

## Routes

- Contendrá todo el listado de las rutas válidas.

1. Requerir al controlador
2. Referenciar el método del controlador en la ruta