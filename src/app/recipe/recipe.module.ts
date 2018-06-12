import { NgModule } from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe.component';
import {StringToArrayPipe} from './string-to-array.pipe';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({

  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  declarations: [
    StringToArrayPipe,
    RecipeComponent,
    RecipesComponent,
    RecipeDetailComponent
  ],

})
export class RecipeModule { }
