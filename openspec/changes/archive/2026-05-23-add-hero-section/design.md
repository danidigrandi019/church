## Context

O projeto é uma landing page de igreja em Angular 21 com arquitetura de features standalone. A navbar já existe como componente Angular em `src/app/features/navbar/`. O design usa SCSS com tokens centralizados em `src/app/styles/abstracts/_variables.scss` e a fonte `Outfit`. A hero section deve ocupar toda a viewport e ser preparada para receber um vídeo de fundo futuramente — por ora usará um fundo escuro sólido. O conteúdo deve estar posicionado sobre esse fundo com overlay semi-transparente.

## Goals / Non-Goals

**Goals:**
- Criar o `HeroComponent` standalone Angular com template, estilos e lógica mínima
- Implementar layout fullscreen com conteúdo alinhado ao lado esquerdo/inferior, replicando o design da imagem de referência
- Usar tokens de design existentes e adicionar novos tokens necessários (`$color-cta-gold`, `$shadow-cta`)
- Integrar o componente no `app.html` e `app.ts`
- Garantir responsividade mobile

**Non-Goals:**
- Integrar vídeo de fundo (será feito futuramente)
- Animações de entrada elaboradas (pode ter fade simples)
- Lógica de navegação dinâmica no botão CTA (apenas âncora por ora)

## Decisions

### 1. Componente Standalone Angular
**Decisão**: `HeroComponent` standalone, sem NgModule.  
**Motivo**: Consistência com o padrão do projeto (navbar, logo e dropdown são todos standalone).

### 2. Estrutura de layout: CSS Flexbox com `position: relative`
**Decisão**: A hero usa `min-height: 100vh`, `display: flex`, `flex-direction: column`, `justify-content: flex-end` para empurrar o conteúdo para baixo, com o título centralizado verticalmente.  
**Motivo**: Replica fielmente o layout da imagem de referência — título no terço superior/médio, informações de culto no canto inferior esquerdo.  
**Alternativa considerada**: CSS Grid — descartado por adicionar complexidade desnecessária para este layout linear.

### 3. Fundo: `background: #0b0b0b` + overlay
**Decisão**: Fundo escuro sólido com um `::before` pseudo-elemento de overlay `rgba(0,0,0,0.55)` sobre onde o vídeo será inserido futuramente.  
**Motivo**: Prepara o slot de vídeo sem bloquear a leitura do texto. Quando o vídeo for adicionado, basta adicionar `<video>` como filho absoluto e o overlay já funciona.

### 4. Botão CTA na cor `#f3a706`
**Decisão**: Adicionar variável `$color-cta-gold: #f3a706` em `_variables.scss`.  
**Motivo**: Centraliza o token de cor para reutilização futura. Seguindo o padrão existente do projeto.

### 5. Separação de responsabilidades de texto
**Decisão**: Todo texto fica no template HTML. Sem inputs `@Input()` por enquanto.  
**Motivo**: Conteúdo é estático e fixo. Inputs/serviços serão adicionados somente quando houver necessidade de dinamismo (CMS, i18n).

## Risks / Trade-offs

- **[Risco] Conflito de z-index entre navbar e hero** → Mitigação: A navbar já usa `$z-navbar: 1000` com `position: absolute`. A hero usa `position: relative` sem z-index próprio, então não haverá conflito — a navbar flutua naturalmente sobre a hero.
- **[Risco] Logo sobreposta ao texto da hero** → Mitigação: O conteúdo da hero tem `padding-top` suficiente para não colidir com a navbar transparente.
- **[Trade-off] Fundo sem vídeo** → Conteúdo por ora visual menos impactante. Aceitável pois o vídeo será integrado na próxima iteração.
