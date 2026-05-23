## 1. Design Tokens

- [x] 1.1 Adicionar variável `$color-cta-gold: #f3a706` em `src/app/styles/abstracts/_variables.scss`
- [x] 1.2 Adicionar variável `$shadow-cta: 0 4px 20px rgba(243, 167, 6, 0.35)` em `_variables.scss`
- [x] 1.3 Adicionar variável `$z-hero: 1` em `_variables.scss` para garantir stacking context correto

## 2. Criação do HeroComponent

- [x] 2.1 Criar arquivo `src/app/features/hero/components/hero.component.ts` como componente Angular standalone com seletor `app-hero`
- [x] 2.2 Criar arquivo `src/app/features/hero/components/hero.component.html` com estrutura: container hero > título H1 "VIVA O NOVO" > botão CTA > bloco de informações de culto
- [x] 2.3 Criar arquivo `src/app/features/hero/components/hero.component.scss` com estilos fullscreen, fundo escuro, overlay, layout flexbox e responsividade mobile

## 3. Estilização da Hero Section

- [x] 3.1 Estilizar `.hero` com `min-height: 100vh`, `display: flex`, `flex-direction: column`, `justify-content: space-between`, `background: #0b0b0b`, `position: relative`
- [x] 3.2 Adicionar pseudo-elemento `::before` para overlay semi-transparente (`rgba(0, 0, 0, 0.55)`) que cobrirá o vídeo futuro
- [x] 3.3 Estilizar `.hero-title` (H1 "VIVA O NOVO") com fonte `Outfit`, bold, tamanho grande (~4.5rem desktop), cor branca, uppercase
- [x] 3.4 Estilizar `.hero-cta-btn` com `background: $color-cta-gold`, texto escuro, `border-radius: $radius-pill`, padding generoso, transição hover
- [x] 3.5 Estilizar `.hero-service-info` com posicionamento no canto inferior esquerdo, tipografia em branco com hierarquia clara (label bold, horários, subtexto muted)
- [x] 3.6 Implementar breakpoints mobile (≤768px): fontes menores, padding reduzido, layout ajustado

## 4. Integração na Aplicação

- [x] 4.1 Importar `HeroComponent` em `src/app/app.ts` e adicioná-lo ao array `imports` do componente raiz
- [x] 4.2 Adicionar `<app-hero></app-hero>` em `src/app/app.html` logo abaixo de `<app-navbar>`

## 5. Verificação

- [x] 5.1 Verificar que a hero section ocupa 100% da viewport sem scroll indesejado
- [x] 5.2 Verificar que a navbar aparece sobreposta à hero com fundo transparente
- [x] 5.3 Verificar que o botão CTA exibe a cor `#f3a706` corretamente
- [x] 5.4 Verificar responsividade no breakpoint mobile (≤768px)
- [x] 5.5 Verificar que não há erros de compilação no `npm start`
