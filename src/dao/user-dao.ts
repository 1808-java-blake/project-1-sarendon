import { connectionPool } from "../util/connection-util";
import { User } from "../model/user";
import { userConverter } from "../util/user-converter";
import { RIConverter } from "../util/ri-converter";

/**
 * Add a new user to the DB
 * @param user 
 */
export async function create(user: User): Promise<number> {
    const client = await connectionPool.connect();
    try {
      const resp = await client.query(
        `INSERT INTO "RIS".users 
          (username, password, first_name, last_name, email, role)
          VALUES ($1, $2, $3, $4, $5, $6 ) 
          RETURNING user_id`, [user.username, user.password, user.firstName, user.lastName, user.email,
        user.role]);
      return resp.rows[0].user_id;
    } finally {
      client.release();
    }
  }


  /**
 * Retreive a single user by username and password, will also retreive all of that users movies
 * @param id
 */
export async function findByUsernameAndPassword(username: string, password: string): Promise<User> {



  const client = await connectionPool.connect();
  try {

    const resp = await client.query(
      `SELECT * FROM "RIS".users u
        LEFT JOIN "RIS".ri r
        USING (user_id)
        WHERE u.username = $1
        AND u.password = $2`, [username, password] );
        
        console.log(resp)
        if(resp.rows.length !== 0) {
          const user = userConverter(resp.rows[0]); // get the user data from first row
          return user;
        }
        return null;
  } finally {
    client.release();
  }
}


/**
 * Retreive a single user by id
 * @param id 
 */
export async function findById(id: number): Promise<User> {
  const client = await connectionPool.connect();
  try {
    const resp = await client.query(
      `
      SELECT * FROM "RIS".users u 
      LEFT JOIN "RIS".ri r
      ON u.user_id = r.user_id
      WHERE u.user_id = $1 

      `, [id]);

        const user = userConverter(resp.rows[0]); // get the user data from first row

        resp.rows.forEach((reinb) => {
          reinb.ri_id && user.reinbursement.push(RIConverter(reinb));
        })
        return user;
  } finally {
    client.release();
  }
}
