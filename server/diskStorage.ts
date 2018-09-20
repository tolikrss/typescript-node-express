import * as multer from 'multer';

export const UPLOADS_FOLDER = 'uploads';

export const storage = multer.diskStorage( {
    destination: `./${UPLOADS_FOLDER}`,
    filename( req, file, cb ) {
        cb( null, `${file.originalname}` );
    },
} );

export const upload = multer( { storage } );