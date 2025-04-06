import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter(produto => 
          produto.descricao.toLowerCase().includes(descricao) ||
          produto.id.toString().includes(descricao)
        );
        return;   
      }

      this.produtos = produtos;
    })
  }

  adicionarAoCarrinho(produto: IProduto) {
    const produtoCarrinho = {
      ...produto,
      quantidade: 1
    }
    this.carrinhoService.adicionarAoCarrinho(produtoCarrinho);
    this.router.navigate(['/carrinho']);
  }
}
