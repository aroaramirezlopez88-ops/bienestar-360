# Frontend - Bienestar 360

Frontend de la aplicación web Bienestar 360, desarrollado con Astro, React y CSS.

## Funcionalidades

- Página principal con presentación del centro.
- Catálogo de servicios obtenido desde la API.
- Filtro de servicios por categoría.
- Ordenación de servicios por precio.
- Vista de detalle de cada servicio.
- Página de presentación del equipo.
- Formulario de contacto y solicitud de reserva.
- Integración con WhatsApp.
- Servicios destacados y testimonios de clientes.
- Diseño responsive para ordenador y dispositivos móviles.

## Ejecutar en local

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en:

```text
http://localhost:4321
```

## Variable de entorno

Crear un archivo `.env` a partir de `.env.example`:

```env
PUBLIC_API_URL=http://localhost:3000
```

Esta variable indica la URL de la API utilizada por el frontend.

## Build de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist`.

## Documentación completa

La documentación completa del proyecto, incluyendo backend, base de datos, API y despliegue, se encuentra en el `README.md` principal de Bienestar 360.
