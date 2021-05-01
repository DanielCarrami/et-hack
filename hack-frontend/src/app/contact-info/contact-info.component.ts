import { Component, OnInit } from '@angular/core';
import { CrudService} from '../services/crud.service' ;
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  mail = new FormGroup({
    message_name: new FormControl(''),
    message_email: new FormControl(''),
    message: new FormControl('')
  })
  constructor(
    private crudService: CrudService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastr.success('Espera respuesta del equipo organizador en tu correo','Tu correo ha sido enviado');
  }

  showFailure(){
    this.toastr.error('Hubo un error', 'Intentalo más tarde')
  }

  sendMail(): void{
    const formData = new FormData();
    formData.append('message_name',this.mail.value['message_name']);
    formData.append('message_email',this.mail.value['message_email']);
    formData.append('message',this.mail.value['message']);
    if(this.mail.value['message_name'] === '' || this.mail.value['message_email'] === '' || this.mail.value['message'] === '' ){
      this.showFailure()
    }else{
      this.crudService.send_mail(formData).then(res => {
        console.log(res);
        this.mail.value['message_name']="";
        this.mail.value['message_email']="";
        this.mail.value['message']="";
        this.mail.reset();
        this.showSuccess()
      }).catch(err => {
        this.showFailure()
        console.error(err)
      })
    }
    
  }
}
