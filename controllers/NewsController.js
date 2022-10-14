const NewModel = require('../models/new');
const Repository = require('../models/repository');
module.exports =
    class NewsController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext, new Repository(new NewModel()));
        }
    }