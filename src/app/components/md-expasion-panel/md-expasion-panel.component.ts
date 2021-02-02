import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-expasion-panel',
  templateUrl: './md-expasion-panel.component.html',
  styleUrls: ['./md-expasion-panel.component.css']
})
export class MdExpasionPanelComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
