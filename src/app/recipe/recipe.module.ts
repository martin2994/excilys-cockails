import { NgModule } from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe.component';
import {StringToArrayPipe} from './string-to-array.pipe';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RouterModule} from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';

@NgModule({

  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StringToArrayPipe,
    RecipeComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeCreateComponent,
    OrderByPipe,
    RecipeUpdateComponent
  ],

})
export class RecipeModule { }
