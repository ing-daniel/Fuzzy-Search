export default class Transaction{
  constructor(objeto = {}){
    this.amount = objeto.amount || '';
    this.card_last_four = objeto.card_last_four || '';
    this.date = objeto.date || '';
  }
}