import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnInit {

  lista=[
    {pregunta: "¿Como puedo registrarme?", respuesta: "1"},
    {pregunta: "¿Quien puede participar?", respuesta: "2"}, 
    {pregunta: "¿Como se llevará a cabo este hackathon?", respuesta: "3"},
    {pregunta: "¿Que tan grandes pueden ser los equipos?", respuesta: "4"}, 
    {pregunta:  "¿Qué pasa si no tengo equipo pero quiero encontrar uno?", respuesta: "5"},
    {pregunta: "¿Es un evento gratuito?", respuesta: "6"}, 
    {pregunta: "¿Necesito tener conocimientos avanzados de programación?", respuesta: "7"},
    {pregunta: "¿Qué puedo crear?", respuesta: "8"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
