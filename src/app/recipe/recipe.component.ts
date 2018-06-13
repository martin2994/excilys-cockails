import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;

  @Output()
  deleteEvent: EventEmitter<Recipe> = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id).subscribe(() => this.deleteEvent.emit(this.recipe));
  }
}
