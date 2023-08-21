const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3301;
const app = express();
const html_routes = require('./routes/html-routes.js');
const api_routes = require('./routes/api-routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(api_routes);
app.use(html_routes);






app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);