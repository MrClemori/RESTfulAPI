import userService from "./userService.js"

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
        const users = await userService.getAll()
        const user = users.find(e => e.login === login)
        if(user === undefined) return true
        else return false
    }
}

export default new Functions()