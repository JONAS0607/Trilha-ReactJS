# 🔃 PASSOS DO PROJETO

## 🚩 Remover pacotes

1. 💻 `yarn remove sass` _mais o nome do pacote em questão no exemplo removemos o sass_

## 🚩 Executando a aplicação

1. 💻 `yarn webpack`
1. 💻 `yarn webpack serve` _após a instalação do web-pack-server, gera um caminho para acesso do app http://localhost:8080 salvando e dando reload automaticamente nos arquivos quando alterados_
1. 💻 `yarn dev` _após configuração do script no package.json, este comando é configurado para o ambiente de desenvolvimento_
1. 💻 `yarn build` _para ambiente de produção_

<details>
<summary><strong> 🔽 Instalações do projeto </strong></summary>

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

</details>

<details>
<summary><strong> 🔽 Pastas e arquivos do projeto </strong></summary>

<details>
<summary><strong> 📁 root </strong></summary>

- 📄 .gitignore

```html
node_modules
```

- 📄 webpack.config.js

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  },
  plugins: [
    new HtmlWebpackPlugin({
      //para que o js seja injetado no template index.html
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
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
</details>
<details>
<summary><strong> 📁 src </strong></summary>

- 📄 App.jsx

```javascript
import "./styles/global.scss";
export function App() {
  return <h1>Hello World!</h1>;
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
<summary><strong> 📁 styles </strong></summary>

- 📄 global.scss

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body: {
  font: Arial, Helvetica, sans-serif;
  background: #333;
  color: #fff;
}
```

</details>

</details>
<details>
<summary><strong> 📁 public </strong></summary>

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
