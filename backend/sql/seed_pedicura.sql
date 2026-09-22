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
        2,
        'Pedicura Completa Semipermanente',
        'Remojo con sales, eliminación de durezas, mascarilla hidratante, corte y limado de uñas, empuje y retirada de cutícula, preparación de la superficie, esmaltado semipermanente, exfoliación, aceite y masaje relajante final.',
        33.99,
        60
    ),
    (
        2,
        'Pedicura Completa Esmalte Normal',
        'Remojo con sales, eliminación de durezas, mascarilla hidratante, corte y limado de uñas, empuje y retirada de cutícula, exfoliación, aceite, crema con masaje relajante y esmaltado normal.',
        25.00,
        60
    ),
    (
        2,
        'Pedicura Técnica',
        'Remojo con sales, eliminación de durezas, mascarilla hidratante, corte y limado de uñas, empuje y retirada de cutícula, exfoliación, aceite y crema con masaje relajante, sin esmaltado.',
        21.00,
        30
    ),
    (
        2,
        'Pedicura Exprés Semipermanente',
        'Corte, limado, empuje de cutícula, preparación de la superficie y esmaltado semipermanente.',
        18.00,
        30
    ),
    (
        2,
        'Pedicura Exprés Esmalte Normal',
        'Corte, limado, empuje de cutícula, preparación de la superficie y esmaltado normal.',
        13.99,
        30
    ),
    (
        2,
        'Reconstrucción de Uña - Pie',
        'Reconstrucción de una uña del pie mediante aplicación de acrílico.',
        5.00,
        15
    );