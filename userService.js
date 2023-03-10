import User from "./user.js"

class userService{
    async create(user){
        const createdUser = await User.create(user)
        return createdUser
    }
    async getAll(){
        const users = await User.find()
        return users
    }
    async getOne(id){
        if(!id) throw new Error('Not find ID')
        const user = await User.findById(id)
        return user
    }
}

export default new userService()