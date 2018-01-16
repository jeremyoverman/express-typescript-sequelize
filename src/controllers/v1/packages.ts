import * as db from '../../sequelize/models/_index';

export default class Packages {
    dao = db.Package.dao;

    getPackages(req, res) {
        db.Package.dao.getAll().then((results) => {
            res.send(db.Package.serialize(results));
        });
    }
}