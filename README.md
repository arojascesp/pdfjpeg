# PDF to JPEG Converter

Esta aplicación permite convertir documentos PDF en imágenes JPEG de manera automática. El flujo de trabajo está diseñado para ser sencillo y eficiente, generando directorios específicos para la entrada y salida de archivos. A continuación, se detalla cómo funciona la aplicación y cómo puedes utilizarla.

---

## Descripción General

La aplicación realiza las siguientes tareas principales:

1. **Generación de directorios**:
   - Al iniciar la aplicación, se aseguran dos directorios principales:
     - `/in`: Aquí se deben colocar los archivos PDF que deseas convertir.
     - `/out`: Aquí se almacenarán las imágenes JPEG generadas.

2. **Conversión de PDF a JPEG**:
   - La aplicación busca archivos PDF en el directorio `/in`.
   - Convierte cada archivo PDF en una o más imágenes JPEG (una por página).
   - Las imágenes generadas se guardan en el directorio `/out` con un prefijo que identifica el archivo original.

---

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de cumplir con los siguientes requisitos:

- **Node.js**: La aplicación está desarrollada en Node.js. Descarga e instala la versión más reciente desde [Node.js](https://nodejs.org/).
- **Dependencias**: La aplicación utiliza la biblioteca `pdf-poppler` para realizar la conversión. Asegúrate de instalar las dependencias ejecutando el comando `npm install`.

---

## Instalación

1. Clona el repositorio o descarga los archivos de la aplicación.
2. Navega al directorio raíz del proyecto en tu terminal.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm install
	 ```

 ## Uso

### Paso 1: Iniciar la Aplicación

1. **Ejecutar la Aplicación**:
   - Abre una terminal y navega al directorio raíz del proyecto donde se encuentra el archivo `package.json`.
   - Ejecuta el siguiente comando para iniciar la aplicación:

     ```bash
     npm start
     ```

   - Este comando ejecutará el archivo principal `index.js`, que se encargará de verificar y crear los directorios necesarios, así como de procesar los archivos PDF.

2. **Modo de Desarrollo**:
   - Si estás trabajando en un entorno de desarrollo y deseas que la aplicación se reinicie automáticamente al detectar cambios en el código, utiliza el siguiente comando:

     ```bash
     npm run dev
     ```

   - Este comando utiliza la herramienta `nodemon`, que está configurada en el archivo `package.json` como dependencia de desarrollo.

3. **Mensajes en la Consola**:
   - Durante la ejecución, la aplicación mostrará mensajes en la consola que indican el progreso:
     - Si los directorios `/in` y `/out` no existen, se crearán automáticamente.
     - Si no se encuentran archivos PDF en el directorio `/in`, se mostrará un mensaje de error indicando que no hay archivos para procesar.
     - Si todo está en orden, la aplicación comenzará a convertir los archivos PDF en imágenes JPEG.

### Paso 2: Preparar los Archivos PDF

1. **Generación Automática de Directorios**:
   - Al iniciar la aplicación, se crearán automáticamente dos directorios en la raíz del proyecto:
     - `/in`: Este directorio es donde debes colocar los archivos PDF que deseas convertir.
     - `/out`: Este directorio es donde se almacenarán las imágenes JPEG generadas.

2. **Creación Manual de Directorios**:
   - Si por alguna razón los directorios no se generan automáticamente, puedes crearlos manualmente:
     - Crea una carpeta llamada `in` en la raíz del proyecto para los archivos de entrada.
     - Crea una carpeta llamada `out` en la raíz del proyecto para los archivos de salida.

3. **Colocar Archivos PDF**:
   - Una vez que el directorio `/in` esté disponible, coloca dentro de él los archivos PDF que deseas convertir.

---

### Paso 3: Conversión Automática

1. **Verificación de Archivos PDF**:
   - La aplicación revisará automáticamente el directorio `/in` para verificar si contiene archivos PDF.

2. **Manejo de Errores**:
   - Si no se encuentran archivos PDF en el directorio `/in`, la aplicación mostrará un mensaje de error indicando que no hay archivos para convertir y se detendrá.

3. **Conversión de Archivos**:
   - Si se encuentran archivos PDF, la aplicación los procesará y los convertirá en imágenes JPEG.
   - Las imágenes generadas se almacenarán en el directorio `/out`.

---

### Paso 4: Verificar los Resultados

1. **Revisar el Directorio de Salida**:
   - Una vez completada la conversión, abre el directorio `/out` para verificar los resultados.

2. **Nombres de los Archivos Generados**:
   - Cada archivo JPEG generado tendrá un nombre basado en el archivo PDF original, seguido de un sufijo `-image`. Por ejemplo, si el archivo original se llama `documento.pdf`, las imágenes generadas tendrán nombres como `documento-image-1.jpeg`, `documento-image-2.jpeg`, etc.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

src/
├── index.js                # Archivo principal que inicia la aplicación
├── shared/
│   └── constants.js        # Define las rutas de los directorios `/in` y `/out`
├── transformer/
│   └── pdfTransformer.js   # Lógica para convertir PDF a JPEG
├── validators/
│   ├── files-validator.js  # Valida la existencia de archivos PDF
│   └── routes-validator.js # Asegura la existencia de los directorios `/in` y `/out`
package.json                # Archivo de configuración del proyecto


## Mensajes de Error Comunes

1. **No existe el directorio de entrada**:
   - Si el directorio `/in` no existe, la aplicación lo creará automáticamente.
   - Se mostrará un mensaje indicando que debes colocar los archivos PDF en este directorio antes de reiniciar la aplicación.

2. **No se encontraron archivos PDF**:
   - Si no hay archivos PDF en el directorio `/in`, la aplicación mostrará un mensaje de error y se detendrá.
   - Asegúrate de colocar al menos un archivo PDF válido en el directorio `/in` antes de reiniciar la aplicación.

3. **Error durante la conversión**:
   - Si ocurre algún error durante la conversión, verifica lo siguiente:
     - Que los archivos PDF sean válidos y no estén corruptos.
     - Que las dependencias del proyecto estén correctamente instaladas ejecutando `npm install`.

---

## Tecnologías Utilizadas

1. **Node.js**:
   - Entorno de ejecución para JavaScript que permite ejecutar código en el servidor.

2. **pdf-poppler**:
   - Biblioteca utilizada para convertir archivos PDF en imágenes JPEG de alta calidad.

3. **nodemon**:
   - Herramienta de desarrollo que reinicia automáticamente la aplicación cuando detecta cambios en el código fuente.

---

## Notas Adicionales

- **Personalización de Rutas**:
  - Puedes modificar las rutas de los directorios `/in` y `/out` editando el archivo `constants.js` en la carpeta `shared`.

- **Procesamiento de Múltiples Archivos**:
  - La aplicación está diseñada para manejar múltiples archivos PDF en una sola ejecución.
  - Simplemente coloca todos los archivos PDF que deseas convertir en el directorio `/in` antes de iniciar la aplicación.
