import { Request, Response } from 'express';
import { IController } from './interfaces/controller';
import { FilmsService } from '../../services/films.service';


export class FilmsController {

    static listFilms( req: Request, res: Response ): void {
        FilmsService.listFilms()
            .then( ( data: any ) => {
                console.log( 'Films loaded from DataBase!' );
                console.dir( data );
                res.json( data )
            } );
        // res.json( {
        //     message: 'Welcome to API sekeleton.',
        // } );
    }

    static listFilmsFindTitle( req: Request, res: Response ): void {
        FilmsService.listFilmsFindTitle( req.params.id )
            .then( ( data: any ) => res.json( data ) );
    }

    static listFilmsFindStars( req: Request, res: Response ): void {
        FilmsService.listFilmsFindStars( req.params.id )
            .then( ( data: any ) => res.json( data ) );
    }

    static createFilm( req: Request, res: Response ): void {
        FilmsService.createFilm( req.body )
            .then( ( data: any ) => res.json( data ) );
    }

    static deleteFilm( req: Request, res: Response ): void {
        FilmsService.deleteFilm( req.params.id )
            .then( ( data: any ) => res.json( data ) );
    }

    static deleteAllFilms( req: Request, res: Response ): void {
        FilmsService.deleteAllFilms()
            .then( ( data: any ) => res.json( data ) );
    }

}
