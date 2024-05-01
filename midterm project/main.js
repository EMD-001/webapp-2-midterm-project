// Fetch items from the API
fetch('https://jsonplaceholder.typicode.com/photos?_limit=50')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.getElementById('items-container');
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <img src="${item.url}" alt="${item.title}">
                <div>
                    <p class="item-title">${item.title}</p>
                    <p>${item.id}</p>
                </div>
            `;
            itemElement.addEventListener('click', () => showDetails(item));
            itemsContainer.appendChild(itemElement);
        });
    });

function showDetails(item) {
    document.getElementById('details-title').innerText = item.title;
    document.getElementById('details-body').innerText = `ID: ${item.id}\nURL: ${item.url}\nThumbnail URL: ${item.thumbnailUrl}`;
    document.getElementById('items-container').classList.remove('show');
    document.getElementById('details-container').classList.add('show');
}

function showDetails(item) {
 window.location.href = `item-details.html?id=${item.id}`;
}

// Function to go back to the items list
function goBack() {
    document.getElementById('details-container').classList.remove('show');
    document.getElementById('items-container').classList.add('show');
}
