import { Request, Response, request } from 'express';

import db from "../database/connection";
import convertHourtoMinutos from "../Utils/convertHourToMinutes";

class ConnectionsController {

    async index(request: Request, response: Response) {
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0]
        return response.json({ total });
    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        try {
            await db('connections').insert({
                user_id,
            });

            return response.status(201).json({
                message: "successfully created"
            });
        
        } catch (error) {
            
            console.log(error);

            return response.status(400).json({
                error: "unexpected error while creating new class"
            });

        }
    }

}
export default ConnectionsController;