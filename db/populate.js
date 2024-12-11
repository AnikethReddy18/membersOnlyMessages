import pool from "./pool.js";

async function createUsersTable(){
    const createTableQuery = `CREATE TABLE IF NOT EXISTS Users(
       user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       username VARCHAR(15),
       password VARCHAR(60),
       access_level INTEGER
       )`

    await pool.query(createTableQuery);  
}

async function createPostsTable(){
    const createPostsQuery = `CREATE TABLE IF NOT EXISTS Posts( 
    post_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    title VARCHAR(60),
    content VARCHAR(500)
    )`

    await pool.query(createPostsQuery);
}

createUsersTable();
createPostsTable();