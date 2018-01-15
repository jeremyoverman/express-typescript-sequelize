import * as packages from '../../dao/packages';

export default class Packages {
    getPackages(req, res) {
        packages.getAll().then((results) => {
            res.send(results);
        });
    }
}