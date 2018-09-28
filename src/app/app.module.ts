import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MenuCatalogoComponent } from './catalogo/menu-catalogo/menu-catalogo.component';
import { FarmaceuticoComponent } from './catalogo/menu-catalogo/farmaceutico/farmaceutico.component';
import { CosmeticoComponent } from './catalogo/menu-catalogo/cosmetico/cosmetico.component';
import { QuimicaComponent } from './catalogo/menu-catalogo/quimica/quimica.component';
import { AlimenticiaComponent } from './catalogo/menu-catalogo/alimenticia/alimenticia.component';
import { CarrinhoComponent } from './catalogo/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    CatalogoComponent,
    MenuCatalogoComponent,
    FarmaceuticoComponent,
    CosmeticoComponent,
    QuimicaComponent,
    AlimenticiaComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
