# Site de Links Afiliados - Mercado Digital

Um site moderno e responsivo para gerenciar e exibir links de afiliados de produtos digitais.

## 🚀 Funcionalidades

- **Sistema de Busca Inteligente**: Busca por número do produto ou palavras-chave
- **Design Moderno**: Interface limpa e responsiva com gradientes e animações
- **Grid Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Redirecionamento Seguro**: Links abrem em nova aba com confirmação
- **Gerenciamento de Produtos**: Sistema flexível para adicionar/editar/remover produtos
- **Sem Cadastro**: Acesso direto sem necessidade de registro
- **📊 Analytics Privado**: Sistema discreto para você acompanhar visitas e cliques
- **🔒 Totalmente Invisível**: Usuários não veem números, só você tem acesso
- **💾 Dados Persistentes**: Estatísticas salvas no navegador, não são perdidas

## 📁 Estrutura de Arquivos

```
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript principal
├── products.js         # Sistema de gerenciamento de produtos
└── README.md           # Este arquivo
```

## 🛠️ Como Usar

### 1. Adicionar Novos Produtos

Para adicionar um novo produto, você pode usar o console do navegador:

```javascript
// Adicionar produto
addProductToSite(
    "009",                                    // Número do produto
    "Curso de Fotografia",                    // Título
    "https://exemplo.com/imagem.jpg",         // URL da imagem
    "https://exemplo.com/curso-fotografia",   // Link de afiliado
    ["fotografia", "curso", "camera", "arte"] // Palavras-chave
);
```

### 2. Editar Produtos Existentes

```javascript
// Editar produto existente
updateProductInSite(1, {
    title: "Novo Título",
    image: "https://nova-imagem.jpg",
    affiliateLink: "https://novo-link.com",
    keywords: ["nova", "palavra", "chave"]
});
```

### 3. Remover Produtos

```javascript
// Remover produto
removeProductFromSite(1);
```

### 5. Sistema de Analytics Privado

```javascript
// Ver analytics completos (só você pode ver)
showAnalytics();

// Ver resumo rápido
showQuickStats();

// Resetar todos os dados
resetAllAnalytics();

// Exportar dados para backup
exportAllAnalytics();

// Simular dados para teste
simulateAnalytics();

// Mostrar ajuda completa
showAdminHelp();
```

**🔒 IMPORTANTE**: Este sistema é totalmente discreto! Os usuários não veem números de cliques ou visitas. Apenas você tem acesso às estatísticas através do console do navegador.

## 🎨 Personalização

### Modificar Cores e Estilo

Edite o arquivo `styles.css` para personalizar:

- **Cores principais**: Modifique as variáveis de gradiente
- **Fontes**: Altere a fonte importada do Google Fonts
- **Animações**: Ajuste as durações e efeitos
- **Layout**: Modifique o grid e espaçamentos

### Adicionar Novos Campos

Para adicionar novos campos aos produtos, edite o arquivo `products.js`:

```javascript
// Exemplo: adicionar campo de preço
{
    id: 1,
    number: "001",
    title: "Curso de Marketing Digital",
    image: "https://exemplo.com/imagem.jpg",
    affiliateLink: "https://exemplo.com/link",
    keywords: ["marketing", "digital"],
    price: "R$ 297,00",        // Novo campo
    category: "Cursos"         // Novo campo
}
```

## 🔧 Configurações Avançadas

### Analytics e Tracking

O sistema inclui suporte para tracking de cliques. Para ativar:

1. Adicione o Google Analytics ao seu site
2. Os cliques serão automaticamente rastreados com eventos `product_click`

### SEO e Meta Tags

Adicione meta tags ao `index.html`:

```html
<meta name="description" content="Encontre os melhores produtos digitais">
<meta name="keywords" content="produtos digitais, cursos online, ebooks">
<meta property="og:title" content="Mercado Digital">
<meta property="og:description" content="Encontre os melhores produtos digitais">
```

### Otimizações de Performance

- **Lazy Loading**: Imagens carregam conforme necessário
- **Debounce**: Busca otimizada com delay de 300ms
- **Animações CSS**: Usando transform e opacity para melhor performance

### Atalhos de Teclado

- **Ctrl/Cmd + K**: Focar na busca
- **Ctrl/Cmd + A**: Mostrar analytics completos (admin)
- **Ctrl/Cmd + Q**: Resumo rápido de estatísticas (admin)
- **Ctrl/Cmd + E**: Exportar dados de analytics (admin)
- **Escape**: Limpar busca

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Desktop**: Grid de 4+ colunas
- **Tablet**: Grid de 2-3 colunas
- **Mobile**: Grid de 1-2 colunas

## 🚀 Deploy

Para fazer deploy do site:

1. **GitHub Pages**: Faça upload dos arquivos para um repositório
2. **Netlify**: Arraste a pasta do projeto
3. **Vercel**: Conecte o repositório GitHub
4. **Servidor próprio**: Faça upload via FTP

## 🔒 Segurança

- Links abrem em nova aba com `noopener,noreferrer`
- Confirmação antes do redirecionamento
- Validação de dados nos formulários

## 📞 Suporte

Para dúvidas ou sugestões:

1. Verifique a documentação acima
2. Use o console do navegador para debug
3. Teste em diferentes navegadores

## 🎯 Próximas Funcionalidades

- [ ] Sistema de categorias
- [ ] Filtros avançados
- [ ] Modo escuro
- [ ] Favoritos
- [ ] Compartilhamento social
- [ ] Dashboard de administração

---

**Desenvolvido com ❤️ para o mercado digital**
