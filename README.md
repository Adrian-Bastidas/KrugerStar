### Bienvenido al repositorio de esta página con PokeApi
****
**Proceso de construcción de la aplicación:**

- Como punto principal se pensó en el uso de mongodb atlas para poder cargar una base de datos usando a los pokemones como objetos para que estos no necesitarán ningun tratamiento de transaction, se vio inutil a un motor sql como lo es Postgres.

- Para la idea se pensó primeramente en tener una estetica simple que cualqueir persona pueda usar, logrando asi que la página no esté tan sobrecargada

- Al momento de la planificación existia confusión si usar ReactBoostrap o Reactjs junto con bootstrap y sus extensiones, asi me se decidió utilizar la segunda opción en la mayoría de la estructura del proyecto

- La creación de la API de conexión a mongodb tuvo la desición de utilizar unicamente el método get ya que el usuario y para este proyecto, no se necesita insertar información
**Ejecución del back-end**

- Para la ejecución se debe dirigir a la carpeta "PokeApiMongodb", siendo esta la carpeta del proyecto que ejecuta la API de conexión a la base de datos

- Una vez abierto el proyecto se debe iniciar el mismo, logrando que se inicie en un purto del localhost

- El proyecto tiene una dirección quemada, que es lo que le permite conectarse a la base de datos en mongodb atlas, así esta base de datos permite la conexión a ella en todo momento desde cualquier lugar

**Indicaciones adicionales para el Front-End**

- Se debe iniciar el Api de conexión a la base de datos indicado anteriormente

- Se requiere abrir la carpeta KrugerStar, la cual contiene el proyecto de la página web en React.js
- Se debe crear una nueva consola en el proyecto o iniciar al proyecto por medio de una consola creada
- Por ultimo, una vez ya en la ruta del proyecto, se debe ingresa "npm start" y enter para abrir el proyecto, este se cargará tomando la información de la API antes mencionada

*Atentamente: Adrian Bastidas*