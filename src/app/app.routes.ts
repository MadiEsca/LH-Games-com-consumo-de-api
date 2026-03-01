import { Routes } from '@angular/router';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';
import { CadastroProduto } from './componentes/cadastro-produto/cadastro-produto';
import { TesteRequisicoesApagar } from './teste-requisicoes-apagar/teste-requisicoes-apagar';

export const routes: Routes = [
    {
        path: 'painel-principal',
        component: PainelPrincipal
    },
    // rota para cadastro de novo produto (sem id)
    {
        path: 'cadastro-produto',
        component: CadastroProduto
    },
    // rota para edição com parâmetro id
    {
        path: 'cadastro-produto/:id',
        component: CadastroProduto
    },
    {
        path: '',
        redirectTo: '/painel-principal',
        pathMatch: 'full'
    },
    {
        path: 'testes',
        component: TesteRequisicoesApagar
    }
];
