import { Component } from '@angular/core';
import { Bandera } from '../../models/bandera';
import { TraductorService } from '../../services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css'],
})
export class TraductorComponent {
  textoTraducido!: string;

  idiomas: Array<Bandera> = [];

  source!: string;
  target!: string;
  text!: string;

  constructor(private traductorService: TraductorService) {
    this.idiomas = [
      { id: 1, av: 'en', nombre: 'Ingles' },
      { id: 2, av: 'es', nombre: 'Español' },
      { id: 3, av: 'fr', nombre: 'Frances' },
      { id: 4, av: 'it', nombre: 'Italiano' },
    ];
    //this.traducirTexto();
  }

  public mostrarDatos() {
    console.log(this.source);
    console.log(this.target);
    console.log(this.text);
  }

  public traducirTexto() {
    this.traductorService.transtlateText(this.source,this.target,this.text).subscribe((result) => {
      this.textoTraducido = result.data.translatedText;
      console.log(result);
    });
  }
}
