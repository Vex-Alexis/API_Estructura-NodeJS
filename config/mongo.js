// const mongoose = require('mongoose')

// const dbConnect = () => {
//     const DB_URI = process.env.DB_URI
//     mongoose.connect(DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, (err, res) => {
//         if(!err){
//             console.log('**** CONEXION CORRECTA ****')
//         } else {
//             console.log('**** ERROR DE CONEXION ****')
//         }
//     })

// }

// module.exports = { dbConnect }



const mongoose = require('mongoose');

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;

    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Conexión exitosa a la base de datos');

        // Aquí puedes realizar acciones adicionales después de la conexión
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
        // Manejar el error según tus necesidades
    }
};

module.exports = { dbConnect };
