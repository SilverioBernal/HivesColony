import { AppComponent } from './../../app.component';
import {Component, Input, OnInit, EventEmitter, ViewChild, Inject, forwardRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}

  ngOnInit() {
  }

}
