const express = require("express")
const app = express()
const PORT = 3500
const movie = require('./routes/movies.js')
const fruit = require('./routes/fruits.js')
const vegetable = require('./routes/vegetables.js')


// app.use(movie)

// const movieList = ["24","Maya","Game Over"]
// const fruits = ["Apple","Orange","Tomato"]
// const vegetables = ["Carrot","Brinjal","Cabbage"]

// function addToArray(array1,array2){
//     {
//         for(var i=0;i<array2.length;i++)
//         {
//             array1.push(array2[i])
//         }
//     }
// }

app.use(express.json())

app.get("/", (req,res) => {
    res.send('<h1>HELLO WORLD<h1/>')
})

app.use('/:name', (req,res,next) => {
    // console.log(req)
    console.log(req.params.name)
    console.log(req.url)
    // movie
    res.send(req.params.name)
    // next()
}
)

app.use("/movies",movie)
app.use("/fruits",fruit)
app.use("/vegetables",vegetable)

app.listen(PORT , () => {
    console.log(`Server working at port ${PORT}`)
})

// app.get("/movies", (req,res) => {
//     res.send(movieList)
// })

// app.post("/movies", (req,res) => {
//     console.log("New movie : " + req.body)
//     addToArray(movieList,req.body)
//     res.send(movieList)
// })

// app.get("/fruits", (req,res) => {
//     res.send(fruits)
// })

// app.post("/fruits", (req,res) => {
//     console.log("New fruits : " + req.body)
//     addToArray(fruits,req.body)
//     res.send(fruits)
// })

// app.get("/vegetables", (req,res) => {
//     res.send(vegetables)
// })

// app.post("/vegetables", (req,res) => {
//     console.log("New vegetables : " + req.body)
//     addToArray(vegetables,req.body)
//     res.send(vegetables)
// })