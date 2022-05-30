export class Horoscopo {
  color!: string;
  compatibility!: string;
  current_date!: string;
  date_range!: string;
  description!: string;
  lucky_number!: string;
  lucky_time!: string;
  mood!: string;

  constructor(
    date_range: string = '',
    current_date: string = '',
    description: string = '',
    compatibility: string = '',
    mood: string = '',
    color: string = '',
    lucky_number: string = '',
    lucky_time: string = ''
  ) {
    this.date_range = date_range;
    this.current_date = current_date;
    this.description = description;
    this.compatibility = compatibility;
    this.mood = mood;
    this.color = color;
    this.lucky_number = lucky_number;
    this.lucky_time = lucky_time;
  }
}
