screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const source = timer(0, 5000);
const exemple = source.pipe(switchMap(() => interval(500)));
const subscribe = exemple.subscribe(val => console.log(val));

setTimeout(() => subscribe.unsubscribe(), 10000);