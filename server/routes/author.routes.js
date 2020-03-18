const AuthorController = require('../controllers/author.controller')

module.exports = function(app){
    app.get('/api', AuthorController.index)
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.get('/api/authors/:id', AuthorController.findOneAuthor)
    app.put('/api/authors/:id', AuthorController.editAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
    app.post('/api/authors', AuthorController.createAuthor)
}
