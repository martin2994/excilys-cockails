import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipe/recipes/recipes.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeCreateComponent} from './recipe/recipe-create/recipe-create.component';
import {RecipeUpdateComponent} from './recipe/recipe-update/recipe-update.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent, pathMatch: 'full' },
  { path: 'recipe/create', component: RecipeCreateComponent, pathMatch: 'full'},
  { path: 'recipe/:id/update', component: RecipeUpdateComponent, pathMatch: 'full'},
  { path: 'recipe/:id', component: RecipeDetailComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'recipes', pathMatch: 'full'}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
