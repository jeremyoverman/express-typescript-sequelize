import * as express from 'express';
import * as winston from 'winston';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { Express } from 'express';
import initRoutes from './routes/_index';

const PORT: number = 3000;

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

    private app: Express;

    constructor() {
        this.app = express();

        // Express middleware
        this.app.use(cors({
            optionsSuccessStatus: 200
        }));

        this.app.use(urlencoded({
            extended: true
        }));

        this.app.use(json());
        this.app.use(morgan('combined'));

        this.app.listen(PORT, () => {
            winston.log('info', '--> Server successfully started at port %d', PORT);
        });

        initRoutes(this.app);
    }

    getApp() {
        return this.app;
    }
}

new Server();