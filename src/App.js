import { Shop } from "./Shop";

/**
 * Fazer um fork deste codesandbox para a sua conta pessaol e
 *  após concluir o desafio, enviar o link para dev@e-inscricao.com.
 *
 * Criar uma página de produtos no componente <Shop /> com as seguintes features:
 * 1. Listar na lateral todas as categorias utilizando o endpoint: https://dummyjson.com/products/categories
 * 2. Listar todos os produtos utilizando o endpoint: https://dummyjson.com/products
 * 3. Ao clicar em uma categoria, filtrar os produtos utilizando o endpoint: https://dummyjson.com/docs/products#category
 * 4. Realizar a busca de produtos utilizando a api: https://dummyjson.com/docs/products#search
 * 5. Implementar a paginação de 10 ítens por página utilizando: https://dummyjson.com/docs#intro-limit
 * 6. Implementar o componente [- 0 +] para escolher a quantidade de produtos desejados.
 * Documentação da API: https://dummyjson.com/docs/products
 *
 * É EXPRESSAMENTE PROIBIDO IMPORTAR QUALQUER LIB EXTERNA!
 *
 * Será avaliado a utilização de Hooks customizados,
 *  separação e organização dos componentes, clareza do código e demais boas práticas de React.
 *
 * Não modificar o layout ou outros arquivos como este ou
 *  index.js ou package.json ou public/*
 */

export default function App() {
  return <Shop />;
}
