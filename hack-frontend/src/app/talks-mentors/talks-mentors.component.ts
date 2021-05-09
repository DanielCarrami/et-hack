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
    {photo: "../assets/images/Sof.png", name: "React\nin a Nutshell", person: "Victor Mancera", logo: "assets/images/tec logo.png", description: "En este taller, vamos a estudiar a React en sus diferentes versiones y dimensiones, con el propósito de darte a ti las herramientas necesarias para poder utilizarlo en tus propias aplicaciones web. ", about_person:"Estudiante de Tecnologías Computacionales. Miembro del equipo desarrollador de proyectos sociales “Treehack” de la universidad de Stanford. Reconocido por el “Google Developer Students Club”, el equipo “Embajadores Microsoft LATAM” y acreedor a la beca de impacto global de la empresa “Palantir Technologies”."},
    {photo: "../assets/images/Sof.png", name: "Desarrollo Web: HTML", person: "Daniel Flores Rodríguez", logo: "assets/images/ichi.png", description: "Aprenderás las bases HTML5, desde la estructura básica de un documento HTML, el manejo de etiquetas esenciales, atributos de etiquetas, manejo de “inputs” y formularios, tipos de contenedores y maquetar estructuras básicas de una página web. ", about_person:"Estudiante de Tecnologías Computacionales y Vicepresidente TecBytes, grupo estudiantil dedicado a mejorar la comunidad computacional del ITESM Campus Puebla. "},
    {photo: "../assets/images/Sof.png", name: "Concientización ambiental", person: "Stephany Sánchez", logo: "assets/images/enlacelogo.png", description: "En este taller conocerás el impacto ambiental de los componentes de cada una de tus prendas. A su vez, aprenderás un método alternativo para teñir textiles", about_person:"Estilo Lento es un grupo embajador de Fashion Revolution México, buscan activar a la comunidad estudiantil para promover un consumo más ético en Moda"},
    {photo: "../assets/images/Sof.png", name: "Desarrollo Web: CSS", person: "Antonio Bobadilla García", logo: "assets/images/enlacelogo.png", description: "En este taller aprenderás las bases para diseñar páginas o aplicaciones web profesionales utilizando CSS, tomando en cuenta la experiencia del usuario, diseño responsivo, límites de diseño, entre otras temáticas, así como técnicas que te ayudarán para sacar el mayor provecho durante este hackathon.", about_person:"Presidente y fundador de TecBytes, grupo estudiantil dedicado a mejorar la comunidad computacional del ITESM Campus Puebla. Co-fundador de Elephant Web Design, diseñador profesional de sitios y aplicaciones web."},
   ]

  mentors_3 = [
    {photo: "../assets/images/Sof.png", name: "Desarrollo Web: JavaScript", person: "Ezequiel Lozano", logo: "assets/images/enlacelogo.png", description: "Te enseñaran a dinamizar un sitio web mediante JavaScript; aprenderás desde lo más básico del lenguaje hasta a manejar cosas más complejas, como el DOM (Document Object Model).", about_person:"Estudiante de Tecnologías Computacionales y fundador de LozanoSoft, canal dedicado a la enseñanza de lenguajes y métodos de programación."},
    {photo: "../assets/images/Sof.png", name: "Github Your Toolbox", person: "Luis Flores Carpinteyro", logo: "assets/images/tec logo.png", description:"El taller versará sobre los conceptos básicos de Git, orientado a explicar cuestiones como: repositorios, branches, comandos básicos, pull requests, etc; de tal manera que los asistentes puedan contar con los fundamentos necesarios para profundizar en el conocimiento del tema en cuestión.", about_person: "Estudiante de octavo semestre de la carrera de Ingeniería en Tecnologías Computacionales del Tec de Monterrey. Actualmente se encuentra laborando como Full Stack Developer, especializado en React."},
    {photo: "../assets/images/Sof.png", name: "Serie de Mindfulnes", person: "Carlos Cisneros", logo: "assets/images/ichi.png", description: "Esta meditación guiada te ayudará a reconocer lo que limita tu armonía para que logres recuperar tu esencia", about_person: "Habiendo sobrevivido un secuestro a temprana edad, Carlos logró una forma de desapego de vivir su vida practicando mindfulness. En 2013 creó Ichi Experience, demostrando que una Mentalidad de Posibilidad puede superar cualquier circunstancia."},
    {photo: "../assets/images/Sof.png", name: "Pool Pitch", person: "Fory Sánchez", logo: "assets/images/tec logo.png", description: "Pitchear debe ser una segunda naturaleza para cualquier emprendedor, el objetivo de este taller es desarrollar la capacidad de crear excelentes pitches en menos de 15 min e hiper personalizados a cada situación.", about_person:"Emprendedor, estratega empresarial y especialista en habilidades sociales. Ha pilotado 5 startups, de las cuales 4 han llegado a operar en las industrias de entretenimiento, educación, foodtech y moda. "},
  ]

  mentors_2 = [
    {photo: "../assets/images/Sof.png", name: "Peleando Pierde", person: "Raul How Marañon", logo: "assets/images/enlacelogo.png", description: "Algo", about_person:"Algo"},
    {photo: "../assets/images/Sof.png", name: "Eco Tie Dye", person: "Estilo Lento", logo: "assets/images/ichi.png", description: "a ", about_person:""},
    {photo: "../assets/images/Sof.png", name: "Concientización ambiental", person: "Stephany Sánchez", logo: "assets/images/enlacelogo.png", description: "En este taller conocerás el impacto ambiental de los componentes de cada una de tus prendas. A su vez, aprenderás un método alternativo para teñir textiles", about_person:"Estilo Lento es un grupo embajador de Fashion Revolution México, buscan activar a la comunidad estudiantil para promover un consumo más ético en Moda"},
    {photo: "../assets/images/Sof.png", name: "React\nin a Nutshell", person: "Victor Mancera", logo: "assets/images/tec logo.png", description: "En este taller, vamos a estudiar a React en sus diferentes versiones y dimensiones, con el propósito de darte a ti las herramientas necesarias para poder utilizarlo en tus propias aplicaciones web. ", about_person:"Estudiante de Tecnologías Computacionales. Miembro del equipo desarrollador de proyectos sociales “Treehack” de la universidad de Stanford. Reconocido por el “Google Developer Students Club”, el equipo “Embajadores Microsoft LATAM” y acreedor a la beca de impacto global de la empresa “Palantir Technologies”."},
  ]

  


  constructor(public dialog: MatDialog) { }

  openDialog(name: string, person: string, description: string, photo: string, about: string): void {
    const dialogRef = this.dialog.open(TalksDetailsComponent, {
      width: '1200px',
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
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }


}
