import { Express, Request, Response, Router } from 'express';
import Packages from '../../controllers/v1/packages';

let router = Router();
let packages = new Packages();

router.get('/packages', (req, res) => packages.getPackages(req, res));

router.get('/', (req, res) => {
    res.send({
        message: 'v1 route'
    });
});

export default router;