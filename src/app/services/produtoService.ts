/* Criação do service que irá consumir nossa API Json */

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


//Interface criada para podermos tipar nossa lista de Produtos
export interface Produto{
  id?: number,  // opcional para criação de novos registros
  produto: string,
  descricao: string,
  foto: any,
  preco: number
}

@Injectable({
  providedIn: 'root',
})

export class produtoService {
  private _httpClient: HttpClient = inject(HttpClient) //Injetando o Service HTTP

  APIUrl: string = "http://localhost:3000/produtos" //A url da API que iremos consumir

  /* Todas os nossos métodos foram tipados com a interface Produto */

  /* GET */
  obterProdutos(): Observable<Produto[]>{
    return this._httpClient.get<Produto[]>(this.APIUrl);
  }

  obterProduto(id: number): Observable<Produto>{
    // JSON Server usa /produtos/:id para recuperar um único objeto
    const urlListarUm: string = `${this.APIUrl}/${id}`;
    return this._httpClient.get<Produto>(urlListarUm);
  }

  /* POST */
  cadastrarProduto(produto: Produto): Observable<Produto>{
    return this._httpClient.post<Produto>(this.APIUrl, produto);
  }

  /* PUT */
  atualizarProduto(id: number, produto: Produto): Observable<Produto>{
    // o endpoint PUT também deve apontar para /produtos/:id
    const urlListarUm: string = `${this.APIUrl}/${id}`;
    return this._httpClient.put<Produto>(urlListarUm, produto);
  }
  
  /* DELETE */
  deleteProduto(id: number): Observable<Produto>{ //segue a mesma lógica de buscar ou atualizar, o id faz parte da rota
    const urlListarUm = `${this.APIUrl}/${id}`;
    return this._httpClient.delete<Produto>(urlListarUm);
  }
}
