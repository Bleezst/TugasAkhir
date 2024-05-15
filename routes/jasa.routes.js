const express = require(`express`)
const jasaController = require(`../controller/jasa.controller`)
const auth = require('../controller/auth.controller')
const app = express()
app.use(express.json())

app.get('/getall', jasaController.getAll )
app.get('/:key', jasaController.findJasa)
app.post('/', auth.authorize, jasaController.addJasa)
app.put('/:id', auth.authorize, jasaController.updateJasa)
app.delete('/:id', auth.authorize, jasaController.deleteJasa)

module.exports = app