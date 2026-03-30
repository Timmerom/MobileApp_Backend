// userController.ts
import express from 'express'; 
import userService from './userService';

class UserController {
    async register(req: express.Request, res: express.Response) { 
        try {
  
            const user = await userService.register(req.body);
            res.status(200).json(user);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async login(req: express.Request, res: express.Response) {
        try {
            const { email, password } = req.body;

            const user = await userService.login(email as string, password);
            res.status(200).json(user);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async getuser_data(req: express.Request, res: express.Response) {
        try {
            const user = await userService.getuser_data(req.params.id as string);
            res.status(200).json(user);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }
}

export default new UserController();