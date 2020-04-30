CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    email TEXT,
    description TEXT
);

CREATE TABLE
IF NOT EXISTS matches
(
    id SERIAL PRIMARY KEY,
    user_id1 INTEGER,
    user_id2 INTEGER
);