import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;
  expandInfo = false;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => this.recipe = recipe);
  }
  toggleExpand() {
    this.expandInfo = !this.expandInfo;
  }
}
