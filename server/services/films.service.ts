import { Film } from '../db/models/film.model';
import * as mongoose from 'mongoose';
import { FilmData } from '../types/film.model';

// const Film = mongoose.model( 'Film' );

export class FilmsService {
    constructor() {
    }

    static listFilms() {
        console.log( 'Start Films loading from DataBase!' );
        console.dir( typeof Film );
        return mongoose.model( 'Film' )
            .find()
            .sort( { title: -1 } )
            .exec()
            .then( res => {
                console.log( 'DONE!' );
                return res;
            } );
    }

    static listFilmsFindTitle( param: any ): Promise<Array<FilmData>> {
        let paramArr = param.split( '' );
        let paramStr = '';

        while ( paramArr[ paramArr.length - 1 ] === ' ' ) {
            paramArr.splice( (paramArr.length - 1), 1 );
        }
        while ( paramArr[ 0 ] === ' ' ) {
            paramArr.splice( 0, 1 );
        }
        paramStr = paramArr.join( '' );

        return Film
            .find( {
                title: { $regex: new RegExp( paramStr.toLowerCase(), 'i' ) }
            } )
            .sort( { title: 1 } )
            .then( res => res.map( film => new FilmData( film ) ) );
    }

    static listFilmsFindStars( param: any ): any {
        let paramArr = param.split( '' );
        let paramStr = '';

        while ( paramArr[ paramArr.length - 1 ] === ' ' ) {
            paramArr.splice( (paramArr.length - 1), 1 );
        }
        while ( paramArr[ 0 ] === ' ' ) {
            paramArr.splice( 0, 1 );
        }
        paramStr = paramArr.join( '' );

        return Film.find( {
            stars: { $regex: new RegExp( paramStr.toLowerCase(), 'i' ) }
        } ).sort( { title: 1 } );
    }

    static createFilm( data: any ) {
        const film = new Film( {
            title: data.title,
            releaseYear: data.releaseYear,
            format: data.format,
            stars: data.stars
        } );

        return film.save();
    }

    static uploadFilms( films: any ) {

        for ( var i = 0; i < films.length - 1; i++ ) {
            const film = new Film( {
                title: films[ i ].title,
                releaseYear: films[ i ].releaseYear,
                format: films[ i ].format,
                stars: films[ i ].stars
            } );
            film.save();
        }

        const film = new Film( {
            title: films[ films.length - 1 ].title,
            releaseYear: films[ films.length - 1 ].releaseYear,
            format: films[ films.length - 1 ].format,
            stars: films[ films.length - 1 ].stars
        } );

        return film.save();
    }

    static deleteFilm( id: number ) {
        return Film.findById( id ).remove();
    }

    static deleteAllFilms() {
        return Film.remove( {} );
    }
}