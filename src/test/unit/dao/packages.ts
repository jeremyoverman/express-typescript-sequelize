import { expect, assert } from 'chai';

import * as packages from '../../../dao/packages';

describe('The packages DAO', () => {
    describe('the add function', () => {
        it('should add a new package with only a name', (done) => {
            packages.add({
                name: 'Test Package'
            }).then((pkg) => {
                expect(pkg.id).to.not.be.null;
                done();
            });
        });

        it('should fail if you do not give a package name', (done) => {
            packages.add(<any>{}).then((pkg) => {
                assert(false, 'it still added the packaged');
                done();
            }).catch((err) => {
                expect(err.name).to.equal('SequelizeValidationError');
                done();
            });
        });
    });
});