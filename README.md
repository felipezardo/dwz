# Dungeon World 2 — Fichas (PT-BR / EN-US)

Ficha de personagem web (HTML/CSS/JS puro, sem build) para **Dungeon World 2 Beta**: 9 classes com Trilhas (Paths), 22 Provações (Struggles), 8 Vínculos (Bonds) e todos os Movimentos (Moves), com alternância instantânea entre **Português (pt-BR)** e **Inglês (en-US)** pelas bandeiras no cabeçalho.
Personagens e preferência de idioma ficam no `localStorage` do navegador; use **Exportar/Importar** para backup.

## Estrutura
```
index.html            página única
css/styles.css        visual
js/i18n.js            textos de interface e seletor de idioma (pt-BR / en-US)
js/app.js             eventos, personagens, abas e troca de idioma
js/views.js           HTML da ficha, Provações, Vínculos e Movimentos
js/util.js            caixas, círculos, campos e formatação do texto original
js/state.js           persistência e criação de personagem
js/roller.js          rolagens 2d6 animadas
js/data/*.js          conteúdo completo do jogo em PT-BR e EN-US
tools/extract.py      extrai o texto dos PDFs oficiais para js/data/
```

## Deploy (GitHub Pages)
Suba tudo, depois Settings → Pages → Branch `main` / root. Para testar localmente use um servidor (`npx serve`), pois o projeto usa ES modules.
