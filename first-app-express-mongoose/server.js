const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config() //ODM
const userRoutes= require('./routes/user.route');
const app= express();
app.use (express.json());
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('connected to mongodb');
}) .catch((err) => {
    console.log('error connecting to mongodb', err)
})
app.use('/users',userRoutes);

//  { useNewUrlParser: true, useUnifiedTopology: true });
const PORT=process.env.PORT || 5000;
app.listen(7000, () => {
    console.log('listening on port 7000 http://localhost:7000');
});