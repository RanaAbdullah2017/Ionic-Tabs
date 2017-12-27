import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// import { RedditDataProvider } from '../providers/reddit-data/reddit-data';


// import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

// for AngularFireAuth
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { FirebaseProvider } from '../providers/firebase/firebase';
// import { RedditData }  from '../providers/reddit-data/reddit-data';
const config={
    apiKey: "AIzaSyDSC5NRxjNBcPoHqQ6BIW8a3o5kqp1Gqz8",
    authDomain: "ionicdb-6cf53.firebaseapp.com",
    databaseURL: "https://ionicdb-6cf53.firebaseio.com",
    storageBucket: "ionicdb-6cf53.appspot.com",
    messagingSenderId: "298523370457"
  };
  

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    // HttpClientModule,
    HttpModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  // providers: [AuthService,**AngularFireAuth, AngularFireDatabase**, AuthGuard, InventoryService]
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // RedditDataProvider
    // RedditDataProvider
    // FirebaseProvider,
    
  ]
})
export class AppModule {}
