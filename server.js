//chama o express
const express = require("express");
const server = express();

//configurar o  servidor para apresentar arquivos estáticos
server.use(express.static("public"));

//Configurar Banco
const Pool = require("pg").Pool;
const db = new Pool({
    user: "postgres",
    password: "C3p0l28b12ajr99",
    host: "localhost",
    port: 5432,
    database: "doe"
});

//habilitar body do formulário
server.use(express.urlencoded({ extended: true }));

//configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server,
    noCache: true //bool
});

//configurando a apresentação da página
server.get("/", function(req, res) {
    db.query("SELECT * FROM donors", function(err, result) {
        if (err) return res.send("Erro de Banco de dados");
        const donors = result.rows;
        return res.render("index.html", { donors });
    });
});

server.post("/", function(req, res) {
    //pega dados do formulário

    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    //se o nome,email ou sangue igual a zero
    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os Campos são Obigatórios.");
    }
    //coloca valores no banco
    const query = `
        INSERT INTO donors("name","email","blood") 
        VALUES ($1, $2, $3)`;

    const values = [name, email, blood];
    db.query(query, values, function(err) {
        if (err) return res.send("Erro no banco de dados");
        return res.redirect("/");
    });
});

server.listen(3000);