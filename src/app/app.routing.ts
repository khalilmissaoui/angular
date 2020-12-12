import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {AddComponent} from './CrudComponents/add/add.component';
import {AuthentificationComponent} from './authentification/authentification.component';
import {ModifierComponent} from './CrudComponents/modifier/modifier.component';
import {RedirectComponent} from './redirect/redirect.component';


const APP_ROUTING: Routes = [

  {path: 'modifier/:id' , component : ModifierComponent},
  {path: 'done' , redirectTo : ''},
  {path: ''  , component : AccueilComponent},
  {path: 'add' , component : AddComponent},
  {path: 'auth' , component : AuthentificationComponent},
  {path: 'redirect', component: RedirectComponent}



];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
