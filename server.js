const express = require ('express');
  
const app = express()
app.set('port', process.env.PORT || 9001)

app.get('/', (req, res)=> {
    res.send ('welcome to my API')
}) //ruta principal de nuestra aplicacion

app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port')) //mensaje de que esta corriendo el servidor
}) //puerta que usara 