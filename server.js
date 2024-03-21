const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
  
const app = express()
app.set('port', process.env.PORT || 9001)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'library'
}



//middlewares ----------------------
app.use(myconn(mysql, dbOptions, 'single'))

//routes------------------------------
app.get('/', (req, res)=> {
    res.send ('welcome to my API')
}) //ruta principal de nuestra aplicacion

//server running-----------------------------
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port')) //mensaje de que esta corriendo el servidor
}) //puerta que usara 