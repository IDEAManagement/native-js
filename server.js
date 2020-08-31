require('dotenv').config(); // read .env files
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

// Set public folder as root
app.use(express.static(path.resolve(__dirname, '.')));

// Allow front-end access to node_modules folder
//app.use('/scripts', express.static(`${__dirname}/node_modules/`));
app.use('/scripts', express.static(`script`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile('index.htm', { root: '.' }));

// Listen for HTTP requests on port 80
app.listen(port, () => {
    console.log('listening on %d', port);
});