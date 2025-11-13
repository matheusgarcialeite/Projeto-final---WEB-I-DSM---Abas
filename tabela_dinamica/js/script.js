let allTributosData = []; 

function renderTable(data) {
    const tbody = document.getElementById('tbody-tributos');
    const noResults = document.getElementById('no-results');
    tbody.innerHTML = ''; 

    if (data.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.categoria}</td>
                <td>${item.tributos_antes}</td>
                <td>${item.tributos_depois}</td>
            `;
            tbody.appendChild(tr);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    

    const dadosCarregados = [
        {
          "categoria": "Produtos e Serviços (Regra Geral)",
          "tributos_antes": "PIS, Cofins, IPI, ICMS, ISS",
          "tributos_depois": "CBS (Federal) e IBS (Estadual/Municipal)"
        },
        {
          "categoria": "Cesta Básica",
          "tributos_antes": "PIS, Cofins, ICMS (com isenções/reduções)",
          "tributos_depois": "Alíquota Zero (Isenção total)"
        },
        {
          "categoria": "Produtos prejudiciais à saúde (Ex: cigarros)",
          "tributos_antes": "PIS, Cofins, IPI, ICMS",
          "tributos_depois": "CBS, IBS e Imposto Seletivo (IS)"
        },
        {
          "categoria": "Serviços de Educação e Saúde",
          "tributos_antes": "PIS, Cofins, ISS",
          "tributos_depois": "Alíquota reduzida em 60% (CBS e IBS)"
        },
        {
          "categoria": "Produtos da Zona Franca de Manaus",
          "tributos_antes": "IPI (com isenção)",
          "tributos_depois": "IPI mantido para garantir competitividade"
        },
        {
          "categoria": "Combustíveis e Lubrificantes",
          "tributos_antes": "PIS, Cofins, CIDE, ICMS (regimes especiais)",
          "tributos_depois": "Regime monofásico com alíquotas específicas"
        }
    ];

    allTributosData = dadosCarregados; 
    renderTable(allTributosData); 
});

document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const filteredData = allTributosData.filter(item => {
        return item.categoria.toLowerCase().includes(searchTerm) ||
               item.tributos_antes.toLowerCase().includes(searchTerm) ||
               item.tributos_depois.toLowerCase().includes(searchTerm);
    });

    renderTable(filteredData);
});


document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    renderTable(allTributosData); 
});