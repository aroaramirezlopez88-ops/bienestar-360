SET NAMES utf8mb4;

USE bienestar_360;

INSERT INTO servicios (
    categoria_id,
    nombre,
    descripcion,
    precio,
    duracion_minutos
)
VALUES
    (
        1,
        'Manicura Rusa',
        'Limado, empuje y retirada de cutícula, y esmaltado semipermanente.',
        18.99,
        45
    ),
    (
        1,
        'Manicura Express Semipermanente',
        'Limado, empuje de cutícula y esmaltado semipermanente.',
        15.00,
        30
    ),
    (
        1,
        'Manicura con Refuerzo / Rubber',
        'Limado, empuje de cutícula, nivelación con gel y esmaltado semipermanente.',
        20.00,
        60
    ),
    (
        1,
        'Manicura Express Esmalte Normal',
        'Limado, empuje de cutícula y esmaltado normal.',
        13.90,
        30
    ),
    (
        1,
        'Limpieza de Cutícula',
        'Servicio de limpieza y cuidado de cutículas.',
        3.00,
        15
    ),
    (
        1,
        'Decoración de Uñas',
        'Decoración de uñas con precio base desde 1,50 €.',
        1.50,
        15
    ),
    (
        1,
        'Uñas Acrílicas - Puesta Nueva',
        'Limado, empuje y retirada de cutícula, preparación de la superficie, aplicación de acrílico y esmaltado semipermanente con decoración incluida.',
        39.99,
        90
    ),
    (
        1,
        'Relleno de Acrílico',
        'Retirada parcial, limado, empuje de cutícula, preparación y relleno de acrílico con esmaltado semipermanente.',
        31.00,
        60
    ),
    (
        1,
        'Reconstrucción de Uña Acrílica',
        'Reconstrucción de una uña acrílica en la mano.',
        3.00,
        15
    ),
    (
        1,
        'Retirada de Semipermanente + Manicura',
        'Retirada total del material, limado, empuje de cutícula, pulido de superficie y cuidado final de la uña.',
        10.00,
        15
    ),
    (
        1,
        'Retirada de Acrílico',
        'Retirada total del producto, limado, empuje de cutícula, pulido de superficie y cuidado final de la uña.',
        15.00,
        30
    ),
    (
        1,
        'Acrigel - Puesta Nueva',
        'Limado, empuje de cutícula, preparación de la superficie, aplicación de acrigel y esmaltado semipermanente.',
        30.00,
        90
    ),
    (
        1,
        'Relleno de Acrigel',
        'Retirada parcial, limado, empuje de cutícula, preparación de la superficie, relleno y esmaltado semipermanente.',
        25.00,
        60
    );