const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//seguridad 
app.use(helmet()); // Basic configuration
app.use(cors()) // Basic configuration for enable CORS


//rutas
app.use('/api', require('./routes'));


// Servidor
app.listen(3001, () => {
    console.log(`Express on port 3001`);
  });


module.exports = router;

