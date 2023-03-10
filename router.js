import Router from 'express'
import postController from './postController.js'
import userController from './userController.js'

const router = new Router()

router.post('/posts', postController.create)
router.get('/posts', postController.getAll)
router.get('/posts/:id', postController.getOne)
router.put('/posts', postController.update)
router.delete('/posts/:id', postController.delete)

router.post('/register', userController.create)
router.get('/users', userController.getAll)
router.get('/users/:id', userController.getOne)

export default router