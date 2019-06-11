import * as express from 'express';
import { HomeController } from './controllers/home.controller';
import { FilmsController } from './controllers/films.controller';
import { upload } from '../diskStorage';
import { FileUploadController } from './controllers/file-upload.controller';

const router = express.Router();

router.get( '/', new HomeController().index );
router.get( '/films', FilmsController.listFilms );
router.get( '/films/title/:id', FilmsController.listFilmsFindTitle );
router.get( '/films/stars/:id', FilmsController.listFilmsFindStars );
router.post( '/upload', upload.single( 'file' ), FileUploadController.index );
router.post( '/films', FilmsController.createFilm );
router.delete( '/films/:id', FilmsController.deleteFilm );
router.delete( '/films', FilmsController.deleteAllFilms );

export = router;
