import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyAf5au5Z9AOopEBKzvc0QiwwHHyZiTNkjo",
      authDomain: "ng-oc2.firebaseapp.com",
      databaseURL: "https://ng-oc2.firebaseio.com",
      projectId: "ng-oc2",
      storageBucket: "ng-oc2.appspot.com",
      messagingSenderId: "849442510344"
    };
    firebase.initializeApp(config);
  }
}
