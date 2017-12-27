import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { RedditDataProvider } from '../../providers/reddit-data/reddit-data'
// import {  FirebaseListObservable } from "angularfire2/database-deprecated";
// import { AngularFireDatabase } from "angularfire2/database";

// import { ActionSheetController} from 

import {  AngularFireDatabase,FirebaseListObservable } from "angularfire2/database-deprecated";
//  import {  AngularFireDatabase , FirebaseListObservable } from "angularfire2/database-deprecated";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//   name:'';
//   lname:'';
//   age:0;
//   dep:'';
// persons={
//   name:'Muhammed',
//   lname:'Essa',
//   dept:'Ionic Developer',
//   age:33
// }
persons: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public db:AngularFireDatabase) {
this.persons=db.list("/peaple");
// this.personss=db.list("/peaple");
  }
  // ionicViewDidLoad(){
  //   this.redditService.getRemoteData();
  // }

}
