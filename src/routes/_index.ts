import * as winston from 'winston';
import { Express, Request, Response } from 'express';

import v1 from './v1/_index';

export function initRoutes(app: Express) {
    winston.log('info', '--> Initializing Routes');

    app.use('/api/v1', v1);

    // Handle 404's
    app.all('*', (req: Request, res: Response) => res.status(404).send({
        message: 'Not Found'
    }));
}