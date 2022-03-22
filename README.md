### 🚀 Tecnologies

- [ReactJs]
- [Typescript]
- HTML

[reactjs]: https://pt-br.reactjs.org/
[typescript]: https://www.typescriptlang.org/

### 🔧 Extensions for VsCode

- [Prettier]
- [ESLint]
- [Styled-Components]
- [DotENV]
- [GitLens]
- [RocketSeat-ReactJs]
- [ES7-ReactJs]

[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[styled-components]: https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components
[dotenv]: https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv
[gitlens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[rocketseat-reactjs]: https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactJS
[es7-reactjs]: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

### ⚙️ Prettier Config

- Add this settings to VsCode settings.json

```json
"files.insertFinalNewline": true,
"editor.formatOnSave": true,
"editor.rulers": [75],
"prettier.semi": false,
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[jsonc]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

# 📦 How to run

- Run `$ yarn install` to install the project's modules
- Run `$ yarn dev` to start development server
- Run `$ yarn test` to execute jest tests
- Run `$ yarn check-linter` to show eslint errors, such as non used variables
- Run `$ yarn check-style` to let prettier show styles errors
- Run `$ yarn fix-style` to let prettier fix the styles of the files
- And the last but not least run `$ yarn build` to prepare the aplication to run at the server
