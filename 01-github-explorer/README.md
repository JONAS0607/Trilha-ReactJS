# 🔃 PASSOS DO PROJETO

<details>
<summary ><strong> ✅ Para rodar </strong></summary>

### 🚩 Executando a aplicação

1. 💻 `yarn webpack`
1. 💻 `yarn webpack serve` _após a instalação do web-pack-server, gera um caminho para acesso do app http://localhost:8080 salvando e dando reload automaticamente nos arquivos quando alterados_
1. 💻 `yarn dev` _após configuração do script no package.json, este comando é configurado para o ambiente de desenvolvimento_
1. 💻 `yarn build` _para ambiente de produção_

### 🚩 Remover pacotes

1. 💻 `yarn remove sass` _mais o nome do pacote em questão no exemplo removemos o sass_

</details>

### <h3 hidden>📗 CONFIGURANDO O AMBIENTE </h3>

<details>

<summary ><strong> 🔽 Instalações do projeto </strong></summary>

1. 💻 `yarn init -y`
1. 💻 `yarn add react`
1. 💻 `yarn add react-dom`
1. 💻 `yarn add @babel/core @babel/cli @babel/preset-env -D`
1. 💻 `yarn add babel -h` _para ver ajuda do babel_
1. 💻 `yarn babel src/index.js --out-file dist/bundle.js` _testando o arquivo index com o cli do babel, gerando uma pasta chamada dist na raiz do projeto com as informações atualizadas/convertida pelo babel_
1. 💻 `yarn add @babel/preset-react -D ` _para que o babel entenda a codificação React dentro dos arquivos js_
1. 💻 `yarn add webpack webpack-cli -D` _transforma tipos de arquivos para o entendimento do navegador_
1. 💻 `yarn add babel-loader -D` _integra babel com webpack, convertendo o arquivo de uma maneira que o browser entenda_
1. 💻 `yarn add html-webpack-plugin -D` _para que o js seja injetado diretamente no html sem precisar apontar o caminho_
1. 💻 `yarn add webpack-dev-server -D` _automatizar as alterações na pasta src_
1. 💻 `yarn add cross-env -D` _para criação de variáveis de ambiente para windows e outros ambientes_
1. 💻 `yarn add style-loader css-loader -D` _dependências para estilo css_
1. 💻 `yarn add node-sass -D` _dependêcia para estilos scss_
1. 💻 `yarn add sass-loader -D` _pré processador para estilos css usado para otimizar a criação de layouts podendo usar o encadeamento de propriedades_
1. 💻 `yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh` _REACT REFRESH para guardar o valor dos estados quando alterado o código da aplicação_

</details>

### <h3 hidden> 📢 EXPLICAÇÕES ESPECIFICAS </h3>

<details>

<summary ><strong> ✅ Explicações </strong></summary>

1. 💻 **COMPONETES** _basicamente um componente é uma função, forma de organizar, pedaços de código que juntos formam algo maior, normalmente a estrutura de um componente é uma função que retorna um html, no caso do react, exportamos ele do local que foi criado e importamos onde vamos usar, sempre que criarmos um componente iniciamos ele com a letra maiuscula, não criar mais de um componente em um mesmo arquivo_

```javascript
//exemplo de componente
export function App() {
  return <h1>Hello World!</h1>;
}
```

1. 💻 **Utilização de variáveis com interpolação** _Dentro dos componentes fica facil a utilização de variáveis junto com o html uma das vantagens de usar o REACTJS_
1. 💻 **Propriedades no React** _Permite a utilização de componetes dentro de componetes, podendo o componente pai enviar informações para o componente filho_
1. 💻 **Conceito de estado** _para usar mais de um componente no return usa-se o `fragment do react e envolve os componentes <> <Component/> </>` sempre que um modulo form importado e ele iniciar com 'use' chamamos isso de `hook -> gancho` no caso importamos o `useState` do react, quando usamos o useState ele nos retorna uma array e para usar esta variável precisamos `desestruturar a variável`, Estado uma forma de modificar a variável para refletir as mudanças na interface_
1. 💻 **Imutabilidade** _Preve que uma variável não podera ter o valor alterado, ou seja para adicionar uma informação em uma array existente ele em vez de alterar e adicionar, pega a array faz uma copia ou seja rescreve a array criando uma nova e adiciona o valor desejado_
1. 💻 **Fast refresh** _forma de alterar o código da aplicação, mantendo o estado dos componentes valores já adicionados nas variáveis_
</details>

### <h3 hidden>📁 PASTAS DO PROJETO</h3>

<details>
<summary ><strong> 🔽 Pastas e arquivos do projeto </strong></summary>

<details>
<summary ><strong> 📁 root </strong></summary>

- 📄 .gitignore

```html
node_modules
```

- 📄 webpack.config.js

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/**
 * Configurando ambiente de desenvolvimento e produção
 */
const isDevelopment = process.env.NODE_ENV !== "production";
module.exports = {
  mode: isDevelopment ? "development" : "production", // deixa o tempo de execução mais rapido para modo de desenvolvimento
  devtool: isDevelopment ? "eval-source-map" : "source-map", //(sourcemaps) para visualizar os erros com mais especificidade direto no arquivo, podendo ver o erro direto do browser no devtools
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      //para que o js seja injetado no template index.html
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/, // pode-se usar sass para não ser necessário usar as '{}' chaves
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
```

- 📄 babel.config.js

```javascript
module.exports = {
  presets: {
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime:'automatic'
    }]
  },
};
```

- 📄 package.json ➡ **_configura automaticamente, colocamos alguns caminhos como scripts para não precisarmos executar caminhos muito longos no terminal_**

```json
"scripts":{
  "dev":"webpack serve",
  "build":"cross-env NODE_ENV=production webpack",//cria a variavel de ambiente como production, para iniciar como ambiente de produção
  },
```

- 📄 yarn.lock ➡ **_configura automaticamente_**

<details>
<summary ><strong> 📁 root/src </strong></summary>

- 📄 App.jsx

```javascript
import { RepositoryList } from "./components/RepositoryList";
import { Counter } from "./components/Counter";
import "./styles/global.scss";
export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
```

- 📄 index.jsx

```javascript
/**
 * Para fazer o teste do dist/bundle.js do babel
const user = {
  name: "Jonas",
};
console.log(user.address?.street);
*/
import { App } from "./App";
// import React from "react"; não precisa pois vamos configurar no babel.config.js
import { render } from "react-dom";

render(<App />, document.getElementById("root"));
```

<details>
<summary ><strong> 📁 root/src/styles </strong></summary>

- 📄 global.scss

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body: {
  font: 16px "Helvetica Neue", Arial, sans-serif;
  /* background: #333; */
  color: #121214;
}
```

</details>
<details>
<summary ><strong> 📁 root/src/components </strong></summary>

- 📄 Counter.jsx

```js
import { useState } from "react";
//desestrutuar uma variável para a utilização de usestate pois retorna uma array
const [counter, setCounter] = useState(0);
export function Counter() {
  setCounter(counter + 1);
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button">Increment</button>
    </div>
  );
}
```

- 📄 RepositoryItem.jsx

```javascript
export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "default"}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.link}>Acessar repositórios</a>
    </li>
  );
}
```

- 📄 RepositoryList.jsx

```javascript
import { RepositoryItem } from "./RepositoryItem";
const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};
export function RepositoryList() {
  return (
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
```

</details>
</details>
<details>
<summary ><strong> 📁 root/public </strong></summary>

- 📄 index.html
  _Configurando estrutura para que o React funcione_

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Github Explorer</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- <script src="../dist/bundle.js"></script> não precisa mais pois vamos injetar direto com html-webpack-plugin -->
  </body>
</html>
```

</details>
</details>
