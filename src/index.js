const express = require('express');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');
const { engine } = require('express-handlebars');
const app = express();

    app.use(express.static(path.join(__dirname, 'public')));
app.use(
                    express.urlencoded({
             extended: true,
        }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

const port = 3000;

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
