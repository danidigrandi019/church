## MODIFIED Requirements

### Requirement: Hero section fullscreen com fundo escuro
A seção hero SHALL ocupar 100% da altura da viewport (`min-height: 100vh`) e ter fundo escuro (`#0b0b0b`) preparado para receber vídeo futuramente, com um overlay semi-transparente para garantir legibilidade do texto.

#### Scenario: Hero ocupa toda a viewport
- **WHEN** o usuário acessa a página inicial
- **THEN** a seção hero SHALL preencher toda a altura e largura da tela visível

#### Scenario: Navbar transparente sobreposta à hero
- **WHEN** a página é carregada
- **THEN** a navbar SHALL aparecer flutuando sobre a hero section com `position: absolute`, sem empurrar o conteúdo para baixo

#### Scenario: Responsividade do vídeo em dispositivos mobile
- **WHEN** o usuário acessa em dispositivo móvel com largura ≤ 768px em modo retrato (portrait)
- **THEN** o vídeo de background SHALL ser escalado uniformemente para ocultar quaisquer bordas pretas (letterboxing) nativas nas extremidades superior e inferior
