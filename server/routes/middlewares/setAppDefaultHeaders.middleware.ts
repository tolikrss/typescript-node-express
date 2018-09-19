import { NextFunction, Request, Response } from 'express-serve-static-core';

export class SetAppDefaultHeadersMiddleware {

    static requestHandler( req: Request, res: Response, next: NextFunction ) {
        res.setHeader( 'Access-Control-Allow-Origin', '*' );
        res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );
        res.setHeader( 'Access-Control-Allow-Headers', 'X-Requested-With,content-type' );
        res.setHeader( 'Access-Control-Allow-Credentials', 'true' );
        next();
    }

}