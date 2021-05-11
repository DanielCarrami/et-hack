import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        transform: 'rotate(90deg)'
      })),
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
    ]),
  ]
})
export class FaqSectionComponent implements OnInit {
  panelOpenState = false;

  lista=[
    {pregunta: "¿Qué es Et-Hack?", respuesta: "Et-Hack es un hackathon de 36 horas totalmente en línea y centrado en las personas organizado por estudiantes del Tecnológico de Monterrey Campus Puebla. Es un hackathon nacional para estudiantes universitarios y de preparatoria. ¡Este año, nos volvemos digitales! ¡Conoce a diseñadores, desarrolladores y entusiastas de la tecnología y sustentabilidad, forma equipo con ellos y desarrolla proyectos creativos con un enfoque en la transformación de espacios sustentables!", open: false},
    {pregunta: "¿Qué es un Hackathon?", respuesta: "Un hackathon es un maratón para crear soluciones. Las ideas se convierten en propuestas. Los asistentes trabajan en equipos de hasta 5 personas para crear un prototipo y resolver una problemática; esto podría ser una aplicación web, un modelo de hardware o una idea completamente diferente.", open: false},
    {pregunta: "¿Cómo puedo registrarme?", respuesta: "Haga clic en el botón 'Registro' que se encuentra arriba y completa el formulario.", open: false},
    {pregunta: "¿Quién puede participar?", respuesta: "Todo aquel que sea actualmente un estudiante en la república mexicana, tanto de carreras profesionales como de programas de preparatoria.", open: false}, 
    {pregunta: "¿Cómo se llevará a cabo este hackathon?", respuesta: "Este año, para garantizar la seguridad de nuestros participantes y cumplir con las políticas gubernamentales y universitarias, el hackathon se llevará a cabo virtualmente a través de Discord por lo que lxs asistentes podrán unirse desde cualquier punto de México.", open: false},
    {pregunta: "¿Qué tan grandes pueden ser los equipos?", respuesta: "No pueden haber más de 5 personas en un equipo", open: false}, 
    {pregunta: "¿Es un evento gratuito?", respuesta: "¡Absolutamente! La participación es gratuita para todos los participantes aceptados. Ofrecemos talleres interesantes, actividades entretenidas y premios al finalizar el evento.", open: false}, 
    {pregunta: "¿Necesito tener conocimientos avanzados de programación?", respuesta: "¡Para nada! Personas de todas las carreras y habilidades pueden registrarse para nuestro evento. Nos aseguraremos de que esté emparejado con codificadores más experimentados o recibir asesoría de nuestro equipo de mentores para obtener la mejor experiencia posible.", open: false},
    {pregunta: "¿Qué puedo crear?", respuesta: "Web, móvil ¡lo que sea! Los proyectos serán evaluados en función de la creatividad, viabilidad de implementación, diseño y la utilidad por un panel de jueces de la industria. ", open: false}
  ];

  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
      `arrow`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/uve icon.svg`)
    );
  }

  ngOnInit(): void {
  }

}
