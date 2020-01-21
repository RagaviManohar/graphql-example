const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');
const { UsersModel } = require('./models/User.model');


const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: {
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
    }
});

exports.schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            // Get all list
            people: {
                type: GraphQLList(PersonType),
                resolve: (root, args, context, info) => {
                    return UsersModel.find().exec();
                }
            },
            // Get particular person details
            person: {
                type: PersonType,
                args: {
                    id: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    return UsersModel.findById(args.id).exec();
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            person: {
                type: PersonType,
                args: {
                    firstname: { type: GraphQLNonNull(GraphQLString) },
                    lastname: { type: GraphQLNonNull(GraphQLString) },
                    email: { type: GraphQLNonNull(GraphQLString) },
                },
                resolve: (root, args, context, info) => {
                    var person = new UsersModel(args);
                    return person.save();
                }
            }
        }
    })
});
