import * as db from '../sequelize/models/_index';

export function add(attributes: db.PackageAttributes) {
    return db.Package.model.build(attributes).save();
}

export function getAll() {
    return db.Package.model.findAll({ raw: true });
}