import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  step: any = 1;
  nameFlag: boolean = false;
  ranks = [
    {name: "Concientizacion", icon: "assets/images/consiencia.png"},
    {name: "Manejo de residuos", icon: "assets/images/mask.png"}
  ]

  teamTypes = [
    {name: "Local", icon: "assets/images/local.png", description: "Hackers inscritos en el sistema Tec.", size: "150px"},
    {name: "Externo", icon: "assets/images/externo.png", description: "Hackers estudiantes fuera del sistema Tec", size: "125px"},
    {name: "Mixto", icon: "assets/images/mixto.png", description: "Equipo de Hackers locales y externos", size: "125px"}
  ]

  teamInfo = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl(''),
    rank: new FormControl(''),
    hackerM: new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      code: new FormControl(''),
      campus: new FormControl(''),
      major: new FormControl(''),
      semester: new FormControl('')
    }),
    hacker2: new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      code: new FormControl(''),
      campus: new FormControl(''),
      major: new FormControl(''),
      semester: new FormControl('')
    }),
    hacker3: new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      code: new FormControl(''),
      campus: new FormControl(''),
      major: new FormControl(''),
      semester: new FormControl('')
    }),
    hacker4: new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      code: new FormControl(''),
      campus: new FormControl(''),
      major: new FormControl(''),
      semester: new FormControl('')
    }),
    hacker5: new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      code: new FormControl(''),
      campus: new FormControl(''),
      major: new FormControl(''),
      semester: new FormControl('')
    })
  });

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) { 
      this.matIconRegistry.addSvgIcon(
        `text`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/text icon.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `type`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/home icon.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `rank`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/world icon.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `info`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/code icon.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `master`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/hacker master icon.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `hacker`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/hacker icon.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `hacker-logo`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/Logo terciario.svg`)
      );
      
      /*this.matIconRegistry.addSvgIcon(
        `almost`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/box icon.svg`)
      );*/
    }

  ngOnInit(): void {
  }

  continue(change: any): void{
    if(this.teamInfo.controls.name.invalid && this.step == 1){
      this.nameFlag = true;
      return;
    }
    this.nameFlag = false;
    this.step = change;
  }

  submit(): void {
    console.log(this.teamInfo.value);
  }

}
