// Fetch products from the json-server API
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        const productTableBody = document.querySelector('#product-table tbody');

        data.forEach(product => {
            
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = product.id;
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            row.appendChild(nameCell);

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = product.description;
            row.appendChild(descriptionCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = `$${product.price}`;
            row.appendChild(priceCell);

            const categoryCell = document.createElement('td');
            categoryCell.textContent = product.category;
            row.appendChild(categoryCell);

            const stockCell = document.createElement('td');
            stockCell.textContent = product.stock;
            row.appendChild(stockCell);

            productTableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
