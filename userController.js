import userService from "./userService.js"
import Functions from "./function.js"

class userController{
    async create(req, res) {
        try{
            const isName = await Functions.checkName(req.body.name)
            const isLogin = await Functions.checkLogAndPassword(req.body.login)
            const isPassword = await Functions.checkLogAndPassword(req.body.password)
            const isLoginUnicity = await Functions.checkLoginForUnicity(req.body.login)
            if(isName &&  isLogin &&  isPassword && isLoginUnicity){
                const user = await userService.create(req.body) 
                res.json(user)
            } else {
                res.status(500).json('Error')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAll(req, res){
        try {
            const users = await userService.getAll()
            res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne(req, res){
        try {
            const user = await userService.getOne(req.params.id)
            res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new userController()