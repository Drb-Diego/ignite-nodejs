const express = require('express');

const app = express();
const PORT = 3333;

app.get('/', (request, response) => response.json({massage: 'Hello World !'}));

app.listen(PORT, () => console.log(`🚀 Server up !🚀\nhttp://localhost:${PORT}`))