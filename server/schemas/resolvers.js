const { AuthenticationError } = require("apollo-server-express");
const { User, List, Blog } = require("../models");
const { findByIdAndDelete } = require("../models/Blog");
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
        // Query for entire bucket list
        lists: async () => {
            return List.find();
        },
        // Query for one item in bucket list 
        list: async (parent, { _id }) => {
            return List.findById(_id);
        },
        // Query for all blog posts
        blogs: async () => {
            return Blog.find();
        },
        // Query for one blog post
        blog: async (parent, { _id }) => {
            return Blog.findById(_id);
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
        // Mutation to add bucket list item
        addList: async (parent, { location, urgency }) => {
            const list = await List.create({ location, urgency });
            return list;
        },
        //Mutation to delete a bucket list item
        deleteList: async (parent, { _id }) => {
            const list = List.findByIdAndDelete({ _id });
            return list;
        },
        // Mutation to add blog post
        addBlog: async (parent, { title, content }) => {
            const blog = await Blog.create({ title, content });
            return blog;
        }
    },
};

module.exports = resolvers;