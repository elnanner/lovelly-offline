import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note;
  @Input() loading;
  @Input() edit = true;
  constructor() { }

  ngOnInit() {
  }

}
