import { Film, IFilmDoc } from '../db/models/film.model';
import { FilmData } from '../types/film.model';

export class FilmsService {
    constructor() {
    }

    public static async listFilms(): Promise<Array<IFilmDoc>> {
        try {
            let result = await Film.find()
                .sort( { title: -1 } )
                .exec();
            return result;
        } catch ( e ) {
            console.error( 'Error in FilmsService.listFilms()!' );
        }
    }

    public static async listFilmsFindTitle( param: any ): Promise<Array<IFilmDoc>> {
        let paramArr = param.split( '' );
        let paramStr = '';

        while ( paramArr[ paramArr.length - 1 ] === ' ' ) {
            paramArr.splice( (paramArr.length - 1), 1 );
        }
        while ( paramArr[ 0 ] === ' ' ) {
            paramArr.splice( 0, 1 );
        }
        paramStr = paramArr.join( '' );


        try {
            let result = await Film
                .find( {
                    title: { $regex: new RegExp( paramStr.toLowerCase(), 'i' ) }
                } )
                .sort( { title: 1 } )
                .exec();
            return result;
        } catch ( e ) {
            console.error( 'Error in FilmsService.listFilmsFindTitle()!' );
        }
    }

    public static async listFilmsFindStars( param: any ): Promise<Array<IFilmDoc>> {
        let paramArr = param.split( '' );
        let paramStr = '';

        while ( paramArr[ paramArr.length - 1 ] === ' ' ) {
            paramArr.splice( (paramArr.length - 1), 1 );
        }
        while ( paramArr[ 0 ] === ' ' ) {
            paramArr.splice( 0, 1 );
        }
        paramStr = paramArr.join( '' );


        try {
            let result = await Film
                .find( {
                    stars: { $regex: new RegExp( paramStr.toLowerCase(), 'i' ) }
                } )
                .sort( { title: 1 } )
                .exec();
            return result;
        } catch ( e ) {
            console.error( 'Error in FilmsService.listFilmsFindStars()!' );
        }
    }

    public static async createFilm( data: any ): Promise<IFilmDoc> {
        const film = new Film( { ...data } );

        try {
            let result = film
                .save();
            return result;
        } catch ( e ) {
            console.error( 'Error in FilmsService.createFilm()!' );
        }
    }

    public static async uploadFilms( films: any ): Promise<any> {
        // for ( var i = 0; i < films.length - 1; i++ ) {
        //     const film = new Film( {
        //         title: films[ i ].title,
        //         releaseYear: films[ i ].releaseYear,
        //         format: films[ i ].format,
        //         stars: films[ i ].stars
        //     } );
        //     film
        //         .save()
        //         .exec();
        // }
        //
        // const film = new Film( {
        //     title: films[ films.length - 1 ].title,
        //     releaseYear: films[ films.length - 1 ].releaseYear,
        //     format: films[ films.length - 1 ].format,
        //     stars: films[ films.length - 1 ].stars
        // } );
        //
        // return film
        //     .save()
        //     .exec();

        try {
            const _films = films.map( ( film: any ) => film /*new Film( film )*/ );
            let result = await Film
                .create( _films );
            return result;
        } catch ( e ) {
            console.error( 'Error in FilmsService.uploadFilms()!' );
        }
    }

    public static async deleteFilm( id: number ): Promise<IFilmDoc> {
        try {
            let result = await Film
                .findById( id )
                .remove()
                .exec();
            return result;
        } catch ( e ) {
            console.error( 'Error in FilmsService.deleteFilm()!' );
        }
    }

    public static async deleteAllFilms(): Promise<any> {
        try {
            let result = await Film
                .remove( {} )
                .exec();
            return result;
        } catch ( e ) {
            console.error( 'Error in FilmsService.deleteAllFilms()!' );
        }
    }
}