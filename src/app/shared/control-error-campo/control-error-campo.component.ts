import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-control-error-campo',
  templateUrl: './control-error-campo.component.html',
  styleUrls: ['./control-error-campo.component.scss']
})
export class ControlErrorCampoComponent implements OnInit {

  @Input() msgError: string;
  @Input() mostrarError: boolean;

  constructor() { }

  ngOnInit() {
  }

}
