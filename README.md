# Dungeon World 2 — Fichas

Ficha de personagem web (HTML/CSS/JS puro, sem build) para **Dungeon World 2 Beta**: 9 classes com Paths, 22 Struggles, 8 Bonds e todos os Moves.
Personagens ficam no `localStorage` do navegador; use **Exportar/Importar** para backup.

## Estrutura
```
index.html            página única
css/styles.css        visual
js/app.js             eventos, personagens, abas
js/views.js           HTML da ficha, Struggles, Bonds e Moves
js/util.js            caixas, círculos, campos e formatação do texto original
js/state.js           persistência e criação de personagem
js/roller.js          rolagens 2d6 animadas
js/data/*.js          conteúdo do jogo (GERADO a partir dos PDFs)
tools/extract.py      extrai o texto dos PDFs oficiais para js/data/
```

## Deploy (GitHub Pages)
Suba tudo, depois Settings → Pages → Branch `main` / root. Para testar localmente use um servidor (`npx serve`), pois o projeto usa ES modules.

## Atualizar o conteúdo
Com os PDFs numa pasta (`Character_Sheets.pdf`, `Struggles.pdf`, `Bonds.pdf`, `Move_Reference.pdf`) e o `poppler-utils` instalado:
`python3 tools/extract.py ./pasta-dos-pdfs`
