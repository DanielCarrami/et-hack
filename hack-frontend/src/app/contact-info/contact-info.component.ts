import { Component, OnInit } from '@angular/core';
import { CrudService} from '../services/crud.service' ;
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

  sendMail(): void{
    const formData = new FormData();
    formData.append('message_name',this.mail.value['message_name']);
    formData.append('message_email',this.mail.value['message_email']);
    formData.append('message',this.mail.value['message']);
    console.log(this.mail.value);
    console.log(formData);
    this.crudService.send_mail(formData).then(res => console.log(res)).catch(err => console.error(err))
  }
}
