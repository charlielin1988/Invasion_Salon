const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const db = require('./db');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
