import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
export { CocktailService } from  'src/app/cocktail.service'
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService } from 'src/app/cocktail.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
