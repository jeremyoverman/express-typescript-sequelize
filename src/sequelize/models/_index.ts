import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';

import PackageModel from './packages';

const config = require('../config/config.json');
const dbConfig = config[process.env.NODE_ENV];

export const sequelize = new Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], dbConfig);

export let Package = PackageModel.setup(sequelize);

export { PackageInstance, PackageAttributes } from './packages';