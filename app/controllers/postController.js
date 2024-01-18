const { httpError } = require('../helpers/handleError')
const postModel = require('../models/postModel')


const getAllPosts = async (req, res) => {
    try{
        const listAll = await postModel.find({})
        res.send({ data: listAll })
    } catch(e){
        httpError(res, e)
        
    }
}

const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postModel.findById(postId);
        
        if (!post) {
          return res.status(404).json({ error: 'Post no encontrado' });
        }        
        res.json(post);
      } catch (e) {
        httpError(res, e);
      }
}

const createPost = async (req, res) => {
    try{
        const { title, content, userId } = req.body
        const resDetail = await postModel.create({
            title, content, userId
        })
        //res.send({ data: resDetail })
        res.status(201).json(resDetail)
    } catch(e){
        httpError(res, e) 
    }
}

const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content } = req.body;
    
        const updatedAt = new Date();

        const updatedPost = await postModel.findByIdAndUpdate(
            postId,
          { title, content, updatedAt },
          { new: true } // Devolver el documento actualizado
        );
    
        if (!updatedPost) {
          return res.status(404).json({ error: 'Post no encontrado' });
        }
    
        res.json(updatedPost);
    } catch (e) {
        httpError(res, e);
    }
}


const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await postModel.findByIdAndDelete(postId)
    
        if (!deletedPost) {
          return res.status(404).json({ error: 'Post no encontrado' });
        }
    
        res.json({ message: 'Post eliminado con éxito', deletedPost });
    } catch (e) {
        httpError(res, e);
    }
}


module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost }