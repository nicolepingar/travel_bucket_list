const db = require('../config/connection');
const { User, List, Blog } = require('../models');
const listSeeds = require('./listSeeds.json');
const blogSeeds = require('./blogSeeds.json');

db.once('open', async () => {
    try {
        await List.deleteMany({});
        await List.create(listSeeds);
        await Blog.deleteMany({});
        await Blog.create(blogSeeds);
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
