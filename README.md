# API Suscripciones

### Requisitos
- Instalar Node.JS versión 16+
- Instalar GIT (en su versión mas reciente).
- Instalar MySQL Server o XAMPP

### Proceso de instalación de ambiente local

Para instalar localmente esta API se necesita primero que nada tener instaladas las herramientas indicadas en requisitos.

Luego procedemos con:

- Abril la terminal e ir a la carpeta donde queremos clonar el repositorio.

- Clonar este repositorio ```git clone https://github.com/luis-soysena/api-sena.git```

- Ingresar a la carpeta api-sena ```cd api-sena```

- Crear el archivo .env.local con la siguiente información, ingresar las credenciales de la base de datos según la que haya creado localmente:

  ```
  API_PORT = 5007
  API_PATH = "/api/v1/"
  API_KEY = "ef$4t35y$G$F34Y&%KRYTY&KU$ENwuEK"
  MYSQL_USER = "root"
  MYSQL_PASSWD = "root"
  MYSQL_HOST = "localhost"
  MYSQL_DB = "api_sena"
  ```

  Para la API KEY esta debe coincidir con la que se configure en la app front.

- Ejecutar ```npm install```

- Ejecutar ```npm start```

- Visitar http://localhost:5007/api/v1/
