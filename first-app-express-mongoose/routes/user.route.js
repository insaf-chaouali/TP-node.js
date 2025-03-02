const express = require('express')
const User= require('../models/user')
const router = express.Router();

router.post('/create', async (req, res) => {
    try{const user = new User(req.body)
        await user.save()  //await async prend temps de retourner donnee de la base de donnee
        res.status(201).send({message:"User Created successfully"})    //201 created and ok 
    } catch (error) {
                 res.status(500).send({message: error.message})
}
})
router.get('/all', async (req, res) => {
    try{const users =  await User.find()  //await async prend temps de retourner donnee de la base de donnee
        res.status(201).send(users)    //201 created and ok 
    } catch (error) {
                 res.status(500).send({message: error.message})
}
})
router.get('/:name', async (req, res) => {
    try{
        const user = await User.findOne({name: req.params.name})
        if(!user){
            res.status(404).send(user)
        }
        res.status(201).send(user)    //201 created and ok
    } catch (error) {
                 res.status(500).send({message: error.message})
}
})
router.put('/update/:name', async (req, res) => {
    try{
        const user = await User.findOne({name: req.params.name})
        if(!user){
            res.status(404).send({message: "User not found"})   
        }
        await User.findOneAndUpdate({name: req.params.name},{$set:{name:"Amira"}})
        res.status(201).send(user)    //201 created and ok
    } catch (error) {
                 res.status(500).send({message: error.message})
}
})

module.exports = router;
