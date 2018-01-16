import * as db from '../../sequelize/models/_index';

export default class Packages {
    dao = db.Package.dao;

    getPackages(req, res) {
        this.dao.getAll().then((results) => {
            res.send(results);
        });
    }
}