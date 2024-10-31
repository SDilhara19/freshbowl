CREATE TABLE HEALTHY_MENUS (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2),
    description TEXT,
    category VARCHAR(50),
    image_url TEXT
);