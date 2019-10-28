import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  /**
   * getCocktails
   */
  public getCocktails(): Cocktail[] {
    return [
      {
        name: "ginto",
        price: 4,
        url: "https://www.thespruceeats.com/thmb/8rtDjB-YdRW-RLVCEckIl6uoof8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gin-tonic-5a8f334b8e1b6e0036a9631d.jpg"
      },
      {
        name: "wiskicoka",
        price: 5,
        url: "https://assets.afcdn.com/recipe/20181220/84959_w1024h768c1cx1989cy3800cxt0cyt0cxb3521cyb5368.jpg",
      },
      {
        name: "vodkajet",
        price: 6,
        url:"https://d32miag6ta013h.cloudfront.net/slowdrinking/fr-fr/21953/medium/get-27-perrier.jpg",
      }
    ]
    
  }

  constructor() { }
}
