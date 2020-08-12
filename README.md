# Full-stack Developer Challenge
## Author: Nicolás Suárez Jiménez

## Docker Compose
- Descargar Docker
- En la terminal ingresar a la carpeta del proyecto `Docker - Postgres`
- Luego ingresar el comando `docker-compose up -d` y verificar que no existan errores
- En este punto la base de datos debe estar corriendo en el puerto 5432 adicionalmente las configuraciones del entorno de desarrollo también se habrán configurado para la posterior conexión con el Backend.

## Ejecución Backend
El backend está realizado en Node Js, por lo tanto es necesario tenerlo instalado. Adicionalmente se hace uso de Express junto con otras librerías.
- Ejecutar `npm install`
- Ejecutar `npm start` o para ejecutarlo con Nodemon `npm run dev`

En Backend cuenta con 1 endpoint al cual se puede acceder mediante 'localhost:4000/api/location'. 


## Ejecutar Frontend
El Frontend se realizó con el framework Angular y Bootstrap 4. 
- Ejecutar los comandos `npm install -g npm` y `npm install -g @angular/cli` para instalar Angular
- Ejecutar `ng serve`


