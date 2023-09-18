const express = require('express')
const os = require('os')

const  index = express()
index.get('/', (req, res) => {
    res.send(`Hi from ${os.hostname()}`)
})
const port = 3000
index.listen(port, () => console.log(`listening on port ${port}`))