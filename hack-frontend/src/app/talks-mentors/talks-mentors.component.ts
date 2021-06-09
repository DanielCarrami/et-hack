import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TalksDetailsComponent } from '../modals/talks-details/talks-details.component';

@Component({
  selector: 'app-talks-mentors',
  templateUrl: './talks-mentors.component.html',
  styleUrls: ['./talks-mentors.component.scss']
})
export class TalksMentorsComponent {

  dialogValue!: string;
  sendValue!: string;

  mentors_1 = [
    {detail: '../assets/mentors/Carpydetail.png',photo: "../assets/mentors/Carpy.png", name: "Github Your Toolbox", person: "Luis Flores Carpinteyro", logo: "assets/images/tec logo.png", description:"El taller versará sobre los conceptos básicos de Git, orientado a explicar cuestiones como: repositorios, branches, comandos básicos, pull requests, etc; de tal manera que los asistentes puedan contar con los fundamentos necesarios para profundizar en el conocimiento del tema en cuestión.", about_person: "Estudiante de octavo semestre de la carrera de Ingeniería en Tecnologías Computacionales del Tec de Monterrey. Actualmente se encuentra laborando como Full Stack Developer, especializado en React."},
    {detail: '../assets/mentors/Danieldetail.png',photo: "../assets/mentors/Daniel.png", name: "Desarrollo Web: HTML", person: "Daniel Flores Rodríguez", logo: "assets/images/tecbytes.png", description: "Aprenderás las bases HTML5, desde la estructura básica de un documento HTML, el manejo de etiquetas esenciales, atributos de etiquetas, manejo de “inputs” y formularios, tipos de contenedores y maquetar estructuras básicas de una página web. ", about_person:"Estudiante de Tecnologías Computacionales y Vicepresidente TecBytes, grupo estudiantil dedicado a mejorar la comunidad computacional del ITESM Campus Puebla. "},
    {detail: '../assets/mentors/phanydetail.png',photo: "../assets/mentors/phany.png", name: "Concientización ambiental", person: "Stephany Sánchez", logo: "assets/images/estilolento.png", description: "En este taller conocerás el impacto ambiental de los componentes de cada una de tus prendas. A su vez, aprenderás un método alternativo para teñir textiles", about_person:"Estilo Lento es un grupo embajador de Fashion Revolution México, buscan activar a la comunidad estudiantil para promover un consumo más ético en Moda"},
  ]

  mentors_2 = [
    {detail: '../assets/mentors/victordetail.png', photo: "../assets/mentors/victor.png", name: "React\nin a Nutshell", person: "Victor Mancera", logo: "assets/images/tecbytes.png", description: "En este taller, vamos a estudiar a React en sus diferentes versiones y dimensiones, con el propósito de darte a ti las herramientas necesarias para poder utilizarlo en tus propias aplicaciones web. ", about_person:"Estudiante de Tecnologías Computacionales. Miembro del equipo desarrollador de proyectos sociales “Treehack” de la universidad de Stanford. Reconocido por el “Google Developer Students Club”, el equipo “Embajadores Microsoft LATAM” y acreedor a la beca de impacto global de la empresa “Palantir Technologies”."},
    
    {detail: '../assets/mentors/lozanodetail.png',photo: "../assets/mentors/lozano.png", name: "Desarrollo Web: JavaScript", person: "Ezequiel Lozano", logo: "assets/images/tec logo.png", description: "Te enseñaran a dinamizar un sitio web mediante JavaScript; aprenderás desde lo más básico del lenguaje hasta a manejar cosas más complejas, como el DOM (Document Object Model).", about_person:"Estudiante de Tecnologías Computacionales y fundador de LozanoSoft, canal dedicado a la enseñanza de lenguajes y métodos de programación."},
    {detail: '../assets/mentors/forydetail.png',photo: "../assets/mentors/fory.png", name: "Pool Pitch", person: "Fory Sánchez", logo: "assets/images/Forymedio.png", description: "Pitchear debe ser una segunda naturaleza para cualquier emprendedor, el objetivo de este taller es desarrollar la capacidad de crear excelentes pitches en menos de 15 min e hiper personalizados a cada situación.", about_person:"Emprendedor, estratega empresarial y especialista en habilidades sociales. Ha pilotado 5 startups, de las cuales 4 han llegado a operar en las industrias de entretenimiento, educación, foodtech y moda. "},
  ]

  mentors_3 = [
    {detail: '../assets/mentors/carlosdetail.png',photo: "../assets/mentors/carlos.png", name: "Serie de Mindfulnes", person: "Carlos Cisneros", logo: "assets/images/ichi.png", description: "Esta meditación guiada te ayudará a reconocer lo que limita tu armonía para que logres recuperar tu esencia", about_person: "Habiendo sobrevivido un secuestro a temprana edad, Carlos logró una forma de desapego de vivir su vida practicando mindfulness. En 2013 creó Ichi Experience, demostrando que una Mentalidad de Posibilidad puede superar cualquier circunstancia."},
    {detail: '../assets/mentors/Robertodetail.png',photo: "../assets/mentors/Roberto.png", name: "Proyectos\nRentables", person: "Roberto Quintero", logo: "assets/images/enlacelogo.png", description: "Evento dinámico y participativo que te ayudará a generar condiciones de monetización y rentabilidad en tu emprendimiento, ya sea emprendimiento tradicional, de base tecnológica o social.", about_person:"MBA Roberto Quintero Vega, fundador de Cinemagic y emprendedor global Endeavor. “Promesa del año” 2015 por Forbes México. Es vicepresidente nacional de Canirac, Presidente de la comisión de desarrollo y bienestar de Coparmex Puebla y coordina el programa de mentoría empresarial “X prende”."},
    {detail: '../assets/mentors/bobadetail.png',photo: "../assets/mentors/bobadilla.png", name: "Desarrollo Web: CSS", person: "Antonio Bobadilla García", logo: "assets/images/tecbytes.png", description: "En este taller aprenderás las bases para diseñar páginas o aplicaciones web profesionales utilizando CSS, tomando en cuenta la experiencia del usuario, diseño responsivo, límites de diseño, entre otras temáticas, así como técnicas que te ayudarán para sacar el mayor provecho durante este hackathon.", about_person:"Presidente y fundador de TecBytes, grupo estudiantil dedicado a mejorar la comunidad computacional del ITESM Campus Puebla. Co-fundador de Elephant Web Design, diseñador profesional de sitios y aplicaciones web."}
  ]



  


  constructor(public dialog: MatDialog) { }

  openDialog(name: string, person: string, description: string, photo: string, about: string): void {
    const dialogRef = this.dialog.open(TalksDetailsComponent, {
      width: '1200px',
      height: '570px',
      backdropClass: "bdrop",
      //panelClass: 'custom-dialog-panel-class',
      data: {
        pageValue: this.sendValue,
        name: name,
        description: description,
        photo: photo,
        person: person,
        about: about
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogValue = result.data;
    });
  }


}
