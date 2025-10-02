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
        },
        {
            id: 6,
            number: "006",
            title: "Caixa de som Bluetooth Portátil Com Led RGB",
            image: "images/ACD 006.png",
            affiliateLink: "https://s.shopee.com.br/5L2wOtJafk",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 7,
            number: "007",
            title: "Jogo de Lençol 03 Peças 400 Fios",
            image: "images/ACD 007.png",
            affiliateLink: "https://s.shopee.com.br/3AyRp2kbce",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 8,
            number: "008",
            title: "Camiseta Básica Infantil",
            image: "images/ACD 008.png",
            affiliateLink: "https://s.shopee.com.br/VxgeGMnSa",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 9,
            number: "009",
            title: "Kit 10 Marmita Potes 800ml",
            image: "images/ACD 009.png",
            affiliateLink: "https://s.shopee.com.br/9fBvZDGH4K",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 10,
            number: "010",
            title: "Calça Jeans Jogger Infantil",
            image: "images/ACD 010.png",
            affiliateLink: "https://s.shopee.com.br/BKqFqnwob",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 11,
            number: "011",
            title: "Luz De Rua Solar Impermeável Sensor",
            image: "images/ACD 11.png",
            affiliateLink: "https://s.shopee.com.br/4Aqz1KMl2S",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 12,
            number: "012",
            title: "Air Fryer Fritadeira Elétrica sem Óleo",
            image: "images/ACD 12.png",
            affiliateLink: "https://s.shopee.com.br/40XZlsW5pC",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 13,
            number: "013",
            title: "Computador Gamer Completo",
            image: "images/ACD 13.png",
            affiliateLink: "https://s.shopee.com.br/4fnGWQm93z",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 14,
            number: "014",
            title: "Máquina de Cabelo Dragão Profissional Elétrica",
            image: "images/ACD 14.png",
            affiliateLink: "https://s.shopee.com.br/9pVMgPpYS8",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 15,
            number: "015",
            title: "Escova Secadora Alisador Elétrica",
            image: "images/ACD 15.png",
            affiliateLink: "https://s.shopee.com.br/7AUbYtKwa9",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 16,
            number: "016",
            title: "Jogo De Panelas Antiaderente 10 Peças",
            image: "images/ACD 16.png",
            affiliateLink: "https://s.shopee.com.br/7pkIJ0qInY",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 17,
            number: "017",
            title: "Prateleira Suspensa Uno Line paraDecoração",
            image: "images/ACD 17.png",
            affiliateLink: "https://s.shopee.com.br/7fQs6tUURW",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 18,
            number: "018",
            title: "Lustre De Teto Nórdico De Luxo 3 Cores",
            image: "images/ACD 18.png",
            affiliateLink: "https://s.shopee.com.br/8pcpVV5bUS",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 19,
            number: "019",
            title: "Quadro Decorativo Mosaico Leão de Juda Olho Azul",
            image: "images/ACD 19.png",
            affiliateLink: "https://s.shopee.com.br/803iWBlS9C",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 20,
            number: "020",
            title: "Cortina Blackout Para Quarto Sala Cozinha",
            image: "images/ACD 20.png",
            affiliateLink: "https://s.shopee.com.br/1BDONmTpWD",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        {
            id: 21,
            number: "021",
            title: "Placas Ripada Painel Decorativo em Mdf",
            image: "images/ACD 21.png",
            affiliateLink: "https://s.shopee.com.br/2qLchfckp0",
            keywords: ["programação", "código", "desenvolvimento", "tecnologia", "web"],
            clickCount: 0,
            viewCount: 0
        },
        
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
