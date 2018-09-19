import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as routes from './routes/routes';
import { Database } from './db/index';
import { SetAppDefaultHeadersMiddleware } from './routes/middlewares/setAppDefaultHeaders.middleware';

dotenv.config();

Database.setupConnection();

const app = express();
app.set( 'port', process.env.PORT || 3000 );
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( cookieParser() );
app.use( SetAppDefaultHeadersMiddleware.requestHandler );
app.use( '/', routes );


app.listen( app.get( 'port' ), () => {
    console.log( ('App is running at http://localhost:%d in %s mode'), app.get( 'port' ), app.get( 'env' ) );
    console.log( 'Press CTRL-C to stop\n' );
} );

module.exports = app;