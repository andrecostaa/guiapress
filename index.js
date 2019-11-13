const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./articles/ArticlesController")
const articlesController = require("./categories/CategoriesController")

// view engine
app.set('view engine', 'ejs')

// static
app.use(express.static('public'))

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// dataBase
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso")
    }).catch((error)=> {
        console.log(error)
    })


app.use("/", categoriesController)
app.use("/", articlesController)

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8080, () => {
    console.log("O servidor está rodando!")
})