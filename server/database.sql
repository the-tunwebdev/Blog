CREATE DATABASE blog;
CREATE TABLE BlogUser(
    todo_id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,
    title VARCHAR(100),
    time timestamp NOT NULL,
    description VARCHAR(255)
);