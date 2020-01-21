const Express = require('express');
const ExpressGraphQL = require('express-graphql');
const Mongoose = require('mongoose');

var app = Express();

Mongoose.connect('mongodb://localhost/employee');

const { schema } = require('./schema');

app.use('/graphql', ExpressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Listening at :3000...');
});
