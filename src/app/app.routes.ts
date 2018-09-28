import { Routes } from "@angular/router";

import { SobreComponent } from "./sobre/sobre.component";
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CosmeticoComponent } from './catalogo/menu-catalogo/cosmetico/cosmetico.component';
import { QuimicaComponent } from './catalogo/menu-catalogo/quimica/quimica.component';
import { AlimenticiaComponent } from './catalogo/menu-catalogo/alimenticia/alimenticia.component';
import { FarmaceuticoComponent } from './catalogo/menu-catalogo/farmaceutico/farmaceutico.component';

export const ROUTES: Routes = [
    {path: "", component:  SobreComponent},
    {path: "sobre", component:  SobreComponent},
    {path: "catalogo", component: CatalogoComponent, 
        children: [
            {path: "", redirectTo: "farmaceutica", pathMatch: "full"},
            {path: "farmaceutica", component: FarmaceuticoComponent}, 
            {path: "alimenticia", component: AlimenticiaComponent}, 
            {path: "quimica", component: QuimicaComponent}, 
            {path: "cosmetica", component: CosmeticoComponent}
        ]
    }
]