const express = require ('express');
  
const app = express()
app.set('port', process.env.PORT || 9000)

app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port')) //mensaje de que esta corriendo el servidor
}) //puerta que usara 