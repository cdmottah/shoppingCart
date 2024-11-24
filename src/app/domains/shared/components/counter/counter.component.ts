import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  counter = signal(0)
  private _intervalRef: number | undefined

  constructor() {
    //NO ASYNC
    // Before render
    // run once
    console.log('constructor')
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
    console.log('-'.repeat(35))
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges')
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
    console.log(changes)
    const message = changes['message'];
    if (message && message.currentValue !== message.previousValue) {
      this._doSomeThing();
    }
    console.log('-'.repeat(35))
  }

  ngOnInit() {
    // after render
    // run once
    // async then subs
    console.log('ngOnInit')
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
    console.log('-'.repeat(35))

    this._intervalRef = window.setInterval(() => {
      console.log('interval updated')
      this.counter.update(state => state + 1)
    }, 1000)
  }

  ngAfterViewInit() {
    // after render and after child's were render
    console.log('ngAfterViewInit')
    console.log('-'.repeat(35))
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
    window.clearInterval(this._intervalRef)
    console.log('-'.repeat(35))
  }

  private readonly _doSomeThing = () => {
    console.log('message changed !! ')
  }
}
