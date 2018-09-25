import { Connection, connect } from 'mongoose';

export namespace Database {

    export async function setupConnection() {
        try {
            await connect( `mongodb://nodeClient:nodeClient1111@ds111103.mlab.com:11103/filmsapp`, { useNewUrlParser: true } );
            console.log( 'Database connection success' );
        } catch ( e ) {
            console.error( 'Database connection error' );
        }
    }

}
