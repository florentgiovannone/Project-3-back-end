import express from 'express'
import { getWines, getwineById, createwine, deletewine, updatewine, } from '../controllers/wine-controller';
import { login, getUser, getUserById, getUserByName, createUser, deleteUser, updateUser, getCurrentUser } from '../controllers/user-controller'
import secureRoute from '../middleware/secureRoute';

const router = express.Router()

// ! Api routes for wines
router.route('/api/rouge/wines').get(getWines)

router.route('/api/rouge/wines/:wineId').get(getwineById)

router.route('/api/rouge/wines').post(secureRoute, createwine)

router.route('/api/rouge/wines/:wineId').delete(secureRoute, deletewine)

router.route('/api/rouge/wines/:wineId').put(secureRoute, updatewine)





// ! Api routes for users
router.route('/api/rouge/user').get(getUser)

router.route('/api/rouge/user/:userId').get(getUserById)

router.route('/api/rouge/user/name/:userNameId').get(getUserByName)

router.route('/api/rouge/user').post(createUser)

router.route('/api/rouge/user/:userId').delete(deleteUser)

router.route('/api/rouge/user/:userId').put(updateUser)

router.route("/api/rouge/login").post(login)

router.route('/api/rouge/user').get(secureRoute, getCurrentUser)

export default router
