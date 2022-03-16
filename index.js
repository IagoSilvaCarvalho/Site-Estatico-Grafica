const express = require('express');
const app = express();
const port = 3000
const path = require('path');

// Definindo a pasta de arquivos estáticos
app.use(express.static(__dirname+'/Public'));



app.get('/', (req,res) => {
    res.sendFile(path.resolve('views', 'index.html'));
});

//res.sendFile(_dirname + "/viws/index.html") tambel funciona ao inves
// do patc.resolve

app.listen(port, () => console.log(`The server is runnin on port: ${port} 🚀`));