import {
    DataTypes, DataTypeAbstract, DefineAttributes,
    DefineOptions, Model, Sequelize, Instance,
    SequelizeStaticAndInstance
} from 'sequelize';

export const Types: DataTypes = require('sequelize').DataTypes;

export interface Instance<Attributes> extends Instance<Attributes> {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export class JSONAPIModel {
    private types: DataTypes = Types;
    attributes: DefineAttributes;
    attributeArray: string[];
    name: string;
    model: any;

    constructor(name: string, attributes: DefineAttributes) {
        this.name = name;
        this.attributes = attributes;
        this.attributeArray = Object.keys(this.attributes);
    }

    setup(sequlize: Sequelize) {
        this.model = sequlize.define(this.name, this.attributes);

        return this;
    }
}