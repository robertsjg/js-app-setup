import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // file system

describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        // virtual dom in memory
        jsdom.env(index, function(err, virwindow) {
            const h1 = virwindow.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
            virwindow.close();
        });
    });
});