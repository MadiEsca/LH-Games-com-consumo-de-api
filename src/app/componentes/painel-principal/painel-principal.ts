import { Component, inject, OnInit } from '@angular/core';
import { produtoService } from '../../services/produtoService';
import { Produto } from '../../services/produtoService';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-painel-principal',
  imports: [],
  templateUrl: './painel-principal.html',
  styleUrls: ['./painel-principal.css'],
})

export class PainelPrincipal implements OnInit {
  produtos: Produto[] = [] //Array vazio do mesmo tipo da interface criada anteriormente

  _produtoService: produtoService = inject(produtoService) //Injetando o service da nossa API produto
  _router: Router = inject(Router) //Injetando o Router

  //Função executada assim que o componente é carregado
  ngOnInit(){
    this.listarProdutos(); //Função que retorna todos os produtos cadastrados
  }

  //Função que implementa o método GET geral, retornando todos os produtos cadastrados
  listarProdutos(){
    this._produtoService //Chama a instancia do meu service
          .obterProdutos() //Chama a função, do service, que retorna todos os registros da API
          .subscribe({ //Forma moderna de se realizar o subscribe
            next: (dados) => { //Código executado caso a requisição seja feita com êxito
              this.produtos = dados
            }
          })
  }

  //Função que implmenta o método DELETE de um produto
  deletarProduto(id: any){
    if(confirm("Você deseja realmente deletar esse produto?")){
      this._produtoService
        .deleteProduto(id)
        .subscribe({
          next: () => {
            alert("Produto deletado com sucesso");
            this.listarProdutos();
            console.log()
          },
          error: (err) => {
            console.error('Erro ao deletar produto', err);
          }
        }
      )
    }
  }

  editarProduto(id: any){
    // navega para a rota correta (singular + id)
    this._router.navigate(['/cadastro-produto', id]);
  }
}