import { Component } from '@angular/core';
import { Horoscopo } from '../../models/horoscopo';
import { HoroscopoService } from '../../services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css'],
})
export class HoroscopoComponent {
  horoscopo!: any;

  horoscopo2!: Horoscopo;

  signos: Array<string> = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];

  days: Array<string> = ['today', 'yesterday', 'tomorrow'];
  day!: string;

  date_range: string = '';
  current_date: string = '';
  description: string = '';
  color: string = '';

  signo!: string;

  constructor(private horoscopoService: HoroscopoService) {
    this.horoscopo2 = new Horoscopo();
    //this.obtenerHoroscopo();
  }

  obtenerHoroscopo() {
    this.horoscopoService
      .getHoroscopo(this.signo, this.day)
      .subscribe((result) => {
        //this.horoscopo2 = new Horoscopo();
        Object.assign(this.horoscopo2, result);
        //this.horoscopo2 = result;
        console.log(this.horoscopo2);
        /*this.horoscopo = result;
        this.date_range = this.horoscopo.date_range;
        this.current_date = this.horoscopo.current_date;
        this.description = this.horoscopo.description;
        this.color = this.horoscopo.color;*/
      });
  }
}
