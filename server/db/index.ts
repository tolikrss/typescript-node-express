import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';

export namespace Database {
    let _DB: Connection;

    export function setupConnection() {
        try {
            _DB = mongoose.createConnection( `mongodb://nodeClient:nodeClient1111@ds111103.mlab.com:11103/filmsapp`, { useNewUrlParser: true } );
            console.log( 'Database connection success' );
        } catch ( e ) {
            console.error( 'Database connection error' );
        }
    }

    export function getConnection(): Connection {
        return _DB;
    }

}
