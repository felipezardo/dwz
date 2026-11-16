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


## Novidades
- **Página inicial** (`#/`): galeria com todas as fichas salvas, ordenadas pela última edição. Cada ficha abre em `#/c/<id>` (o botão Voltar do navegador funciona).
- **Foto do personagem**: envie um arquivo (reduzido automaticamente para caber no navegador) ou cole o link de uma imagem. Fica salva junto com a ficha e vai no Exportar/Importar.
- **Mobile**: ficha em uma coluna na ordem de uso (identidade, atributos, Movimento Inicial…), barra de abas inferior, textos com bullets/faixas ✴/caixas em itens separados. O layout de desktop (estilo ficha de papel) não muda.

## Equipamento: limites e escolhas "um ou outro"
Cada grupo de itens pode ter `limit` (ex.: "Escolha dois" → `limit: 2`). A ficha mostra o contador (0/2) e bloqueia a terceira escolha. Uma linha com duas opções (ex.: Fighter — peitoral *ou* couro batido) conta como **uma** escolha e só permite marcar uma delas. Os dados em `js/data/classes.js` (EN e PT) já estão com essa estrutura; o `tools/extract.py` gera apenas a base em inglês e não aplica essas correções.
