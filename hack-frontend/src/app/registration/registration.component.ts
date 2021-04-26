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
  teamFlag: boolean = false;
  rankFlag: boolean = false;
  masterFlag: boolean = false;
  h2Flag: boolean = false;
  h3Flag: boolean = false;
  h4Flag: boolean = false;
  h5Flag: boolean = false;

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
    type: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
    hackerM: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl('', Validators.required),
      major: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker2: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl('', Validators.required),
      major: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker3: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl('', Validators.required),
      major: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker4: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl('', Validators.required),
      major: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker5: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl('', Validators.required),
      major: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
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
    if(change < this.step){
      this.step = change;
      return;
    }
    if(this.teamInfo.controls.name.invalid && this.step == 1){
      this.nameFlag = true;
      return;
    }
    this.nameFlag = false;
    if(this.teamInfo.controls.type.invalid && this.step == 2){
      this.teamFlag = true;
      return;
    }
    this.teamFlag = false;
    if(this.teamInfo.controls.rank.invalid && this.step == 3){
      this.rankFlag = true;
      return;
    }
    this.rankFlag = false;
    if(this.teamInfo.controls.hackerM.invalid && this.step == 4){
      this.masterFlag = true;
      return;
    }
    this.masterFlag = false;
    if(this.teamInfo.controls.hacker2.invalid && this.step == 5){
      this.h2Flag = true;
      return;
    }
    this.h2Flag = false;
    if(this.teamInfo.controls.hacker3.invalid && this.step == 6){
      this.h3Flag = true;
      return;
    }
    this.h3Flag = false;
    if(this.teamInfo.controls.hacker4.invalid && this.step == 7){
      this.h4Flag = true;
      return;
    }
    this.h4Flag = false;
    if(this.teamInfo.controls.hacker5.invalid && this.step == 8){
      this.h5Flag = true;
      return;
    }
    this.h5Flag = false;

    this.step = change;
  }

  submit(): void {
    console.log(this.teamInfo.value);
  }

}
