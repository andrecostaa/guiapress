const Sequelize = require("sequelize")
const connection = require("../database/database")
const Category = require("../categories/Category")


const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// RELACIONAMENTOS
Category.hasMany(Article); // UMA Categoria pode ter MUITOS artigos
Article.belongsTo(Category); // UM artigo pertence a UMA categoria

//Article.sync({force: true}) // toda vez q eu iniciar a app, ele recriara as minhas tabelas

module.exports = Article;