import { SqlRI } from "../dto/sql-ri";
import { RI } from "../model/ri";

/**
 * This is used to convert a sql movie into an actual movie
 */
export function RIConverter (ri : SqlRI) {
  return new RI (ri.user_id, ri.ri_id, ri.amount, ri.type , ri.status, ri.submitted,
     ri.resolved, ri.resolver);
}