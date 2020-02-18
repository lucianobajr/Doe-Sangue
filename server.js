//chama o express
const express = require("express");
const server = express();

server.use(express.static("public"));
//configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server,
    noCache: true //bool
});

//Lista de Doadores-->Array
const donors = [{
        blood: "AB+",
        name: "Luciano Belo"
    },
    {
        blood: "O-",
        name: "Gabriel Bordoni"
    },
    {
        blood: "A+",
        name: "Guilherme Aguiar"
    },

    {
        blood: "B+",
        name: "Guilherme Henrique"
    }
];

//configurando a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { donors });
});

server.listen(3000);