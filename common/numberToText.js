export default class NumberToText {
  static map() {
    return {
      midnight: 'Mezzanotte',
      mezzogiorno: 'mezzogiorno',
      e: "e ",
      0: "in punto",
      1: 'Uno',
      2: 'Due',
      3: 'Tre',
      4: 'Quattro',
      5: 'Cinque',
      6: 'Sei',
      7: 'Sette',
      8: 'Otto',
      9: 'Nove',
      10: 'Dieci',
      11: 'Undici',
      12: 'Dodici',
      13: 'Tredici',
      14: 'Quattordici',
      15: 'Quindici',
      16: 'Sedici',
      17: 'Diciassette',
      18: 'Diciotto',
      19: 'Diciannove',
      20: 'Venti',
      21: 'Ventuno',
      22: 'Ventidue',
      23: 'ventitre',
      28: 'Ventotto',
      30: 'Trenta',
      31: 'Trentuno',
      38: 'Trentotto',
      40: 'Quaranta',      
      41: 'Quarantuno',
      48: 'Quarantotto',
      50: 'Cinquanta',
      51: 'Cinquantuno',
      58: 'Cinquantotto'
    };
  }
  
  static days() {
    return {
      0: 'Domenica',
      1: 'Lunedì',
      2: 'Martedì',
      3: 'Mercoledì',
      4: 'Giovedì',
      5: 'Venerdì',
      6: 'Sabato'
    };
  }
  
  static months() {
    return {
      0: 'Gennaio',
      1: 'Febbraio',
      2: 'Marzo',
      3: 'Aprile',
      4: 'Maggio',
      5: 'Giugno',
      6: 'Luglio',
      7: 'Agosto',
      8: 'Settembre',
      9: 'Ottobre',
      10: 'Novembre',
      11: 'Dicembre'
    };
  }

  static getHour(input) {
    if (input === 0) {
      return this.map()['midnight'];
    } else if ( input === 12){
      return this.map()['mezzogiorno'];
    } else {
      return this.map()[input];
    }
  }

  static getMinutes(input) {
    //console.log(input);
    if (input === 0 ) {
      return this.map()[input];
    } else
    if (input < 20 || input === 21 || input === 28 || input === 31 || input === 38 || input ===  41 || input === 48 || input ===  51 || input ===  58 ) {
      return `${this.map()['e']}${this.map()[input]}`;
    } else{
      let decine = this.map()[Math.floor(input / 10) * 10];
      let modulo  = input % 10;
      
      return modulo ? `${this.map()['e']}${decine}${this.map()[modulo]}` : `${this.map()['e']}${decine}`;
    }
  }
  
  static getDayOfWeek(input) {
    return this.days()[input];
  }
  
  static getMonth(input) {
    return this.months()[input];
  }

}