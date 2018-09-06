import { Request, Response } from 'express';
import express from 'express';
export const RIRouter = express.Router();
import * as RIDao from '../dao/RI-dao';
// import { authMiddleware } from '../security/authorization-middleware';


/**
 * Create Reinsbersment 
 */
RIRouter.post('/create', [
  //   authMiddleware('customer'),
  async (req, resp) => {
    try {
      const id = await RIDao.createRI(req.body);
      resp.status(201);
      resp.json(id);
    } catch (err) {
      console.log(err);
      resp.sendStatus(500);
    }
  }])


RIRouter.post('/update_inquiries', [

  async (req, resp) => {

    console.log(req.session.user)

    try {
      await RIDao.updateRI(+req.params.user_id, req.body.status, req.body.ri_id,req.session.user.username);
      resp.sendStatus(201);
    }

    catch (err) {
      console.log(err);
      resp.sendStatus(500);
    }
    return 1;
  }
]);