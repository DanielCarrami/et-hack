import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  step: any = 1;

  ranks = [
    {name: "Concientizacion", icon: "assets/images/consiencia.png"},
    {name: "Manejo de residuos", icon: "assets/images/mask.png"}
  ]

  teamTypes = [
    {name: "Local", icon: "assets/images/local.png"},
    {name: "Externo", icon: "assets/images/externo.png"},
    {name: "Mixto", icon: "assets/images/mixto.png"}
  ]
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
    this.step = change;
  }

}
