const db = require('../utils/db.config')
const getAllVideos = require('../queries/get-all-videos')
const getVideo = require('../queries/get-video')
const createVideo = require('../queries/create-video')
const updateVideo = require('../queries/update-video')
const router = require('express').Router()

router.get('/', (req, res) => {
  db.query(getAllVideos, (err, results) => {
    if (err) throw err
    res.send(results)
  })
})

router.get('/:id', (req, res) => {
  db.query(`${getVideo}${req.params.id}`, (e, result) => {
    if (e) throw e
    res.send(result)
  })
})

router.post('/create', (req, res) => {
  db.query(createVideo, [req.body.nome_video, req.body.autor_video], (e, result) => {
    if (e) throw e
    res.send('Video created succesfully')
  })
})

router.put('/update', (req, res) => {
  const { id, nome_video, autor_video} = req.body
  db.query(updateVideo, [nome_video, autor_video, id], (e, result) => {
    if (e) throw e
    res.send('Video Updated succesfully')
  })
})

module.exports = router