import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  standalone: true,
  imports: [],
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.css'
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  _dataSubscription!: Subscription;
  _observable: Observable<any> = new Observable()
  _obsCount: Observable<any> = new Observable()

  // ngOnInit(): void {
  //   this._dataSubscription = timer(0, 3000).subscribe(() => {
  //     console.log(Math.Floor(Math.random() * 10 + 1)); // Sending random data, you can send any data you want
  //   });

  //   setTimeout(() => {
  //     this._dataSubscription.unsubscribe();
  //   }, 10000); // Unsubscribe after 10 seconds
  // }

  // ngOnDestroy(): void {
  //   if (this._dataSubscription) {
  //     this._dataSubscription.unsubscribe();
  //   }

  // }

  ngOnInit(): void {
    // this._observable = fromEvent(document, 'click');
    // this._observable.subscribe(() => {
    //   console.log('initial')
    // })

    // second
    // of(10, 20, 30, 40, 50).subscribe((n) => {
    //   console.log(n)
    // })

    // of(10, 20, 30, 40, 50)
    //   .pipe(map((data) => { data < 30 }))
    //   .subscribe((num) => { console.log(num) });

    let obs1 = new Observable(o => {
      o.next(10);
      o.next(20);
      o.error('error');
      o.complete();
    });

    // obs1.subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   },
    //   complete: () => {
    //     console.log('completed')
    //   },
    // })


    // lab custom observable 
    // create obs 
    this._obsCount = new Observable(o => {
      let count = 0;
      setInterval(() => {
        o.next(count);
        count++;
      }, 3000)
    })
    // subscribe
    this._dataSubscription =
      this._obsCount.subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('completed')
        },
      })
    setTimeout(() => {
      this._dataSubscription.unsubscribe();
    }, 10000);

  }
  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

}

