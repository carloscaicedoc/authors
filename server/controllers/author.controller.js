const { Author } = require('../models/author.model');

module.exports = {
    index : (req, res) => {
        res.json({ message: "Authors Project" })
    },
    allAuthors : (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err))
    },
    oneAuthor : (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },
    createAuthor : (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err))
    },
    updateAuthor : (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body, { new: true, runValidators: true }
        )
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },
    deleteAuthor : (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(confirmation => res.json(confirmation))
            .catch(err => res.json(err))
    }
}