require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const monsterRoutes = require('./routes/monsterRoutes');
const dropRoutes = require('./routes/dropRoutes');
const sequelize = require('./sequelize');

const app = express();
app.use(cors());

app.use(bodyParser.json());

// Sync Sequelize models with the database (creates tables if they don't exist)
sequelize.sync();

// Routes
app.use('/api', monsterRoutes);
app.use('/api', dropRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
