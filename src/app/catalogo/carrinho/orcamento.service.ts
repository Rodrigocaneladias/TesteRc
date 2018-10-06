import { Cliente } from './cliente.model';
import { Produto } from '../lista-produtos/produto.model';

export class OrcamentoService {
    produtos: Produto[] = [];
    cliente: Cliente


    clear(){
        this.produtos = []
    }

    addProd(produto: Produto){
        if(this.produtos.some((p)=> p === produto)) return
        this.produtos.push(produto);
    }
}