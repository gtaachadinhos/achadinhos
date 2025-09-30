// JavaScript principal para funcionalidades do site
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    let currentProducts = [];
    let searchTimeout;
    
    // Inicializar a aplicação
    init();
    
    function init() {
        // Carregar todos os produtos inicialmente
        loadProducts(productsData.products);
        
        // Configurar eventos
        setupEventListeners();
        
        // Configurar busca em tempo real
        setupSearch();
    }
    
    function setupEventListeners() {
        // Botão de limpar busca
        clearBtn.addEventListener('click', clearSearch);
        
        // Enter na busca
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
        
        // Foco na busca
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        // Perda de foco na busca
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    }
    
    function setupSearch() {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            
            // Mostrar/ocultar botão de limpar
            if (query.length > 0) {
                clearBtn.style.display = 'block';
            } else {
                clearBtn.style.display = 'none';
            }
            
            // Debounce da busca para melhor performance
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch();
            }, 300);
        });
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        const filteredProducts = searchProducts(query);
        
        loadProducts(filteredProducts);
        updateResultsCount(filteredProducts.length, query);
    }
    
    function clearSearch() {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        loadProducts(productsData.products);
        updateResultsCount(productsData.products.length, '');
        searchInput.focus();
    }
    
    function loadProducts(products) {
        currentProducts = products;
        
        if (products.length === 0) {
            showNoResults();
            return;
        }
        
        hideNoResults();
        renderProducts(products);
    }
    
    function renderProducts(products) {
        productsGrid.innerHTML = '';
        
        products.forEach((product, index) => {
            const productCard = createProductCard(product, index);
            productsGrid.appendChild(productCard);
        });
        
        // Animar cards com delay escalonado
        animateProductCards();
    }
    
    function createProductCard(product, index) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-number">#${product.number}</div>
                <div class="product-title">${product.title}</div>
            </div>
        `;
        
        // Incrementar visualizações quando o produto aparece na tela (invisível)
        incrementViewCount(product.id);
        
        // Adicionar evento de clique para redirecionamento
        card.addEventListener('click', function() {
            handleProductClick(product);
        });
        
        // Adicionar efeito hover com informações adicionais
        card.addEventListener('mouseenter', function() {
            showProductTooltip(this, product);
        });
        
        card.addEventListener('mouseleave', function() {
            hideProductTooltip(this);
        });
        
        return card;
    }
    
    function handleProductClick(product) {
        // Adicionar efeito visual de clique
        const card = event.currentTarget;
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            card.style.transform = '';
            
            // Confirmar redirecionamento
            if (confirm(`Deseja ser redirecionado para: ${product.title}?`)) {
                // Incrementar contador de cliques (invisível para usuários)
                incrementClickCount(product.id);
                
                // Abrir link em nova aba
                window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
                
                // Rastrear cliques (analytics)
                trackProductClick(product);
            }
        }, 150);
    }
    
    function trackProductClick(product) {
        // Função para rastrear cliques nos produtos
        console.log(`Produto clicado: ${product.title} (#${product.number})`);
        
        // Aqui você pode adicionar código para analytics
        // Exemplo: Google Analytics, Facebook Pixel, etc.
        
        // Exemplo de tracking básico:
        if (typeof gtag !== 'undefined') {
            gtag('event', 'product_click', {
                'product_id': product.id,
                'product_number': product.number,
                'product_title': product.title
            });
        }
    }
    
    function showProductTooltip(card, product) {
        // Criar tooltip com informações do produto
        const tooltip = document.createElement('div');
        tooltip.className = 'product-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <strong>${product.title}</strong>
                <p>Clique para acessar o produto</p>
                <small>#${product.number}</small>
            </div>
        `;
        
        // Estilos do tooltip
        tooltip.style.cssText = `
            position: absolute;
            top: -60px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 0.9rem;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        card.style.position = 'relative';
        card.appendChild(tooltip);
        
        // Animar tooltip
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);
    }
    
    function hideProductTooltip(card) {
        const tooltip = card.querySelector('.product-tooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 300);
        }
    }
    
    function animateProductCards() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    function updateResultsCount(count, query) {
        if (query) {
            resultsCount.textContent = `${count} produto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''} para "${query}"`;
        } else {
            resultsCount.textContent = `Todos os ${count} produtos`;
        }
    }
    
    function showNoResults() {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
    }
    
    function hideNoResults() {
        productsGrid.style.display = 'grid';
        noResults.style.display = 'none';
    }
    
    // Função para adicionar produtos dinamicamente (para gerenciamento)
    window.addProductToSite = function(number, title, image, affiliateLink, keywords = []) {
        const newProduct = addProduct(number, title, image, affiliateLink, keywords);
        
        // Recarregar produtos se não há busca ativa
        if (!searchInput.value.trim()) {
            loadProducts(productsData.products);
            updateResultsCount(productsData.products.length, '');
        }
        
        return newProduct;
    };
    
    // Função para atualizar produtos existentes
    window.updateProductInSite = function(id, updates) {
        const updatedProduct = editProduct(id, updates);
        
        if (updatedProduct) {
            // Recarregar produtos
            const query = searchInput.value.trim();
            const filteredProducts = searchProducts(query);
            loadProducts(filteredProducts);
            updateResultsCount(filteredProducts.length, query);
        }
        
        return updatedProduct;
    };
    
    // Função para remover produtos
    window.removeProductFromSite = function(id) {
        const removedProduct = removeProduct(id);
        
        if (removedProduct) {
            // Recarregar produtos
            const query = searchInput.value.trim();
            const filteredProducts = searchProducts(query);
            loadProducts(filteredProducts);
            updateResultsCount(filteredProducts.length, query);
        }
        
        return removedProduct;
    };
    
    // Função para exportar dados dos produtos
    window.exportProducts = function() {
        const dataStr = JSON.stringify(productsData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'products-data.json';
        link.click();
        
        URL.revokeObjectURL(url);
    };
    
    // Função para importar dados dos produtos
    window.importProducts = function(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                if (importedData.products && Array.isArray(importedData.products)) {
                    productsData.products = importedData.products;
                    
                    // Recarregar produtos
                    const query = searchInput.value.trim();
                    const filteredProducts = searchProducts(query);
                    loadProducts(filteredProducts);
                    updateResultsCount(filteredProducts.length, query);
                    
                    alert('Produtos importados com sucesso!');
                } else {
                    alert('Formato de arquivo inválido!');
                }
            } catch (error) {
                alert('Erro ao importar arquivo: ' + error.message);
            }
        };
        reader.readAsText(file);
    };
    
    // Função para mostrar analytics completos (só admin)
    window.showAnalytics = function() {
        const analytics = getFullAnalytics();
        
        let message = `📊 ANALYTICS DO SITE (PRIVADO)\n\n`;
        message += `🌐 ESTATÍSTICAS GERAIS:\n`;
        message += `• Total de visitas: ${analytics.siteStats.totalVisits}\n`;
        message += `• Visitantes únicos: ${analytics.siteStats.uniqueVisitors}\n`;
        message += `• Total de cliques: ${analytics.siteStats.totalClicks}\n`;
        message += `• Taxa de conversão: ${analytics.siteStats.conversionRate}%\n`;
        message += `• Última visita: ${analytics.siteStats.lastVisit ? new Date(analytics.siteStats.lastVisit).toLocaleString('pt-BR') : 'N/A'}\n\n`;
        
        if (analytics.topClickedProducts.length > 0) {
            message += `🏆 TOP 10 MAIS CLICADOS:\n`;
            analytics.topClickedProducts.forEach((product, index) => {
                const medal = index < 3 ? (index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉') : `${index + 1}º`;
                message += `${medal} #${product.number} - ${product.title}: ${product.clickCount} cliques\n`;
            });
        } else {
            message += `Nenhum produto foi clicado ainda.\n`;
        }
        
        if (analytics.topViewedProducts.length > 0) {
            message += `\n👀 TOP 10 MAIS VISUALIZADOS:\n`;
            analytics.topViewedProducts.slice(0, 5).forEach((product, index) => {
                message += `${index + 1}º #${product.number} - ${product.title}: ${product.viewCount} visualizações\n`;
            });
        }
        
        alert(message);
        return analytics;
    };
    
    // Função para mostrar estatísticas resumidas
    window.showQuickStats = function() {
        const analytics = getFullAnalytics();
        
        let message = `📈 RESUMO RÁPIDO\n\n`;
        message += `Visitas: ${analytics.siteStats.totalVisits}\n`;
        message += `Visitantes únicos: ${analytics.siteStats.uniqueVisitors}\n`;
        message += `Cliques: ${analytics.siteStats.totalClicks}\n`;
        message += `Conversão: ${analytics.siteStats.conversionRate}%\n\n`;
        
        if (analytics.topClickedProducts.length > 0) {
            message += `TOP 3 CLICADOS:\n`;
            analytics.topClickedProducts.slice(0, 3).forEach((product, index) => {
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
                message += `${medal} #${product.number}: ${product.clickCount} cliques\n`;
            });
        }
        
        alert(message);
        return analytics;
    };
    
    // Função para resetar analytics
    window.resetAllAnalytics = function() {
        if (confirm('⚠️ ATENÇÃO: Isso vai apagar TODOS os dados de analytics!\n\nTem certeza que deseja continuar?')) {
            resetAnalytics();
            alert('✅ Analytics resetados com sucesso!');
        }
    };
    
    // Função para exportar analytics
    window.exportAllAnalytics = function() {
        const exportData = exportAnalytics();
        alert('📊 Analytics exportados com sucesso!');
        return exportData;
    };
    
    // Função para simular dados (teste)
    window.simulateAnalytics = function() {
        // Simular algumas visualizações e cliques
        productsData.products.slice(0, 5).forEach((product, index) => {
            // Simular visualizações
            for (let i = 0; i < Math.floor(Math.random() * 20) + 5; i++) {
                incrementViewCount(product.id);
            }
            
            // Simular cliques
            for (let i = 0; i < Math.floor(Math.random() * 8) + 1; i++) {
                incrementClickCount(product.id);
            }
        });
        
        alert('🧪 Dados simulados com sucesso!\nUse showAnalytics() para ver os resultados.');
    };
    
    // Função para mostrar ajuda do admin
    window.showAdminHelp = function() {
        console.log(`
=== PAINEL ADMINISTRATIVO ===

📊 FUNÇÕES PRINCIPAIS:
• showAnalytics() - Analytics completos
• showQuickStats() - Resumo rápido
• resetAllAnalytics() - Resetar dados
• exportAllAnalytics() - Exportar dados
• simulateAnalytics() - Simular dados (teste)

🎯 COMO FUNCIONA:
• Cada visita ao site é contabilizada automaticamente
• Cada visualização de produto é contada
• Cada clique em produto é registrado
• Os dados ficam salvos no navegador
• Só você pode ver essas estatísticas

⌨️ ATALHOS:
• Ctrl/Cmd + A: Mostrar analytics
• Ctrl/Cmd + Q: Resumo rápido
• Ctrl/Cmd + E: Exportar dados

🔒 PRIVACIDADE:
• Os usuários NÃO veem os números
• Os dados são salvos localmente
• Você pode exportar para backup
• Sistema totalmente discreto
        `);
    };
    
    // Atalhos de teclado para admin
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K para focar na busca
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape para limpar busca
        if (e.key === 'Escape' && searchInput.value.trim()) {
            clearSearch();
        }
        
        // Ctrl/Cmd + A para mostrar analytics completos
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            e.preventDefault();
            showAnalytics();
        }
        
        // Ctrl/Cmd + Q para resumo rápido
        if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
            e.preventDefault();
            showQuickStats();
        }
        
        // Ctrl/Cmd + E para exportar analytics
        if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
            e.preventDefault();
            exportAllAnalytics();
        }
    });
    
    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    console.log('Sistema de produtos carregado com sucesso!');
    console.log('Produtos disponíveis:', productsData.products.length);
});
