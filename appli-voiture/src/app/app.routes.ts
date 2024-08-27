import { Routes } from '@angular/router';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { PageNotFoundComponent } from './core-component/page-not-found/page-not-found.component';
import { ListeVoitureComponent } from './component/liste-voiture/liste-voiture.component';
import { CreerVoitureComponent } from './component/creer-voiture/creer-voiture.component';

export const routes: Routes = [
    {path: 'accueil', component: AcceuilComponent},
    {path: 'liste-voiture',component: ListeVoitureComponent },
    {path: 'creer-voiture', component: CreerVoitureComponent},

    {path: '', pathMatch: 'full', redirectTo: 'accueil'},
    {path: '**', pathMatch: 'full', component: PageNotFoundComponent}






];
