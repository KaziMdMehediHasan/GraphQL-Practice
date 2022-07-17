const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(5000, () => {
    console.log('listening on port 4000');
})