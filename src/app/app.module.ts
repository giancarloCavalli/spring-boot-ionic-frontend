import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';

//Decorator. Anotacao com configuracoes para alterar a classe
@NgModule({
  //lista de componentes ou paginas que fazem parte desse modulo
  declarations: [
    MyApp
  ],
  //define a dependencia de outros modulos
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  //como a aplicacao vai iniciar
  bootstrap: [IonicApp],
  //quando for uma pagina, e nao somente um componente, tem que ter as mesmas informacoes que o atributo declaration
  entryComponents: [
    MyApp
  ],
  //define quais objetos que vc injetar nesse modulo vao ter uma instancia unica
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    ErrorInterceptorProvider,
    AuthService
  ]
})
export class AppModule {}
