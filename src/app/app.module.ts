import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ProdutoComponent } from './catalogo/lista-produtos/produto/produto.component';
import { ListaProdutosComponent } from './catalogo/lista-produtos/lista-produtos.component';
import { GlobalEvents } from './common/globalEvents.service';
import { ItemCartListComponent } from './catalogo/carrinho/item-cart-list/item-cart-list.component';
import { OrcamentoService } from './catalogo/carrinho/orcamento.service';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { InputTextComponent } from './common/input-text/input-text.component';

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
    CarrinhoComponent,
    ProdutoComponent,
    ListaProdutosComponent,
    ItemCartListComponent,
    OrcamentoComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    GlobalEvents,
    OrcamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
