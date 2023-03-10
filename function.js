import userService from "./userService.js"
import User from "./user.js"

class Functions{
    checkLogAndPassword (text) {
        const res = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/.test(text)
        return res
    }
    checkName (name) {
        const res = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/.test(name)
        return res
    }
    async checkLoginForUnicity (login){
        const user = await User.find( {login: login} )
        if(user.length > 0) return false
        else return true
    }
}

export default new Functions()