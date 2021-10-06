const nav = require("./data/nav.json")

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index.ejs', { nav: nav, url: req.url })
});

nav.forEach(elt =>
    app.get(elt.url, (req, res) => {
        res.render(`pages${elt.url}.ejs`, { nav: nav, url: req.url })
    })
)

app.use((req, res, next) => {
    return res.status(404).render(`pages/err404.ejs`, { nav: nav, url: req.url })
});

app.listen(port, () => console.log(`Listening to localhost:${port}`));

