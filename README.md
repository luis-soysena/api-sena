# API Suscripciones

### Requisitos
- Instalar Node.JS versión 16+
- Instalar GIT (en su versión mas reciente).

### Proceso de instalación de ambiente local

Para instalar localmente esta API se necesita primero que nada tener instaladas las herramientas indicadas en requisitos.

Luego proceda con los siguientes pasos:

- Abra la terminal y ubiquese en la carpeta donde quiera clonar el repositorio.

- Clone el repositorio ejecutando: ```git clone https://github.com/luis-soysena/api-sena.git```

- Ingrese a la carpeta *api-sena* ```cd api-sena```

- Cree el archivo ```.env``` con la siguiente información, cambie la información de la base de datos según la que haya creado localmente:

  ```
  API_PORT = 5007
  API_PATH = "/api/v1/"
  API_KEY = "ef$4t35y$G$F34Y&%KRYTY&KU$ENwuEK"
  MONGO_URI = "MONGO_ATLAS_URI_HERE"
  ```

  *Para la API KEY esta debe coincidir con la que se configure en la app front*.

- Ejecutar ```npm install``` y espere a que se instalen los paquetes.

- Luego ejecute ```npm start```

- Ya puede ingresar a http://localhost:5007/api/v1/
