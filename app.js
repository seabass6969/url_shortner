const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.use(express.static("public"))

app.get('/r/:id', (req,res)=>{
    res.send(`id params ${req.params.id}`)
})
app.listen(port,()=>{
    console.log(`Server is running and it is on port ${port}`)
})
