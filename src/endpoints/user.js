const router = require('express').Router()
const userService = require('../services/user')

router.post('/', async (req,res)=> {
    
    let userCreated = await userService.createUser(req.body)
    return res.status(201).json({userCreated})
})

module.exports = router;