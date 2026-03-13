# LORAIS Soluções Elétricas Prediais - Frontend

## Visão Geral do Projeto

Este projeto consiste no desenvolvimento do frontend para o site da **LORAIS Soluções Elétricas Prediais**, uma empresa especializada em serviços elétricos prediais e residenciais, com foco em segurança, economia e otimização de instalações e manutenções. O principal objetivo do site é estabelecer uma presença digital estratégica para atrair novos clientes, aumentar contratos recorrentes e consolidar a autoridade da empresa no mercado, especialmente no segmento de condomínios.

### Missão

Garantir instalações residenciais mais seguras e econômicas, contribuindo com a melhoria da convivência de moradores de condomínios.

### Serviços Oferecidos

A LORAIS oferece uma gama completa de serviços elétricos, incluindo:

*   Instalação de iluminação de emergência
*   Instalação de ventiladores
*   Instalação de iluminação geral
*   Instalação de tomadas
*   Instalação de sensores de presença
*   Instalação de fotocélulas
*   Automação residencial
*   Manutenção preventiva e corretiva de instalações elétricas

## Tecnologias Utilizadas

O frontend do projeto está sendo desenvolvido utilizando as seguintes tecnologias:

*   **React.js**: Uma biblioteca JavaScript para construção de interfaces de usuário interativas.
*   **Vite**: Um empacotador de módulos e servidor de desenvolvimento rápido para projetos web.
*   **JavaScript (ES6+)**: Linguagem de programação principal.
*   **CSS**: Para estilização dos componentes e páginas.

## Estrutura do Projeto

A estrutura de diretórios do projeto é organizada para facilitar o desenvolvimento e a manutenção:

```
LORAIS
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   └── styles/ (Estilos específicos para componentes)
│   ├── pages/
│   │   └── styles/ (Estilos específicos para páginas)
│   ├── routes/
│   │   └── AppRouters.jsx
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

### Descrição dos Diretórios e Arquivos Principais:

*   **`src/`**: Contém todo o código-fonte da aplicação.
    *   **`assets/`**: Armazena recursos estáticos como imagens e ícones.
        *   `icons/`: Ícones utilizados na aplicação.
        *   `images/`: Imagens diversas do projeto.
    *   **`components/`**: Contém componentes React reutilizáveis. Cada componente pode ter sua própria pasta `styles/` para estilos encapsulados.
    *   **`pages/`**: Contém os componentes React que representam as diferentes páginas da aplicação (ex: `Home.jsx`). Cada página pode ter sua própria pasta `styles/`.
    *   **`routes/`**: Define as rotas da aplicação (ex: `AppRouters.jsx`).
    *   **`styles/`**: Contém os estilos globais da aplicação (`App.css`, `index.css`).
    *   **`App.jsx`**: Componente principal da aplicação, onde as recebe as rotas e o layout geral são definidos.
    *   **`main.jsx`**: Ponto de entrada da aplicação React, responsável por renderizar o componente `App` no DOM.
*   **`package.json`**: Arquivo de configuração do projeto, listando dependências e scripts.
*   **`vite.config.js`**: Configuração do Vite para o projeto.

## Como Rodar o Projeto (Desenvolvimento)

Para configurar e rodar o projeto em ambiente de desenvolvimento, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/PI-FatecZL/Lorais
    cd LORAIS
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta, dependendo da configuração do Vite).
