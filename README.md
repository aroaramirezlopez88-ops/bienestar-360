# Bienestar 360

## Descripción

Bienestar 360 es una aplicación web desarrollada como proyecto final del curso de Full Stack Web Development.

Está pensada para un centro de estética y bienestar. La aplicación permite consultar los servicios disponibles, ver la información detallada de cada servicio y enviar una solicitud de información o reserva.

## Tecnologías utilizadas

- Frontend: Astro, React y CSS
- Backend: Node.js y Express
- Base de datos: MySQL
- Control de versiones: Git y GitHub
- Despliegue: Netlify, Render y Clever Cloud


## Ejecutar el proyecto en local

El proyecto está dividido en dos carpetas: `backend` y `frontend`.

### Backend

```bash
cd backend
npm install
npm start
```

El servidor backend se ejecuta en:

```text
http://localhost:3000
```

### Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

El frontend se ejecuta en:

```text
http://localhost:4321
```

## Variables de entorno

El proyecto utiliza archivos `.env` para guardar la configuración de cada entorno. Estos archivos no se suben a GitHub.

### Backend

Crear un archivo `.env` dentro de la carpeta `backend` tomando como referencia `.env.example`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=bienestar_360
PORT=3000
FRONTEND_URL=http://localhost:4321
```

### Frontend

Crear un archivo `.env` dentro de la carpeta `frontend` tomando como referencia `.env.example`:

```env
PUBLIC_API_URL=http://localhost:3000
```

## API

### URL base

En local:

```text
http://localhost:3000
```

En producción:

```text
https://bienestar-360.onrender.com
```

### Rutas

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/` | Comprobar que la API está funcionando |
| GET | `/api/servicios` | Obtener todos los servicios |
| GET | `/api/servicios/:id` | Obtener un servicio por su id |
| POST | `/api/servicios` | Crear un nuevo servicio |
| PUT | `/api/servicios/:id` | Modificar un servicio |
| DELETE | `/api/servicios/:id` | Eliminar un servicio |
| GET | `/api/categorias` | Obtener todas las categorías |
| POST | `/api/consultas-contacto` | Enviar una solicitud de información o reserva |

### Obtener un servicio por id

```http
GET /api/servicios/10
```

El `id` se envía como parámetro en la URL.

Ejemplo de respuesta correcta:

```json
{
  "id": 10,
  "nombre": "Manicura Rusa",
  "descripcion": "Limado, empuje y retirada de cutícula, y esmaltado semipermanente.",
  "precio": "18.99",
  "duracion_minutos": 45,
  "imagen_url": null,
  "categoria_id": 1,
  "categoria": "Manicura"
}
```

Si el servicio no existe, la API devuelve `404 Not Found`:

```json
{
  "message": "Servicio no encontrado"
}
```

### Enviar una solicitud de información o reserva

```http
POST /api/consultas-contacto
Content-Type: application/json
```

Ejemplo del body:

```json
{
  "nombre": "Ana Pérez",
  "email": "ana@example.com",
  "telefono": "600000000",
  "mensaje": "Quiero solicitar información sobre un servicio."
}
```

Los campos `nombre`, `email` y `mensaje` son obligatorios. El campo `telefono` es opcional.

Si la consulta se guarda correctamente, la API devuelve `201 Created`:

```json
{
  "id": 1,
  "message": "Consulta enviada correctamente"
}
```

Si faltan campos obligatorios, devuelve `400 Bad Request`:

```json
{
  "message": "Faltan campos obligatorios"
}
```

### Crear un servicio

```http
POST /api/servicios
Content-Type: application/json
```

Ejemplo del body:

```json
{
  "categoria_id": 1,
  "nombre": "Servicio de ejemplo",
  "descripcion": "Descripción del servicio.",
  "precio": 20,
  "duracion_minutos": 45,
  "imagen_url": null
}
```

Los campos `categoria_id`, `nombre`, `descripcion`, `precio` y `duracion_minutos` son obligatorios. `imagen_url` es opcional.

Si el servicio se crea correctamente, la API devuelve `201 Created`.

Si faltan campos obligatorios:

```json
{
  "message": "Faltan campos obligatorios"
}
```

Si la categoría no existe:

```json
{
  "message": "Categoria no valida"
}
```

### Modificar un servicio

```http
PUT /api/servicios/:id
Content-Type: application/json
```

El `id` corresponde al servicio que se quiere modificar.

Ejemplo del body:

```json
{
  "categoria_id": 1,
  "nombre": "Servicio actualizado",
  "descripcion": "Descripción actualizada del servicio.",
  "precio": 25,
  "duracion_minutos": 45,
  "imagen_url": null
}
```

Si el servicio se actualiza correctamente, la API devuelve `200 OK` con los datos actualizados.

Si faltan campos obligatorios, devuelve `400 Bad Request`.

Si la categoría no es válida, devuelve `400 Bad Request`.

Si el servicio no existe, devuelve `404 Not Found`:

```json
{
  "message": "Servicio no encontrado"
}
```

### Eliminar un servicio

```http
DELETE /api/servicios/:id
```

El `id` corresponde al servicio que se quiere eliminar.

La eliminación es lógica: el servicio queda marcado como inactivo y deja de aparecer en las consultas de servicios disponibles.

Si se elimina correctamente, la API devuelve `200 OK`:

```json
{
  "message": "Servicio eliminado correctamente"
}
```

Si el servicio no existe, devuelve `404 Not Found`:

```json
{
  "message": "Servicio no encontrado"
}
```

### Obtener las categorías

```http
GET /api/categorias
```

La API devuelve las categorías activas.

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Manicura",
    "descripcion": "Servicios de cuidado, tratamiento y esmaltado de uñas de las manos."
  },
  {
    "id": 2,
    "nombre": "Pedicura",
    "descripcion": "Servicios de cuidado, tratamiento y esmaltado de uñas de los pies."
  },
  {
    "id": 3,
    "nombre": "Depilación",
    "descripcion": "Servicios de depilación y cuidado estético."
  },
  {
    "id": 4,
    "nombre": "Tratamientos Faciales",
    "descripcion": "Tratamientos orientados al cuidado y bienestar de la piel del rostro."
  },
  {
    "id": 5,
    "nombre": "Masajes y Osteopatía",
    "descripcion": "Servicios de masaje, osteopatía, presoterapia y otras terapias orientadas al bienestar."
  }
]
```

### Obtener todos los servicios

```http
GET /api/servicios
```

La API devuelve un array con todos los servicios activos.

Ejemplo abreviado de respuesta:

```json
[
  {
    "id": 10,
    "nombre": "Manicura Rusa",
    "descripcion": "Limado, empuje y retirada de cutícula, y esmaltado semipermanente.",
    "precio": "18.99",
    "duracion_minutos": 45,
    "imagen_url": null,
    "categoria_id": 1,
    "categoria": "Manicura"
  }
]
```

## Códigos de respuesta y errores

La API utiliza los siguientes códigos HTTP principales:

| Código | Significado |
| --- | --- |
| `200 OK` | La petición se ha realizado correctamente |
| `201 Created` | Se ha creado un nuevo recurso correctamente |
| `400 Bad Request` | Faltan datos obligatorios o algún dato no es válido |
| `404 Not Found` | El recurso o la ruta solicitada no existe |
| `500 Internal Server Error` | Se ha producido un error interno en el servidor |

Si se intenta acceder a una ruta que no existe:

```json
{
  "message": "Ruta no encontrada"
}
```

Si ocurre un error interno del servidor:

```json
{
  "message": "Error interno del servidor"
}
```

## Pruebas con Thunder Client

Las rutas de la API se pueden probar desde Thunder Client con el backend ejecutándose en local.

### Ejemplo GET

```http
GET http://localhost:3000/api/servicios
```

Si la petición funciona correctamente, devuelve `200 OK` y un array con los servicios disponibles.

### Ejemplo POST

```http
POST http://localhost:3000/api/consultas-contacto
Content-Type: application/json
```

En el apartado Body seleccionar JSON y enviar, por ejemplo:

```json
{
  "nombre": "Prueba",
  "email": "prueba@example.com",
  "telefono": "600000000",
  "mensaje": "Consulta de prueba desde Thunder Client."
}
```

Si la petición funciona correctamente, devuelve `201 Created`.

## Despliegue

El proyecto está desplegado utilizando los siguientes servicios:

- Frontend: Netlify
- Backend: Render
- Base de datos MySQL: Clever Cloud

Web publicada:

```text
https://bienestar-360-web.netlify.app
```

API publicada:

```text
https://bienestar-360.onrender.com
```

En producción, el funcionamiento es:

```text
Netlify → Render → Clever Cloud
```
