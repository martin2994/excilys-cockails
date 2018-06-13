import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Recipe} from './recipe.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _baseUrl = 'http://10.0.1.55:8080/api/v1/recipes';

  constructor(private httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this._baseUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${ this._baseUrl }/${ id }`);
  }

  addRecipe(recipe: Recipe) {
    return this.httpClient.post(this._baseUrl, recipe);
  }
  updateRecipe(recipe: Recipe) {
    return this.httpClient.patch(this._baseUrl, recipe);
  }

  deleteRecipe(id: number) {
    return this.httpClient.delete(`${ this._baseUrl }/${ id }`);
  }
}
