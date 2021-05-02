import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Validators } from '@angular/forms';
import { CrudService} from '../services/crud.service' ;
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {FormSuccessComponent} from '../modals/form-success/form-success.component';
import {FormFailureComponent} from '../modals/form-failure/form-failure.component';

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
  externalFlag: boolean = false;

  ranks = [
    {name: "Transporte", icon: "assets/images/consiencia.png", show: true},
    {name: "Agua", icon: "assets/images/mask.png", show: true},
    {name: "Contaminación Digital", icon: "assets/images/home_icon.png", show: true}
  ]

  teamTypes = [
    {name: "Local", icon: "assets/images/local.png", description: "Hackers inscritos en el sistema Tec.", size: "150px", showRank: true},
    {name: "Externo", icon: "assets/images/externo.png", description: "Hackers estudiantes fuera del sistema Tec", size: "125px", showRank: false},
    {name: "Mixto", icon: "assets/images/mixto.png", description: "Equipo de Hackers locales y externos", size: "125px", showRank: false}
  ]

  semester = [
    {value: '1', view: 'Primero'},
    {value: '2', view: 'Segundo'},
    {value: '3', view: 'Tercero'},
    {value: '4', view: 'Cuarto'},
    {value: '5', view: 'Quinto'},
    {value: '6', view: 'Sexto'},
    {value: '7', view: 'Septimo'},
    {value: '8', view: 'Octavo'},
    {value: '9', view: 'Noveno'},
    {value: '10', view: 'Decimo'},
    {value: '11', view: 'Onceavo'},
    {value: '12', view: 'Otro O_o'},
  ]

  teamInfo = new FormGroup({
    name: new FormControl('', Validators.required),
    team_type: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
    status: new FormControl(false) ,
    hackerM: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{6,}')]),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl('',),
      program: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker2: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('0000000000'),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl(''),
      program: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker3: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('0000000000'),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl(''),
      program: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker4: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('0000000000'),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl(''),
      program: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    }),
    hacker5: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('0000000000'),
      discord: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      campus: new FormControl(' '),
      program: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required)
    })
  });

  constructor(
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private crudService: CrudService, 
    private router: Router,
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
    if(this.teamInfo.controls.team_type.invalid && this.step == 2){
      this.teamFlag = true;
      return;
    }
    
    this.teamFlag = false;
    if(this.teamInfo.controls.rank.invalid && this.step == 3){
      this.rankFlag = true;
      return;
    }
    this.rankFlag = false;

    if(this.step == 2){
      if(this.teamInfo.value.team_type !== "Local"){
        this.externalFlag = true;
        this.ranks[0].show = false;
      }else{
        this.externalFlag  = false;
        this.ranks[0].show = true;
      }
    }
    
    if(this.step == 3){
      if(this.teamInfo.value.team_type !== "Local"){
        this.externalFlag = true;
      }else{
        this.externalFlag  = false;
      }
    }

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
    if(this.externalFlag){
      this.teamInfo.value.hackerM.campus = "NA";
      this.teamInfo.value.hacker2.campus = "NA";
      this.teamInfo.value.hacker3.campus = "NA";
      this.teamInfo.value.hacker4.campus = "NA";
      this.teamInfo.value.hacker5.campus = "NA";
    }

    
    console.log(this.teamInfo.value);
    this.crudService.create(this.teamInfo.value).then(res =>{
      console.log("Success");
      //Open Success Dialog
      this.openSuccesDialog()
      this.router.navigate(['/registration'])

    }).catch(err => {
      this.openFailureDialog();
      this.router.navigate(['/registration'])
      console.log("Error " + err)
    }).finally(() => {
      this.router.navigate(['/registration'])
    }) ;
  }

  openSuccesDialog(): void {
    const dialogRef = this.dialog.open(FormSuccessComponent, {
      width: '500px'
    });
  }

  openFailureDialog(): void {
    const dialogRef = this.dialog.open(FormFailureComponent, {
      width: '500px'
    });
  }

}
