import { Routes } from '@angular/router';
import { Sobre } from './components/sobre/sobre';
import { Projetos } from './components/projetos/projetos';
import { Habilidades } from './components/habilidades/habilidades';
import { Contato } from './components/contato/contato';

export const routes: Routes = [
    { path: '', component: Sobre },
    { path: 'projetos', component: Projetos},
    { path: 'habilidades', component: Habilidades},
    { path: 'contato', component: Contato}

];
