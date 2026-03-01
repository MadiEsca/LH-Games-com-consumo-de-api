import { Component, inject, OnInit } from '@angular/core';
import { Produto, produtoService } from '../../services/produtoService';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cadastro-produto',
  imports: [FormsModule],
  templateUrl: './cadastro-produto.html',
  styleUrls: ['./cadastro-produto.css'],
})
export class CadastroProduto implements OnInit{

  produto: Produto = {
    // id fica ausente quando for criar um novo produto, JSON‑Server atribui automaticamente
    produto: '',
    descricao: '',
    foto: '',
    preco: 0
  }

  //injetando os serviços necessários
  private _serviceProduto: produtoService = inject(produtoService)
  private _router: Router = inject(Router)
  private _activeRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    const id = this._activeRoute.snapshot.paramMap.get('id'); //Define o ID atual para ser o mesmo ID que estiver como parâmetro da url
    if (id) {
      this._serviceProduto
        .obterProduto(Number(id))
        .subscribe((dados) => {
          this.produto = dados;
        });
      }
  }

  salvarProduto(): void {
    if (this.produto.id !== undefined && this.produto.id !== null) {
      this._serviceProduto
        .atualizarProduto(this.produto.id, this.produto)
        .subscribe(() => {
          alert('Produto atualizado com sucesso!');
          this._router.navigate(['/painel-principal']);
        });
    } else {
      this._serviceProduto
        .cadastrarProduto(this.produto)
        .subscribe(() => {
          alert('Produto cadastrado com sucesso!');
          this._router.navigate(['/painel-principal']);
        });
    }
  }
}


