import { IonicStorageModule } from '@ionic/storage';
import { HttpService } from './../providers/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPostPage } from '../pages/new-post/new-post';
import { LoginPage } from '../pages/login/login';
import { PostsService } from '../providers/posts.service';

import { PROVIDERS } from './../providers/providers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NewPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NewPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS
  ]
})
export class AppModule { }
