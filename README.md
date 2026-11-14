# Portfólio de Wesley Luiz

Site estático (HTML, CSS e JavaScript puro). Não precisa de instalação nem de build.

## Como rodar na sua máquina
- Opção 1: dê dois cliques em `index.html`.
- Opção 2 (servidor local): na pasta do projeto, rode `npx serve .` e abra o endereço mostrado.

## Estrutura
```
portfolio-wesley/
├── index.html          estrutura e textos fixos (sobre, trajetória, formação, contatos)
├── css/styles.css      todo o visual (cores e fontes nas variáveis do topo)
├── js/
│   ├── data.js         conteúdo editável (em português): habilidades, relatórios, projetos, dados da Curva ABC
│   ├── i18n.js         traduções para inglês e espanhol
│   └── main.js         monta a página e a Curva ABC interativa
└── assets/
    ├── avatar.jpg      sua foto (troque o arquivo para mudar)
    ├── og-image.png    imagem de prévia do LinkedIn (1200x630)
    ├── projects/       logos do ConnectNutri e do Capibariver
    └── cv/curriculo-wesley.pdf   botão "Baixar CV"
```

## Para publicar
Suba a pasta no GitHub e ative o GitHub Pages, ou importe o repositório na Vercel.

## Prévia no LinkedIn
No `<head>` do `index.html`, troque `SEU-DOMINIO` pelo endereço real do site (nas tags `og:image` e `og:url`).
O LinkedIn exige endereço completo (https://...) e guarda a prévia em cache: depois de publicar, teste e atualize em
https://www.linkedin.com/post-inspector/
