import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { MovieComponent } from './pages/movie/movie.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Catálogo de filmes',
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    title: 'Detalhes do filme',
  },
]
