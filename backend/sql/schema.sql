CREATE DATABASE IF NOT EXISTS bienestar_360
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE bienestar_360;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NULL,
    activo TINYINT(1) DEFAULT 1
);

CREATE TABLE servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    duracion_minutos INT NOT NULL,
    imagen_url VARCHAR(255) NULL,
    activo TINYINT(1) DEFAULT 1,

    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE consultas_contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefono VARCHAR(20) NULL,
    mensaje TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

