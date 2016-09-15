import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html'
})


export class AppComponent{

  name = 'Brennon';
  artists = ['Barot Bellingham', 'Johnathan Ferrets', 'Hoehoe BOEBOE'];

  onClick(myName){
    // this.name='Bren'
    this.name = myName;
  }

  addArtist(myArtist){
    this.artists.push(myArtist);

  }

}
