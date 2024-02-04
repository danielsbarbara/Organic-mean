import { CollectionBar } from "../components/CollectionBar";
import { HomePageCards } from "../components/HomePageCards";
import { NavBar } from "../components/NavBar";

//Esta pagina tem o link organicmean.com/products


//Acho que quando abrimos um cartao (visto que nao trocamos de pagina)

//Devia passar a ser algo como organicmean.com/products?product=${ID_DO_PRODUTO}

//A ideia é fazermos com que seja possível alguem partilhar um link d'um produto especifico
//Temos que fazer com que a página ao abrir (ou o state ao mudar)
//  1. Faz um fetch para carregar a página (função `fetchProducts()`) com quaisquers filtros que estejam ativos (coleção e categoria)
//  2. verifique se tem a query product (?product=${ID_DO_PRODUTO})
//  3. se tiver, também faz um fetch a esse produto (fetchProduct(id))
//      - o fetch product tem que transformar a informação que tem num pedido válido à API da webhopper

export function ProductsPage() {
    return (
        <div>

        <div className="mb-20">
               <CollectionBar />
        </div>

 <HomePageCards/>
        </div>
    )
}