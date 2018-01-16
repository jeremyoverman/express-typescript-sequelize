import * as sequelize from 'sequelize';

const JSONAPISerializer = require('jsonapi-serializer').Serializer;

export const Types: sequelize.DataTypes = require('sequelize').DataTypes;

export interface Instance<A> extends sequelize.Instance<A> {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface JSONAPISequelizeModel<I, A> extends sequelize.Model<I, A> {
    // Allows us to define instance level methods
    prototype?: Instance<A>;
}

export interface JSONAPISerializerOpts {
    attributes: [string];
    ref: any;
    included: any;
    id: string;
    topLevelLinks: Object;
    dataLinks: Object;
    dataMeta: Object;
    relationshipLinks: Object;
    relationshipMeta: Object;
    ignoreRelationshipData: Boolean;
    keyForAttribute: 'dash-case' | 'lisp-case' | 'spinal-case' | 'kebab-case' | 'underscore_case' | 'snake_case' | 'camelCase' | 'CamelCase' | Function;
    nullIfMissing: Boolean;
    pluralizeType: Boolean;
    typeForAttribute: Function;
    meta: Object;
    transform: Function;
}

/**
 * Create a custom model class. Model.model will allow you access to
 * the sequelize model, while Model.serialize will serialize the response
 * to be JSONAPI compliant.
 */
export class Model<I, A> {
    private types: sequelize.DataTypes = Types;

    attributes: sequelize.DefineAttributes;
    attributeArray: string[];
    name: string;
    model: JSONAPISequelizeModel<I, A>;

    constructor(name: string, attributes: sequelize.DefineAttributes) {
        this.name = name;
        this.attributes = attributes;
        this.attributeArray = Object.keys(this.attributes);
    }

    /**
     * Serialze values to be JSONAPI compliant
     *
     * @param data The value or values to be serialized
     */
    serialize(data, opts?: JSONAPISerializerOpts) {
        opts = Object.assign({
            attributes: this.attributeArray
        }, opts);

        return new JSONAPISerializer(this.name, {
            attributes: this.attributeArray
        }).serialize(data);
    }

    setup(sqlz: sequelize.Sequelize) {
        this.model = sqlz.define(this.name, this.attributes);

        return this;
    }
}
