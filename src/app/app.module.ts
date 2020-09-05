import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteComponent } from './favorite/favorite.component';

// const appRoutes: Routes = [
//   {path: '', component: CatalogComponent},
//   {path: 'favorite', component: FavoriteComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
