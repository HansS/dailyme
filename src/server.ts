import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

// Express View
// app.engine('.html', expressEngine);
// app.set('views', __dirname);
// app.set('view engine', 'html');

app.use(bodyParser.json());

// Serve static files
app.use(express.static(root, {index: false}));

app.get('/', (req, res) => {
   res.json({
       message: 'Hi from server'
   });
});

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});