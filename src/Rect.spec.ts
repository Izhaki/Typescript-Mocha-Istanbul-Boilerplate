import { expect } from 'chai';

import { Rect } from './Rect';
import { Point } from './Point';

describe( 'Rect', function() {

    describe( 'constructor()', function() {

        it( 'Should keep the given coordinates and dimensions', function() {
            var iRect = new Rect( 10, 20, 30, 40 );
            expect( iRect.x ).to.equal( 10 );
            expect( iRect.y ).to.equal( 20 );
            expect( iRect.w ).to.equal( 30 );
            expect( iRect.h ).to.equal( 40 );
        });

    });

    describe( 'clone()', function() {

        it( 'Should return a new rect with the same geometry', function() {
            var iRect  = new Rect( 10, 20, 30, 40 ),
                iClone = iRect.clone();

            expect( iClone ).to.include( iRect );
        });

    });

    describe( 'getLeft()', function() {

        it( 'should return x if the width is positive', function() {
            var iRect = new Rect( 20, 20, 100, 40 );
            expect( iRect.getLeft() ).to.equal( 20 );
        });


        it( 'should return x + w if the width is negative', function() {
            var iRect = new Rect( 20, 20, -10, 40 );
            expect( iRect.getLeft() ).to.equal( 10 );
        });

    });

    describe( 'getRight()', function() {

        it( 'should return x + w if the width is positive', function() {
            var iRect = new Rect( 20, 20, 100, 40 );
            expect( iRect.getRight() ).to.equal( 120 );
        });


        it( 'should return x if the width is negative', function() {
            var iRect = new Rect( 20, 20, -10, 40 );
            expect( iRect.getRight() ).to.equal( 20 );
        });
    });

    describe( 'getTop()', function() {

        it( 'should return y if the height is positive', function() {
            var iRect = new Rect( 20, 20, 100, 40 );
            expect( iRect.getTop() ).to.equal( 20 );
        });


        it( 'should return y + h if the height is negative', function() {
            var iRect = new Rect( 20, 20, 10, -10 );
            expect( iRect.getTop() ).to.equal( 10 );
        });

    });

    describe( 'getBottom()', function() {

        it( 'should return y + h if the height is positive', function() {
            var iRect = new Rect( 20, 20, 100, 40 );
            expect( iRect.getBottom() ).to.equal( 60 );
        });


        it( 'should return y if the height is negative', function() {
            var iRect = new Rect( 20, 30, 10, -40 );
            expect( iRect.getBottom() ).to.equal( 30 );
        });

    });

    describe( 'getLeftTop()', function() {

        it( 'should return the correct point for positive dimensions', function() {
            var iRect = new Rect( 20, 30, 100, 100 );
            expect( iRect.getLeftTop() ).to.include( new Point( 20, 30 ) );
        });


        it( 'should return the correct point for negative dimensions', function() {
            var iRect = new Rect( 20, 30, -10, -20 );
            expect( iRect.getLeftTop() ).to.include( new Point( 10, 10 ) );
        });

    });


});
