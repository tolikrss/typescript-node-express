import { Request, Response } from 'express';
import { IController } from './interfaces/controller';

let pkg = require( __dirname + '/../../../package.json' );

export class HomeController implements IController {

    index( req: Request, res: Response ): void {
        res.json( {
            message: 'Welcome to API sekeleton.',
            version: pkg.version,
        } );
    }

    constructor() {
    }

}
