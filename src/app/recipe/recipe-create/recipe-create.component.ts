import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../ingredient.model';
import {Router} from '@angular/router';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query(':enter', stagger('200ms', [
          animate('500ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query(':enter', [
          animate(1000, style('*'))
        ])
      ])
    ])

  ]
})
export class RecipeCreateComponent implements OnInit {

  nameRecipe: string;
  url: string;
  description: string;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  addRecipe() {
    const newRecipe = new Recipe();
    newRecipe.id = 0;
    newRecipe.picture = this.url;
    newRecipe.name = this.nameRecipe;
    newRecipe.description = this.description;
    const newIngredient = new Ingredient();
    newIngredient.ingredientId = 1;
    newRecipe.ingredients = [newIngredient];
    this.recipeService.addRecipe(newRecipe).subscribe(() => this.router.navigate(['/recipes']));
  }

}
