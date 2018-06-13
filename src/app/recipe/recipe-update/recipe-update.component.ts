import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {

  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => {
      this.recipe = recipe;
      this.createForm();
    });
  }
  createForm() {
    this.recipeForm = this.fb.group({
      nameRecipe : [this.recipe.name  || '', Validators.required],
      urlRecipe : [this.recipe.picture || ''],
      descriptionRecipe : [this.recipe.description || '']
    });
  }
  prepareRecipe(): Recipe {
    const formValue = this.recipeForm.value;
    const newRecipe = new Recipe();
    newRecipe.id = this.recipe.id;
    newRecipe.picture = formValue.urlRecipe;
    newRecipe.name = formValue.nameRecipe;
    newRecipe.description = formValue.descriptionRecipe;
    newRecipe.ingredients = this.recipe.ingredients;
    return newRecipe;
  }
  update() {
    if (this.recipeForm.valid) {
      const recipeToUpdate = this.prepareRecipe();
      this.recipeService.updateRecipe(recipeToUpdate).subscribe(() => this.router.navigate(['recipe/' + this.recipe.id]));
    }
  }

}
