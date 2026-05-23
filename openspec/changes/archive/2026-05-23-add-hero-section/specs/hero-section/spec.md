## ADDED Requirements

### Requirement: Hero section fullscreen com fundo escuro
A seção hero SHALL ocupar 100% da altura da viewport (`min-height: 100vh`) e ter fundo escuro (`#0b0b0b`) preparado para receber vídeo futuramente, com um overlay semi-transparente para garantir legibilidade do texto.

#### Scenario: Hero ocupa toda a viewport
- **WHEN** o usuário acessa a página inicial
- **THEN** a seção hero SHALL preencher toda a altura e largura da tela visível

#### Scenario: Navbar transparente sobreposta à hero
- **WHEN** a página é carregada
- **THEN** a navbar SHALL aparecer flutuando sobre a hero section com `position: absolute`, sem empurrar o conteúdo para baixo

---

### Requirement: Título principal "VIVA O NOVO"
A hero section SHALL exibir o texto **"VIVA O NOVO"** como título principal (`<h1>`), em fonte `Outfit` bold, tamanho grande, cor branca, posicionado no lado esquerdo da seção.

#### Scenario: Título visível sobre o fundo
- **WHEN** o usuário visualiza a hero section
- **THEN** o texto "VIVA O NOVO" SHALL ser exibido em destaque, em branco, no lado esquerdo da viewport

---

### Requirement: Botão CTA "JUNTE-SE A NÓS NO DOMINGO"
A hero section SHALL exibir um botão de call-to-action com o texto **"JUNTE-SE A NÓS NO DOMINGO"** na cor de fundo `#f3a706` (gold), com texto escuro, posicionado abaixo do título `<h1>`.

#### Scenario: Botão exibido com cor correta
- **WHEN** o usuário visualiza a hero section
- **THEN** o botão SHALL ser exibido com fundo `#f3a706`, texto escuro e formato pill (border-radius arredondado)

#### Scenario: Botão com hover feedback
- **WHEN** o usuário passa o mouse sobre o botão
- **THEN** o botão SHALL apresentar uma transição visual de escurecimento ou elevação sutil (transform/opacity)

---

### Requirement: Bloco de informações de culto
A hero section SHALL exibir um bloco de informações de culto no canto inferior esquerdo da seção, contendo:
- **"DOMINGO"** em negrito (label de destaque)
- **"18h | 20h"** como horários
- **"Participe presencial ou online"** como subtexto

#### Scenario: Informações de culto visíveis na parte inferior
- **WHEN** o usuário visualiza a hero section
- **THEN** as informações de culto SHALL ser exibidas no canto inferior esquerdo, em branco, com hierarquia visual clara entre label, horários e subtexto

#### Scenario: Responsividade mobile
- **WHEN** o usuário acessa em dispositivo com largura ≤ 768px
- **THEN** o layout SHALL se adaptar com fontes menores, padding reduzido e conteúdo ainda legível e bem posicionado
