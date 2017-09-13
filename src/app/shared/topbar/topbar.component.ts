import {Component,Inject,forwardRef, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}

  ngOnInit() {
  }

}
