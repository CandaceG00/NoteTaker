const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3301;
const app = express();
const html_routes = require('./routes/html-routes.js');

app.use('/notes', html_routes);





app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);