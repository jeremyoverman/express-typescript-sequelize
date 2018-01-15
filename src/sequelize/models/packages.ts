import * as Sequelize from 'sequelize';
import * as JSONAPISerializer from 'jsonapi-serializer';
import { JSONAPIModel, Instance, Types } from '../model';

export interface PackageAttributes {
    name: string;
    logo?: string;
    description?: string;
    download_32?: string;
    download_64?: string;
    bitness?: '32' | '64' | 'auto';
}

export interface PackageInstance extends Instance<PackageAttributes> { };

export default new JSONAPIModel('Package', {
    name: {
        type: Types.STRING,
        allowNull: false,
    },
    logo: Types.STRING,
    description: Types.STRING,
    download_32: Types.STRING,
    download_64: Types.STRING,
    bitness: Types.STRING
});