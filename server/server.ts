import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

import * as homeController from './controllers/home.controller';

dotenv.config();

const app = express();
const router = express.Router();

app.set( 'port', process.env.PORT || 3000 );
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( cookieParser() );
app.get( '/', homeController.index );

export = router;

app.listen( app.get( 'port' ), () => {
    console.log( ('App is running at http://localhost:%d in %s mode'), app.get( 'port' ), app.get( 'env' ) );
    console.log( 'Press CTRL-C to stop\n' );
} );

module.exports = app;