# Somos Church - Website Institucional

![Mockup do Projeto](src/assets/readme/mockup.webp)

Este repositório contém o código-fonte do website institucional da Somos Church, uma plataforma moderna desenvolvida para conectar a comunidade, divulgar programações semanais, eventos, história ministerial e facilitar contribuições financeiras seguras. O projeto foi projetado com foco em excelente experiência visual, performance, SEO e escalabilidade de código.

## Tecnologias Utilizadas

- **Angular 21**: Framework principal utilizando Standalone Components, Lazy Loading de rotas e injeção de dependências nativa.
- **TypeScript**: Garantia de tipagem estática, segurança em tempo de desenvolvimento e código auto-documentado.
- **SASS (SCSS)**: Pré-processador utilizado com arquitetura modular de estilos, baseando-se em tokens de design centralizados e reutilização avançada de estilos com mixins.
- **Node.js & Express**: Utilizados para suporte a Server-Side Rendering (SSR), otimizando SEO e tempo de carregamento inicial.
- **Vitest**: Framework moderno de testes unitários rápidos para garantir a estabilidade do código.
- **Vercel**: Infraestrutura de nuvem selecionada para hospedagem contínua e deploy automatizado da aplicação Angular.

## Arquitetura de Software e Boas Práticas

### 1. DRY (Don't Repeat Yourself) e Reutilização de Estilos
Para manter a folha de estilo limpa e de fácil manutenção, os layouts repetitivos de páginas institucionais (como Nossa História, Geração Jovem e Geração Kids) foram unificados. Em vez de duplicar centenas de linhas de estilos de grid, títulos, contêineres e cartões, criamos um mixin global reutilizável (`@mixin standard-page-layout`) localizado no núcleo do design system (`src/app/styles/abstracts/_variables.scss`).
As folhas de estilos das páginas individuais foram reduzidas a poucas linhas, focando apenas em especificidades locais (como proporções específicas de imagens ou players de vídeo).

### 2. Roteamento Inteligente e Lazy Loading
As rotas da aplicação foram configuradas de forma assíncrona. Cada seção secundária do menu (como /history, /team, /young-generation, /kids, /events e /donate) é carregada sob demanda (lazy-loaded). Isso reduz o tamanho do pacote JavaScript inicial entregue ao usuário, melhorando significativamente as métricas de Core Web Vitals, como Largest Contentful Paint (LCP).

### 3. Server-Side Rendering (SSR)
O projeto foi estruturado com suporte a SSR (Server-Side Rendering) e pré-renderização estática das rotas no momento de build. Essa estratégia garante indexação imediata por motores de busca (SEO) e compartilhamento otimizado de links em redes sociais, além de uma experiência de carregamento inicial quase instantânea para o usuário final.

### 4. Responsividade Avançada
Toda a interface foi projetada sob o conceito Mobile-First, utilizando grids flexíveis e consultas de mídia (media queries) para garantir compatibilidade visual e usabilidade fluida desde telas de smartphones compactos até monitores ultra-wide.

## Estrutura de Diretórios Resumida

```
src/
├── app/
│   ├── core/                  # Configurações globais, rotas e serviços singulares
│   ├── features/              # Módulos de páginas e componentes de funcionalidades específicas
│   │   ├── hero/              # Componente de destaque da Home
│   │   └── pages/             # Páginas da aplicação (Home, About Us, Ambiance, Donate, etc.)
│   ├── shared/                # Componentes reutilizáveis (Navbar, Footer, Logo, etc.)
│   └── styles/                # Design System contendo variáveis, fontes e mixins compartilhados
├── assets/                    # Recursos estáticos (Imagens, Vídeos, Documentos PDF)
├── public/                    # Favicon e arquivos estáticos públicos servidos na raiz
```

## Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js (versão LTS recomendada)
- npm (gerenciador de pacotes padrão)

### Passo 1: Instalação de Dependências
Instale todas as bibliotecas e dependências declaradas no projeto rodando:
```bash
npm install
```

### Passo 2: Inicializar Servidor de Desenvolvimento
Inicie o servidor local integrado do Angular CLI:
```bash
npm start
```
Após o processo de compilação rápida, acesse o endereço `http://localhost:4200/` no navegador de sua preferência.

### Passo 3: Executar Testes Unitários
Para rodar a suíte de testes automatizados com o Vitest:
```bash
npm test
```

### Passo 4: Build de Produção
Para compilar a aplicação otimizada para produção (gerando os arquivos estáticos e de servidor na pasta `dist/`):
```bash
npm run build
```

## Configuração de Deploy
O deploy em produção é orquestrado de forma contínua através do Vercel, monitorando o repositório Git. As regras de reescrita de rotas para garantir o funcionamento correto de Single Page Applications (SPA) estão devidamente mapeadas no arquivo `vercel.json` na raiz do projeto.
