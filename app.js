const express = require('express');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const { handleError } = require('./utils/error');
const { homeRouter } = require('./routers/home');
const { childRouter } = require('./routers/child');

const app = express();

app.use(methodOverride('_method'));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));
// app.use(express.json()); //Content-type: application/json
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers, //Additional functionalyty for handlebars
  })
);
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
  console.log('Server is listening on http://localhost:3000');
});
