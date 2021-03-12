import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

//vou poder referenciar essa classe com o nome dela entre "" (como String)
@IonicPage()
//esse decorator faz esse arquivo ser o controller da view dessa pagina
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //objetos injetados na classe sao os passados no parametro do construtor
  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.setRoot('CategoriasPage')
  }
}
