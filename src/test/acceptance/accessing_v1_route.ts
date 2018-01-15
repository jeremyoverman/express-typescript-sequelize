import { assert } from 'chai';
import { request } from 'http';

describe('Accessing the api/v1 route', () => {
    it('should response v1 route at the root', (done) => {
        request('http://localhost:3000/api/v1', (data) => {
            console.log(data);
            done();
        });
    }).timeout(10000);
});