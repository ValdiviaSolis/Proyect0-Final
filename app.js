const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const router = require('./routes/');
app.use('/api', router)

// app.get('/', (req, res) => {
//     res.send(`
//     <html>
//         <body>
//             <h1>Hola mundo</h1>
//             <p>menudo</p>
//         </body>
//     </html>
//     `)
// })

app.listen(3000, () => console.log('Escuchando del puerto 3000'));