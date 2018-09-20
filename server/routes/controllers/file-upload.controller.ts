import { Request, Response } from 'express';
import * as fs from 'fs';
import { UPLOADS_FOLDER } from '../../diskStorage';


export class FileUploadController {

    static index( req: Request, res: Response ): void {
        const file = req.file; // file passed from client
        const meta = req.body; // all other values passed from the client, like name, etc..
        try {
            fs.readFile( `${UPLOADS_FOLDER}/${file.originalname}`, function ( err, data ) {
            } );
        } catch ( err ) {
            res.send( err );
        }
    }

}
