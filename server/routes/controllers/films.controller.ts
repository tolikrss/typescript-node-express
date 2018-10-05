import { Request, Response } from 'express';
import { IController } from './interfaces/controller';
import { FilmsService } from '../../services/films.service';


export class FilmsController {

    public static async listFilms( req: Request, res: Response ): Promise<any> {
        const queryParams = req.query;
        let films = await FilmsService.listFilms();
        res.json( films );
        return films;
    }

    public static async listFilmsFindTitle( req: Request, res: Response ): Promise<any> {
        const queryParams = req.query;
        let findedFilms = await FilmsService.listFilmsFindTitle( req.params.id );
        res.json( findedFilms );
        return findedFilms;
    }

    public static async listFilmsFindStars( req: Request, res: Response ): Promise<any> {
        const queryParams = req.query;
        let findedFilms = await FilmsService.listFilmsFindStars( req.params.id );
        res.json( findedFilms );
        return findedFilms;
    }

    public static async createFilm( req: Request, res: Response ): Promise<any> {
        const queryParams = req.query;
        let createdFilm = await FilmsService.createFilm( req.body );
        res.json( createdFilm );
        return createdFilm;
    }

    public static async deleteFilm( req: Request, res: Response ): Promise<any> {
        const queryParams = req.query;
        let deletedFilm = await FilmsService.deleteFilm( req.params.id );
        res.json( deletedFilm );
        return deletedFilm;
    }

    public static async deleteAllFilms( req: Request, res: Response ): Promise<any> {
        const queryParams = req.query;
        let deletedFilms = await FilmsService.deleteAllFilms();
        res.json( deletedFilms );
        return deletedFilms;
    }

}
