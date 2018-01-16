// General setup stuff. No need to edit.
import * as Sequelize from 'sequelize';

const config = require('../config/config.json')[process.env.NODE_ENV];
export const sequelize = new Sequelize(config['database'], config['username'], config['password'], config);

/*
 * Import and initialize all pakages here. Each group of
 * import/exports should follow the following scheme:
 *
 * Example:
 *
 *    import AwesomeModel from './awesome';
 *    export const Awesome = new AwesomeModel().setup(sequelize);
 *    export { AwesomeInstance, AwesomeAttributes } from './awesome';
 */

// Package
import PackageModel from './package';
export const Package = new PackageModel().setup(sequelize);
export { PackageInstance, PackageAttributes } from './package';