import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { timestamp } from 'rxjs/operators';
import { CredenciaisDTO } from '../../models/credenciais.dto';

//vou poder referenciar essa classe com o nome dela entre "" (como String)
@IonicPage()
//esse decorator faz esse arquivo ser o controller da view dessa pagina
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  //objetos injetados na classe sao os passados no parametro do construtor
  constructor(public navCtrl: NavController, public menu: MenuController) {
    
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }
}
