import pool from "./pool.js";

async function createUsersTable() {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS Users(
       user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       username VARCHAR(15),
       password VARCHAR(60),
       access_level INTEGER
       )`

    await pool.query(createTableQuery);
}

async function createPostsTable() {
    const createPostsQuery = `CREATE TABLE IF NOT EXISTS Posts( 
    post_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    title VARCHAR(60),
    content VARCHAR(1000)
    )`

    await pool.query(createPostsQuery);
}

async function createSessionTable() {
    const query = `CREATE TABLE "session" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
    )
    WITH (OIDS=FALSE);

    ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

    CREATE INDEX "IDX_session_expire" ON "session" ("expire");`

    await pool.query(query);
}

createUsersTable();
createPostsTable();
createSessionTable();