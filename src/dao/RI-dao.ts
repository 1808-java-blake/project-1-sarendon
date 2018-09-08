import { connectionPool } from "../util/connection-util";
import { RI } from "../model/ri";
import { User } from "../model/user";
import { userInfo } from "os";


/**
 * Add a new RI to database
 * @param RI
 */
export async function createRI(RI): Promise<number> {
let d = new Date();
    const client = await connectionPool.connect();
    try {
      const resp = await client.query(
        `INSERT INTO "RIS".ri 
          (user_id, amount, type, status, submitted, resolved, resolver)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING RI_id`, [RI.userId , RI.amount, RI.type, 'pending', 
          ` ${d.getMonth()} - ${d.getDate()} - ${d.getFullYear()}` , 'pending', 'pending' ]);
      return resp.rows[0].RI_id;
    } finally {
      client.release();
    }
  }

  /**
 * Update RI
 * @param RI
 */
export async function updateRI(id:number, status: string, ri_id: number, resolver: string): Promise<any> {
  let d = new Date();

      const client = await connectionPool.connect();
      try {
            await client.query(
            `UPDATE "RIS".ri 
            SET resolved = $1, resolver = $2, status = $4
            WHERE ri_id = $3`,
             [` ${d.getMonth()} - ${d.getDate()} - ${d.getFullYear()}` , 
            resolver, ri_id , status]);
            return 1;
      } finally {
        client.release();
      }
      return 1;
    }
    
    export async function viewRI():Promise<any>{

      const client = await connectionPool.connect();
      try{
        const resp = await client.query(
        `SELECT * FROM "RIS".ri
          ORDER BY "RIS".ri.status DESC`);
        return resp.rows;
      }finally{
        client.release();
      }
    }
    