import Rx from 'rxjs/Rx';

//of
Rx.Observable
    .of(1, 2, 3)
    .subscribe( val => console.log(val) );
