const { Author } = require('../models/author.model')

module.exports.index = (req, res) => {
    res.json({ message: "hello"})
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err =>  res.json(err))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body) // from form
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.editAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}