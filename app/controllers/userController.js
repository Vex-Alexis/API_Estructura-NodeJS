const { httpError } = require('../helpers/handleError')
const userModel = require('../models/userModel')


const getItems = (req, res) => {
    res.send({ list: [1, 2, 3] })
}

const getItem = () => {
    
}


const createItem = (req, res) => {
    try{
        const { fullName, age, email, password, createdAt } = req.body

    } catch(e){
        httpError(res, e)
        
    }
    
}

const updateItem = () => {
    
}


const deleteItem = () => {
    
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }