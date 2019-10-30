const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static('./dist'))

app.get('/img/:type/:imgName', (req, res) => {
  res.sendFile(`${__dirname}/art/faces/${req.params.type}/${req.params.imgName}.png`)
})

app.listen(PORT, () => console.log(`...listening on port: ${PORT}`))
