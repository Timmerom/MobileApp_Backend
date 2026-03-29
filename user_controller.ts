import express from 'express'; 
import User from "./users";

class UserController {
    async register(req: express.Request, res: express.Response) { 
        try {
            const { email, password, telephone } = req.body;
            const user = await User.create({ email, password, telephone });
            const user_token = {userid: user.id}
            res.status(200).json(user_token);
        } catch (e) {
            res.status(500).json(e);


        }
    }


    async login(req:express.Request,res:express.Response){
        try{
            const{email,password} = req.body
            const user = await User.findOne({ email });
            if (!user){
                return res.status(404).json("Email doesn't exist")

            }
            if (user.password!== password){
                return res.status(401).json("Wrong Passwrod")
            }
           const user_token = {userid: user.id}
            res.status(200).json(user_token);

        } catch(e){
            return res.status(500).json("Server Error")
        }
    }



    
    async getuser_data(req: express.Request, res: express.Response) {
        try{
            const {id} = req.params
            const user = await User.findById(id)
            if (!user){
                return res.status(404).json("User was not found in DB")

            } 
            return res.status(200).json(user)

        } catch (e){
            res.status(500).json(e)

        }


    }

}

export default new UserController();