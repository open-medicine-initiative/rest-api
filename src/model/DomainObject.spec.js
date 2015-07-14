import {DomainObject} from './DomainObject';

(function () {
  'use strict';
  describe('DomainObject', () => {

      describe('construction ', () => {

        describe('with no-arg constructor', () => {
          it('yields empty DomainObject with random uuid', () => {
            let domainObject = new DomainObject();
            expect(domainObject.id).not.to.be.null;
          });
        });
      });
    }
  )
  ;
})();