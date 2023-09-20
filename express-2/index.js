const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('SOY EL CONTENEDOR 2')
})


app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
