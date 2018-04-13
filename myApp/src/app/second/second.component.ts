import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() src: string
  @Output() select = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }
  onImageClick(){
    this.select.emit(this.src);
  }
}
