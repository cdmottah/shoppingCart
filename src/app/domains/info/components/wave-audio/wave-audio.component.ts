import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import waveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
})
export class WaveAudioComponent {

  @Input({ required: true }) audioUrl!: string
  @ViewChild('wave') container!: ElementRef
  isplaying = signal(false);
  private _ws!: waveSurfer

  ngAfterViewInit(): void {
    this._ws = waveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
    this._ws.on('play', ()=> this.isplaying.set(true))
    this._ws.on('pause', ()=> this.isplaying.set(false))
  }

  playPause() {
    this._ws.playPause();
  }


}
