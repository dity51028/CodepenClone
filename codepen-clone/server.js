const express=require('express')
const app=express()
const PORT=5000 || process.env.PORT
app.use(express.static('build'))
const path=require('path')
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));