import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Decorator. Anotacao com configuracoes para alterar a classe
@NgModule({
  //lista de componentes ou paginas que fazem parte desse modulo
  declarations: [
    MyApp,
    HomePage
  ],
  //define a dependencia de outros modulos
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  //como a aplicacao vai iniciar
  bootstrap: [IonicApp],
  //quando for uma pagina, e nao somente um componente, tem que ter as mesmas informacoes que o atributo declaration
  entryComponents: [
    MyApp,
    HomePage
  ],
  //define quais objetos que vc injetar nesse modulo vao ter uma instancia unica
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
