const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        // Query for all users
        users: async () => {
            return User.find();
        },
        // Query for one user
        user: async (parent, { _id }) => {
            return User.findById(_id);
        },

    },
    Mutation: {
        // Mutation to sign up
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = await signToken(user);
            console.log(token);
            return { user, token };
        },
        // Mutation to login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("No profile with this email found!");
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect password!");
            }
            const token = signToken(user);
            console.log(user);
            return { token, user };
        },




    },
};

module.exports = resolvers;