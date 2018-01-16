import * as db from '../models/_index';
import { JSONAPISequelizeModel } from '../model';

export default class PackageDAO<I, A>{
    model: JSONAPISequelizeModel<I, A>;

    constructor(model: JSONAPISequelizeModel<I, A>) {
        this.model = model;
    }

    add(attributes: db.PackageAttributes) {
        return db.Package.model.build(attributes).save();
    }

    getAll() {
        return db.Package.model.findAll({ raw: true });
    }
}