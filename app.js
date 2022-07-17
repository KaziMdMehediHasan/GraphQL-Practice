const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

// connect  to the database

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kzvwbxl.mongodb.net/?retryWrites=true&w=majority`)
    .then((res) => {
        console.log("Database Connected Successfully!");
    })
    .catch((err) => {
        console.log(err);
    });


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(5000, () => {
    console.log('listening on port 5000');
})