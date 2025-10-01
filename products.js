// Sistema de gerenciamento de produtos
const productsData = {
    products: [
        {
            id: 1,
            number: "001",
            title: "Mini Umidificador Difusor Aromatizador Egg",
            image: "images/ACD 001.png",
            affiliateLink: "https://s.shopee.com.br/6prjQWfUNE?share_channel_code=1",
            keywords: ["marketing", "digital", "curso", "vendas", "online"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 2,
            number: "002", 
            title: "Manta Brilha No Escuro Para Bebê",
            image: "images/ACD 002.png",
            affiliateLink: "https://s.shopee.com.br/9zolZiXfxc",
            keywords: ["ebook", "empreendedorismo", "negócios", "startup", "empresário"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 3,
            number: "003",
            title: "Espelho Redondo Lapidado Led",
            image: "images/ACD 003.png",
            affiliateLink: "https://s.shopee.com.br/10twrYN2t8",
            keywords: ["template", "apresentação", "powerpoint", "slides", "design"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 4,
            number: "004",
            title: "Prateleiras Suporte Com Alto Adesivos",
            image: "images/ACD 004.png",
            affiliateLink: "https://s.shopee.com.br/6prjovJsVk",
            keywords: ["software", "gestão", "produtividade", "ferramenta", "empresa"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 5,
            number: "005",
            title: "Relógio Despertador Digital De Mesa",
            image: "images/ACD 005.png",
            affiliateLink: "https://s.shopee.com.br/9pVLPmIzne",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        }
    ]
};

// Função para adicionar novos produtos (para facilitar o gerenciamento)
function addProduct(number, title, image, affiliateLink, keywords = []) {
    const newId = Math.max(...productsData.products.map(p => p.id)) + 1;
    const newProduct = {
        id: newId,
        number: number.toString().padStart(3, '0'),
        title: title,
        image: image,
        affiliateLink: affiliateLink,
        keywords: keywords,
        clickCount: 0,
        viewCount: 0
    };
    productsData.products.push(newProduct);
    return newProduct;
}

// Função para editar produtos existentes
function editProduct(id, updates) {
    const productIndex = productsData.products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        productsData.products[productIndex] = { ...productsData.products[productIndex], ...updates };
        return productsData.products[productIndex];
    }
    return null;
}

// Função para remover produtos
function removeProduct(id) {
    const productIndex = productsData.products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        return productsData.products.splice(productIndex, 1)[0];
    }
    return null;
}

// Função para buscar produtos
function searchProducts(query) {
    if (!query || query.trim() === '') {
        return productsData.products;
    }
    
    const searchTerm = query.toLowerCase().trim();
    
    return productsData.products.filter(product => {
        // Busca por número
        if (product.number.includes(searchTerm)) {
            return true;
        }
        
        // Busca por título
        if (product.title.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Busca por palavras-chave
        if (product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))) {
            return true;
        }
        
        return false;
    });
}

// Sistema de Analytics Privado (só para admin)
let siteAnalytics = {
    totalVisits: 0,
    uniqueVisitors: 0,
    totalClicks: 0,
    lastVisit: null,
    visitHistory: []
};

// Função para incrementar cliques (invisível para usuários)
function incrementClickCount(productId) {
    const product = productsData.products.find(p => p.id === productId);
    if (product) {
        product.clickCount++;
        siteAnalytics.totalClicks++;
        saveAnalyticsData();
        return product.clickCount;
    }
    return 0;
}

// Função para incrementar visualizações (invisível para usuários)
function incrementViewCount(productId) {
    const product = productsData.products.find(p => p.id === productId);
    if (product) {
        product.viewCount++;
        return product.viewCount;
    }
    return 0;
}

// Função para registrar visita ao site
function registerSiteVisit() {
    siteAnalytics.totalVisits++;
    siteAnalytics.lastVisit = new Date().toISOString();
    
    // Verificar se é um visitante único (simplificado)
    const sessionId = sessionStorage.getItem('affiliateSessionId');
    if (!sessionId) {
        siteAnalytics.uniqueVisitors++;
        sessionStorage.setItem('affiliateSessionId', Date.now().toString());
    }
    
    siteAnalytics.visitHistory.push({
        timestamp: new Date().toISOString(),
        sessionId: sessionId || Date.now().toString()
    });
    
    // Manter apenas os últimos 100 registros
    if (siteAnalytics.visitHistory.length > 100) {
        siteAnalytics.visitHistory = siteAnalytics.visitHistory.slice(-100);
    }
    
    saveAnalyticsData();
}

// Função para obter estatísticas completas (só admin)
function getFullAnalytics() {
    const topClickedProducts = productsData.products
        .filter(product => product.clickCount > 0)
        .sort((a, b) => b.clickCount - a.clickCount)
        .slice(0, 10);
    
    const topViewedProducts = productsData.products
        .filter(product => product.viewCount > 0)
        .sort((a, b) => b.viewCount - a.viewCount)
        .slice(0, 10);
    
    return {
        siteStats: {
            totalVisits: siteAnalytics.totalVisits,
            uniqueVisitors: siteAnalytics.uniqueVisitors,
            totalClicks: siteAnalytics.totalClicks,
            lastVisit: siteAnalytics.lastVisit,
            conversionRate: siteAnalytics.totalVisits > 0 ? 
                ((siteAnalytics.totalClicks / siteAnalytics.totalVisits) * 100).toFixed(2) : 0
        },
        topClickedProducts,
        topViewedProducts,
        allProducts: productsData.products.map(product => ({
            id: product.id,
            number: product.number,
            title: product.title,
            clickCount: product.clickCount,
            viewCount: product.viewCount,
            clickRate: product.viewCount > 0 ? 
                ((product.clickCount / product.viewCount) * 100).toFixed(2) : 0
        }))
    };
}

// Função para salvar dados de analytics
function saveAnalyticsData() {
    try {
        const analyticsData = {
            siteAnalytics,
            productsData: productsData.products.map(product => ({
                id: product.id,
                clickCount: product.clickCount,
                viewCount: product.viewCount
            }))
        };
        localStorage.setItem('affiliateAnalytics', JSON.stringify(analyticsData));
    } catch (error) {
        console.error('Erro ao salvar analytics:', error);
    }
}

// Função para carregar dados de analytics
function loadAnalyticsData() {
    try {
        const savedData = localStorage.getItem('affiliateAnalytics');
        if (savedData) {
            const analyticsData = JSON.parse(savedData);
            
            // Restaurar analytics do site
            if (analyticsData.siteAnalytics) {
                siteAnalytics = { ...siteAnalytics, ...analyticsData.siteAnalytics };
            }
            
            // Restaurar contadores dos produtos
            if (analyticsData.productsData) {
                analyticsData.productsData.forEach(savedProduct => {
                    const product = productsData.products.find(p => p.id === savedProduct.id);
                    if (product) {
                        product.clickCount = savedProduct.clickCount || 0;
                        product.viewCount = savedProduct.viewCount || 0;
                    }
                });
            }
        }
    } catch (error) {
        console.error('Erro ao carregar analytics:', error);
    }
}

// Função para resetar analytics (só admin)
function resetAnalytics() {
    siteAnalytics = {
        totalVisits: 0,
        uniqueVisitors: 0,
        totalClicks: 0,
        lastVisit: null,
        visitHistory: []
    };
    
    productsData.products.forEach(product => {
        product.clickCount = 0;
        product.viewCount = 0;
    });
    
    saveAnalyticsData();
    return true;
}

// Função para exportar analytics
function exportAnalytics() {
    const analytics = getFullAnalytics();
    const exportData = {
        ...analytics,
        exportDate: new Date().toISOString(),
        exportType: 'affiliate_analytics'
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    return exportData;
}

// Carregar dados salvos ao inicializar
loadAnalyticsData();

// Registrar visita inicial
registerSiteVisit();

// Exportar para uso global
window.productsData = productsData;
window.addProduct = addProduct;
window.editProduct = editProduct;
window.removeProduct = removeProduct;
window.searchProducts = searchProducts;
window.incrementClickCount = incrementClickCount;
window.incrementViewCount = incrementViewCount;
window.getFullAnalytics = getFullAnalytics;
window.resetAnalytics = resetAnalytics;
window.exportAnalytics = exportAnalytics;
