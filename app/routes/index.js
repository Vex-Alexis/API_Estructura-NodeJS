const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWitOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWitOutExt)
    if(!skip){
        // Este codigo sirve para crear una familia de rutas, unicamente debemos crear el archivo con el nombre.
        router.use(`/${fileWitOutExt}`, require(`./${fileWitOutExt}`)) //TODO: localhost/userRoutes
        console.log('CARGAR RUTA ---> ', fileWitOutExt);
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router