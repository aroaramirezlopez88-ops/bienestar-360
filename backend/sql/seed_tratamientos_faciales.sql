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
        4,
        'Higiene Facial',
        'Incluye desmaquillado, exfoliación, vapor, extracciones sencillas e hidratación. La higiene facial o limpieza de cutis es un tratamiento higiénico que permite eliminar la suciedad acumulada en la piel del rostro, exfoliar para favorecer la renovación de la piel e hidratarla con productos adaptados a sus necesidades.',
        30.00,
        60
    ),
    (
        4,
        'Lifting de Pestañas',
        'Tratamiento estético profesional que eleva, alarga y curva las pestañas naturales desde la raíz.',
        35.00,
        60
    );
    