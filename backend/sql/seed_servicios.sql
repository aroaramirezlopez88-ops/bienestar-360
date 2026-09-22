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
        5,
        'Masaje relajante',
        'Masaje corporal completo con movimientos lentos y envolventes, pensado para liberar la tensión acumulada e inducir un estado de relajación profunda.',
        50.00,
        90
    ),
    (
        5,
        'Masaje y Osteopatía',
        'Combina masaje corporal con técnicas manuales de osteopatía, orientado a mejorar la movilidad y el bienestar general.',
        38.00,
        60
    ),
    (
        5,
        'Osteopatía Visceral',
        'Técnicas manuales suaves aplicadas sobre  la zona abdominal, orientadas a favorecer la movilidad interna y el equilibrio corporal.',
        38.00,
        60
    ),
    (
        5,
        'Osteopatía Sacro-Craneal',
        'Técnicas manuales muy suaves aplicadas al cráneo y al sacro, orientadas a la relajación profunda y el equilibrio del cuerpo.',
        38.00,
        60
    ),
    (
        5,
        'Reflexología Podal',
        'Presión localizada sobre los puntos reflejos del pie, orientada a favorecer la relajación y el equilibrio general del cuerpo.',
        35.00,
        60
    ),
    (
        5,
        'Acupuntura',
        'Aplicación de agujas en puntos específicos según los principios de la Medicina Tradicional China.',
        30.00,
        40
    ),
    (
        5,
        'Masaje Deportivo',
        'Masaje de cuerpo completo orientado a deportistas, centrado en la recuperación muscular y el bienestar físico.',
        58.00,
        120
    ),
    (
        5,
        'Osteopatía',
        'Sesión completa que combina masaje de cuerpo entero con técnicas manuales de osteopatía.',
        72.00,
        120
    ),
    (
        5,
        'Presoterapia',
        'Tratamiento corporal no invasivo que utiliza presión de aire mediante compresiones intermitentes en distintas zonas del cuerpo.',
        10.00,
        30
    );