const { httpError } = require('../helpers/handleError')
const userModel = require('../models/userModel')


const getAllUsers = async (req, res) => {
    try{
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch(e){
        httpError(res, e)
        
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        
        if (!user) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        res.json(user);
      } catch (e) {
        httpError(res, e);
      }
}


const createUser = async (req, res) => {
    try{
        const { fullName, age, email, password, createdAt } = req.body
        const resDetail = await userModel.create({
            fullName, age, email, password, createdAt
        })
        //res.send({ data: resDetail })
        res.status(201).json(resDetail)
    } catch(e){
        httpError(res, e) 
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { fullName, age, password } = req.body;
    
        const updatedAt = new Date();

        const updatedUser = await userModel.findByIdAndUpdate(
          userId,
          { fullName, age, password, updatedAt },
          { new: true } // Devolver el documento actualizado
        );
    
        if (!updatedUser) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
    
        res.json(updatedUser);
      } catch (e) {
        httpError(res, e);
      }
}


const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(userId)
    
        if (!deletedUser) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
    
        res.json({ message: 'Usuario eliminado con éxito', deletedUser });
    } catch (e) {
        httpError(res, e);
    }
}


module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }