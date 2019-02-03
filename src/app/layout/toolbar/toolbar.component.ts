import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public toggleSidenav(){
    this.navigationService.toggle();
  }

  constructor(
    private navigationService : NavigationService
  ) { }

  ngOnInit() {
  }

}
