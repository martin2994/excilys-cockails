import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query('.anim_0', stagger('300ms', [
          animate(700, keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query('.anim_1', stagger('300ms', [
          animate(700, keyframes([
            style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query('.anim_2', stagger('300ms', [
          animate(700, keyframes([
            style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query('.anim_3', stagger('300ms', [
          animate(700, keyframes([
            style({opacity: 0, transform: 'translateX(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(-35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  orderType = false;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes, () => {}, () => this.order());
  }

  delete(recipe) {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
  }

  order() {
    this.orderType = !this.orderType;
  }

}
