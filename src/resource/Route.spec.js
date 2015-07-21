import {Route} from './Route';

(function () {
  'use strict';
  describe('Route', () => {

      describe('construction ', () => {

        describe('with no-arg constructor yields empty route with all required mixins.', () => {
          let route = new Route("GET", "alias", "url");
          it('# inherits all methods from Invocable',() => {
            expect(null).not.to.be.null;
          });
          it('# inherits all methods from Invocable',() => {

            expect(route.before).not.to.be.null; // supports advisable
            expect(route.after).not.to.be.null; // supports advisable

          });
          it('# inherits all methods from Metadata',() => {

            expect(route.metadata).not.to.be.null; // supports advisable

          });
        });
      });
    }
  )
  ;
})();