// userController.ts
import express from 'express'; 
import userService from '../services/userService';

class UserController {
    async register(req: express.Request, res: express.Response) { 
        try {
  
            const user = await userService.register(req.body);
            const user_token = {userid: user.id}
            res.status(200).json(user_token);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async login(req: express.Request, res: express.Response) {
        try {
            const { email, password } = req.body;

            const user = await userService.login(email as string, password);
            const user_token = {userid: user.id}
            res.status(200).json(user_token);
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

    async uploadAvatar(req: express.Request, res: express.Response) {
    try {
        if (!req.file) {
            return res.status(400).json("File was not chosen");
        }

        const { id } = req.body; 
        const imageUrl = req.file.path; 
        const updatedUser = await userService.updateAvatar(id, imageUrl);

        res.status(200).json(id);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
}
}

export default new UserController();