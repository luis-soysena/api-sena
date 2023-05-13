# API Suscripciones

### Requisitos
- Node.JS 16+ ([descargar](https://nodejs.org/es/download))
- Git ([descargar](https://git-scm.com/downloads))

### Proceso de instalación de ambiente local

Para instalar localmente esta API se necesita tener instaladas las herramientas indicadas en requisitos.

Luego proceda con los siguientes pasos:

- Abra la terminal y ubiquese en la carpeta donde quiera clonar el repositorio.

- Clone el repositorio ejecutando: ```git clone https://github.com/luis-soysena/api-sena.git```

- Ingrese a la carpeta *api-sena* ```cd api-sena```

- Cree el archivo ```.env``` con la siguiente información, cambie la información de la base de datos según la que haya creado localmente:

  ```
  API_PORT = 5007
  API_PATH = "/api/v1"
  API_KEY = "ef$4t35y$G$F34Y&%KRYTY&KU$ENwuEK"
  MONGO_URI = "MONGO_CLUSTER_URI_AQUI"
  ```

  *Para la API KEY esta debe coincidir con la que se configure en la app front*.

- Ejecutar ```npm install``` y espere a que se instalen los paquetes.

- Luego ejecute ```npm start```

- Ya puede ingresar a http://localhost:5007/api/v1/

### Pruebas unitarias

Se agregaron algunas pruebas unitarias, para ejecutarlas es importante que la API este corriendo, para ello se ejecuta ```npm start```

Luego en otra ventana ejecutamos ```npm run test```

### Documentación

Para conocer los endpoints y detalles de la API, visite la documentación en Postman, [clic aquí](https://www.postman.com/luchoweb/workspace/sena/documentation/5536734-de773936-5e2f-48df-9aa2-9e16abe00325?entity=&branch=&version=).
