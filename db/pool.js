import pkg from 'pg';
const { Pool } = pkg;
import "dotenv/config"

export default new Pool({connectionString: process.env.URL})