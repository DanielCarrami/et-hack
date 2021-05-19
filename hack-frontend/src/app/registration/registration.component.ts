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
  isChecked: boolean = false;
  termsFlag: boolean = false;

  name: boolean = false;
  email: boolean = false;
  phone: boolean = false;
  discord: boolean = false;
  code: boolean = false;
  program: boolean = false;
  semester:  boolean = false;

  ranks = [
    {name: "Transporte", icon: "assets/images/transporte.png", show: true, width: '200px', height: '70px'},
    {name: "Agua", icon: "assets/images/biengrifo.png", show: true, width: '180px', height: '100px'},
    {name: "Contaminación Digital", icon: "assets/images/servidores.png", show: true, width: '150px', height: '100px'}
  ]

  teamTypes = [
    {name: "Local", icon: "assets/images/local.png", description: "Hackers inscritos en el sistema Tec.", size: "150px", showRank: true},
    {name: "Externo", icon: "assets/images/externo.png", description: "Hackers estudiantes fuera del sistema Tec", size: "125px", showRank: false},
    {name: "Mixto", icon: "assets/images/mixto.png", description: "Equipo de Hackers locales y externos", size: "125px", showRank: false}
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
      campus: new FormControl(''),
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
    this.name = false; this.email = false; this.phone= false; this.discord=false; this.code = false; this.program = false; this.semester = false;
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
      if(this.teamInfo.value.team_type === "Externo"){
        this.externalFlag = true;
        this.ranks[0].show = false;
         
      }else{
        this.externalFlag  = false;
        this.ranks[0].show = true;
      }
    }
    
    if(this.step == 3){
      if(this.teamInfo.value.team_type === "Externo"){
        this.externalFlag = true;
        this.ranks[0].show = false;
      }else{
        this.externalFlag  = false;
        this.ranks[0].show = true;
      }
    }

    if(this.teamInfo.controls.hackerM.invalid && this.step == 4){
      this.masterFlag = true;
      if(this.teamInfo.get('hackerM.name')?.invalid){this.name=true}
      if(this.teamInfo.get('hackerM.email')?.invalid){this.email=true}
      if(this.teamInfo.get('hackerM.phone')?.invalid){this.phone=true}
      if(this.teamInfo.get('hackerM.discord')?.invalid){this.discord=true}
      if(this.teamInfo.get('hackerM.code')?.invalid){this.code=true}
      if(this.teamInfo.get('hackerM.program')?.invalid){this.program=true}
      if(this.teamInfo.get('hackerM.semester')?.invalid){this.semester=true}
      return;
    }
    this.masterFlag = false;
    if(this.teamInfo.controls.hacker2.invalid && this.step == 5){
      if(this.teamInfo.get('hacker2.name')?.invalid){this.name=true}
      if(this.teamInfo.get('hacker2.email')?.invalid){this.email=true}
      if(this.teamInfo.get('hacker2.discord')?.invalid){this.discord=true}
      if(this.teamInfo.get('hacker2.code')?.invalid){this.code=true}
      if(this.teamInfo.get('hacker2.program')?.invalid){this.program=true}
      if(this.teamInfo.get('hacker2.semester')?.invalid){this.semester=true}
      this.h2Flag = true;
      return;
    }
    this.h2Flag = false;
    if(this.teamInfo.controls.hacker3.invalid && this.step == 6){
      if(this.teamInfo.get('hacker3.name')?.invalid){this.name=true}
      if(this.teamInfo.get('hacker3.email')?.invalid){this.email=true}
      if(this.teamInfo.get('hacker3.discord')?.invalid){this.discord=true}
      if(this.teamInfo.get('hacker3.code')?.invalid){this.code=true}
      if(this.teamInfo.get('hacker3.program')?.invalid){this.program=true}
      if(this.teamInfo.get('hacker3.semester')?.invalid){this.semester=true}
      this.h3Flag = true;
      return;
    }
    this.h3Flag = false;
    if(this.teamInfo.controls.hacker4.invalid && this.step == 7){
      if(this.teamInfo.get('hacker4.name')?.invalid){this.name=true}
      if(this.teamInfo.get('hacker4.email')?.invalid){this.email=true}
      if(this.teamInfo.get('hacker4.discord')?.invalid){this.discord=true}
      if(this.teamInfo.get('hacker4.code')?.invalid){this.code=true}
      if(this.teamInfo.get('hacker4.program')?.invalid){this.program=true}
      if(this.teamInfo.get('hacker4.semester')?.invalid){this.semester=true}
      this.h4Flag = true;
      return;
    }
    this.h4Flag = false;
    if(this.teamInfo.controls.hacker5.invalid && this.step == 8){
      if(this.teamInfo.get('hacker5.name')?.invalid){this.name=true}
      if(this.teamInfo.get('hacker5.email')?.invalid){this.email=true}
      if(this.teamInfo.get('hacker5.discord')?.invalid){this.discord=true}
      if(this.teamInfo.get('hacker5.code')?.invalid){this.code=true}
      if(this.teamInfo.get('hacker5.program')?.invalid){this.program=true}
      if(this.teamInfo.get('hacker5.semester')?.invalid){this.semester=true}
      this.h5Flag = true;
      return;
    }
    this.h5Flag = false;
    this.step = change;
    this.name = false; this.email = false; this.phone= false; this.discord=false; this.code = false; this.program = false; this.semester = false;
  }

  submitHackerForm(): void {

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
      this.router.navigate(['/registrationsuccess'])

    }).catch(err => {
      this.openFailureDialog();
      console.log("Error " + err)
      this.router.navigate(['/home'])
    });
  }

  openFailureDialog(): void {
    const dialogRef = this.dialog.open(FormFailureComponent, {
      width: '500px'
    });
  }

}
