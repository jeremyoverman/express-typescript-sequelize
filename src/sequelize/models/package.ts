import { Model, Instance, Types } from '../model';
import PackageDAO from '../dao/package';

export interface PackageAttributes {
    name: string;
    logo?: string;
    description?: string;
    download_32?: string;
    download_64?: string;
    bitness?: '32' | '64' | 'auto';
}

export interface PackageInstance extends Instance<PackageAttributes> {
    // Instance level attributes
}



export default class PackageModel extends Model<PackageInstance, PackageAttributes> {
    dao: PackageDAO<PackageInstance, PackageAttributes>;

    constructor() {
        super('package', {
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

        this.dao = new PackageDAO<PackageInstance, PackageAttributes>(this.model);
    };
}