
DROP TABLE IF EXISTS employees;


CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    birthdate DATE, 
    salary INTEGER
);