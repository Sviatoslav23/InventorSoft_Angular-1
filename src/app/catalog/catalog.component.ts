import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})

export class CatalogComponent implements OnInit {
  movies: any[];
  favorite: any[];
  filmInCart: any;
  constructor(private http: HttpClient) { }
  public getJSON(): Observable<any> {
    return this.http.get("assets/films.json");
  }
  ngOnInit(): void {
    this.favorite = localStorage.getItem('favoriteFilms') ? JSON.parse(localStorage.getItem('favoriteFilms')) : [];
    console.log(this.favorite);
    this.getJSON().subscribe(data => {
      this.movies = data;
      this.movies.forEach(m => {
        this.filmCheck(m);
      })
      console.log(this.movies);
    });
  }

  addToCart(film) {
    this.favorite.push(film);
    console.log(this.favorite);
    this.filmCheck(film);
    localStorage.setItem('favoriteFilms', JSON.stringify(this.favorite));
    console.log(film);
    
  }

  daleteFromCart(film) {
    let index = this.favorite.indexOf(film);
    this.favorite.splice(index, 1);
    this.filmCheck(film);
    localStorage.setItem('favoriteFilms', JSON.stringify(this.favorite));
  }

  filmCheck(movie) {
    if (this.favorite.find(f => f.Id === movie.Id)) {
      movie.filmInCart = true;
    } else {
      movie.filmInCart = false;
    }

  }
  like(btn) {
    btn.classList.toggle('like');
  }

}
