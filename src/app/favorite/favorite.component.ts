import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit{

  liked:any[];

  ngOnInit(): void {
    this.liked=JSON.parse(localStorage.getItem('favoriteFilms'));
  }

  daleteFromCart(movie,index){
    this.liked.splice(index , 1);
    localStorage.setItem('favoriteFilms', JSON.stringify(this.liked));
  }

  totalPrice = () => this.liked.reduce((total, film) => total + film.price, 0);

  clearLS() {
    localStorage.clear();
    this.liked = [];
  }
}



