![Nude Luxury Hotel Facebook Cover](https://github.com/user-attachments/assets/a5c15ca9-c882-4545-bd80-34d2f6b0fbdd)
# Proyecto de Gestión de Reservas Hoteleras

### Introducción
Este proyecto forma parte de mi proceso de aprendizaje para convertirme en un desarrollador fullstack. Utilicé Node.js para construir una aplicación backend que gestiona reservas hoteleras a través de operaciones CRUD (Crear, Leer, Actualizar, Eliminar). La aplicación también incluye un sistema de búsqueda para facilitar la gestión de reservas.

# Proceso y desarrollo en visual studio code:
Desarrollé este proyecto en Visual Studio Code. A continuación, detallo los pasos para configurar y ejecutar el proyecto en un entorno local:
![visual estudio proyecto 4](https://github.com/user-attachments/assets/f3aac813-f1bc-4318-948d-8586b1cc063f)

El servidor se ejecuta en http://localhost:3000.

# Postman:
En Postman, creé una colección llamada API de Reservas Hoteleras. Añadí una solicitud POST para crear una nueva reserva con los siguientes detalles:

Método: POST
URL: http://localhost:3000/api/reservas
Body: Seleccioné raw y JSON y utilicé el siguiente contenido: 

```scss
{
    "hotel": "Hotel Labohème",
    "tipo_habitacion": "Doble",
    "numero_huespedes": 3,
    "fecha_inicio": "2024-07-15",
    "fecha_fin": "2024-07-20",
    "estado": "confirmada"
}
```

Utilicé un hotel donde me alojé en Brasil; tanto el nombre como la imagen del banner fueron tomados en el lugar.

Verifiqué que la respuesta fuera Reserva creada.
También configuré solicitudes adicionales para obtener todas las reservas, obtener una reserva específica por ID, actualizar una reserva y eliminar una reserva.
## Crear Reserva
![crear reserva](https://github.com/user-attachments/assets/9e3a9285-6c07-4e1b-86f2-cbe28facf95a)

## Obtener Reserva
![obtener reservas](https://github.com/user-attachments/assets/6e3a2cb4-5ddb-4265-a6ce-883fea0b98b5)

## Obtener Reserva por ID
![obtener reservas por id](https://github.com/user-attachments/assets/a5494e38-7231-4570-aea4-70cad2aad22b)

## Actualizar Reserva
![actualizar reserva](https://github.com/user-attachments/assets/fa0da3c7-59b4-48c7-bff2-3d7e9f44db30)

## Elimar Reserva
![eliminar reserva](https://github.com/user-attachments/assets/b08aafed-166b-4102-88d0-59b8ac914d6d)


# Conclusión:
Este proyecto me permitió aplicar conocimientos clave sobre la construcción de aplicaciones backend con Node.js, la utilización de operaciones CRUD y la documentación de APIs. Además, desplegar la aplicación en Render me brindó una experiencia práctica sobre cómo poner en producción un servicio web.

# ¡Muchas Gracias!
