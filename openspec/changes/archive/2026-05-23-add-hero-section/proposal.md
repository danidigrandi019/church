## Why

A página inicial ainda não possui uma seção hero, deixando o site sem um primeiro impacto visual forte. Precisamos de uma hero section que comunique imediatamente a identidade da igreja e convide o visitante a participar dos cultos.

## What Changes

- Criação do componente `HeroComponent` standalone no Angular dentro de `src/app/features/hero/components/`
- A seção ocupa 100% da viewport (fullscreen), preparada para receber um vídeo de fundo futuramente (placeholder escuro por ora)
- Exibe o título principal **"VIVA O NOVO"** em destaque
- Exibe botão de CTA **"JUNTE-SE A NÓS NO DOMINGO"** na cor `#f3a706`
- Exibe bloco de informações de culto: "DOMINGO / 18h | 20h / Participe presencial ou online"
- Componente é registrado e renderizado em `app.html` logo abaixo do `<app-navbar>`
- Novas variáveis de design token adicionadas em `_variables.scss` (`$color-cta-gold`, `$z-hero`)

## Capabilities

### New Capabilities
- `hero-section`: Seção fullscreen de boas-vindas com título, CTA dourado e informações de culto

### Modified Capabilities
- Nenhuma

## Impact

- **Novo arquivo**: `src/app/features/hero/components/hero.component.ts`
- **Novo arquivo**: `src/app/features/hero/components/hero.component.html`
- **Novo arquivo**: `src/app/features/hero/components/hero.component.scss`
- **Modificado**: `src/app/app.html` — adição do `<app-hero>`
- **Modificado**: `src/app/app.ts` — import do `HeroComponent`
- **Modificado**: `src/app/styles/abstracts/_variables.scss` — novos tokens de cor e z-index
