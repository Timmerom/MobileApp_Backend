
import User from "../models/users";

class UserService {
    async register(user: any) {

        const createdUser = await User.create(user);
        return createdUser;
    }

    async login(email: string, password: any) {
        const user = await User.findOne({ email });
        if (!user) throw new Error("Email doesn't exist");
        if (String(user.password) !== String(password)) throw new Error("Wrong Password");
        return user;
    }

    async getuser_data(id: string) {
        const user = await User.findById(id);
        if (!user) throw new Error("User was not found in DB");
        return user;
    }


    async updateAvatar(id: string, imageUrl: string) {
    const user = await User.findByIdAndUpdate(
        id, 
        { avatar: imageUrl }, 
        { new: true } 
    );
    if (!user) throw new Error("User was not found");
    return user;
}



}

export default new UserService();