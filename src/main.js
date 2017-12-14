import Rx from 'rxjs/Rx';

window.onload = function() {

    Rx.Observable
        .of(1, 2, 3)
        .map( val => val * 10 )
        .mapTo(23)
        .subscribe( val => console.log(val) );

    //-------------------------------------------------------------------------

    Rx.Observable
        .fromEvent( document.querySelector('#test1'), 'click')
        .mapTo(3)
        .map( val => val * 10 )
        .subscribe( val => document.getElementById("result1").innerText = val );

    //-------------------------------------------------------------------------
    
    Rx.Observable
        .fromEvent( document.querySelector('#test2'), 'click')
        .mapTo(3)
        .scan( (acc, one) => acc + one, 0 )
        .subscribe( val => document.getElementById("result2").innerText = val );

    //-------------------------------------------------------------------------
    
    Rx.Observable
        .fromEvent( document.querySelector('#test3'), 'click')
        .mapTo(3)
        .scan( (acc, one) => acc + one, 0 )
        .filter( val => val % 9 === 0 )
        .subscribe( val => document.getElementById("result3").innerText = val );

    //-------------------------------------------------------------------------

    Rx.Observable.interval(1000)
        .take(10)
        .mapTo('■')
        .scan( (acc, one) => `${acc}${one}`, '' )
        .subscribe( val => document.getElementById("result4").innerText = val,
            (err) => console.log(err),
            ()    => document.getElementById("result4").innerText = 'complete'
        );
}
