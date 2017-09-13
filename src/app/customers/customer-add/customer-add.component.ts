import { CustomerModel } from './../../model/customer';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  isOrder: boolean;
  formulario: FormGroup;

  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];

    this.isOrder = false;

    if (id != null) {
      this.isOrder = true;
    }
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastname: [null, Validators.required],
      customerEmail: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.minLength(5)]],
      streetAddress: [null],
      zipCode: [null],
      birthDate: [null],
    });
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('customerEmail');
    if (campoEmail.errors) {
      return campoEmail.errors['customerEmail'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.api.CustomerAdd(<CustomerModel>this.formulario.value).subscribe(res => this.backToOrder(res));
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  backToOrder(data){
    // console.log(data.LAST_INSERT_ID);
    if (data.LAST_INSERT_ID != null) {
      if(this.isOrder) {
        this.router.navigate([`order/${data.LAST_INSERT_ID}`]);
      }
      else {
        this.router.navigate(['customer']);
      }
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
