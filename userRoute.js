const express = require('express')
const {getAllUser, createUser} = require('./userController')
const router = express.Router()



router.route('/').get(getAllUser).post(createUser)


module.exports = router