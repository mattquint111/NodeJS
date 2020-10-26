const express = require('express')
const router = express.Router()
const pgp = require('pg-promise')()
const connectionString = 'postgre://localhost:5432/assignment1'
const db = pgp(connectionString)

router.get('/', (req,res) => {
    db.any('SELECT id, title, body, date_created, date_updated, is_published FROM posts ORDER BY date_created DESC')
        .then(posts => {
            res.render('index', {posts})
        })
        .catch(err => console.log(err))
})

router.post('/add-post', (req,res) => {
    const title = req.body.title
    const body = req.body.body

    db.none('INSERT INTO posts(title, body) VALUES($1,$2)', [title, body])
        .then(() => {
            res.redirect('/')
        }).catch(err => console.log(err))
})

router.post('/publish-post', (req,res) => {
    const id = req.body.id

    db.none('UPDATE posts SET is_published = TRUE WHERE id = $1', [id])
        .then(() => {
            res.redirect('/')
        })
})

router.get('/details/:id', (req,res) => {
    const id = req.params.id

    db.one('SELECT id, title, body, date_created, date_updated, is_published FROM posts WHERE id=$1', [id])
    .then(post => {
        res.render('details', post)
    })
    .catch(err => console.log(err))
})

router.post('/delete-post', (req,res) => {
    const id = req.body.id

    db.none('DELETE FROM posts WHERE id=$1', [id])
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

router.post('/update-post', (req,res) => {
    const id = req.body.id
    const title = req.body.title
    const body = req.body.body

    db.none('UPDATE posts SET title=$1, body=$2, date_updated=current_timestamp WHERE id = $3', [title, body, id])
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
})


module.exports = router