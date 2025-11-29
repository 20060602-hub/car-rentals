const carInventory = [
    { id: 1, make: 'Toyota', model: 'Corolla', type: 'Sedan', pricePerDay: 45, image: 'corolla.jpg' },
    { id: 2, make: 'Honda', model: 'CRV', type: 'SUV', pricePerDay: 70, image: 'crv.jpg' },
    { id: 3, make: 'Tesla', model: 'Model 3', type: 'Electric', pricePerDay: 95, image: 'model3.jpg' },
    { id: 4, make: 'Ford', model: 'Mustang', type: 'Sport', pricePerDay: 120, image: 'mustang.jpg' }
];
const carListContainer = document.getElementById('car-list-container');
const rentalForm = document.getElementById('rental-form');


function displayCars(carsToDisplay) {
    // Clear any previous content in the container
    carListContainer.innerHTML = '';

    if (carsToDisplay.length === 0) {
        carListContainer.innerHTML = '<p>No cars found matching your criteria.</p>';
        return;
    }

    carsToDisplay.forEach(car => {
    
        const carCard = document.createElement('div');
        carCard.classList.add('car-card'); 

        
        carCard.innerHTML = `
            <h3>${car.make} ${car.model}</h3>
            <p>Type: ${car.type}</p>
            <p class="price">$${car.pricePerDay} / day</p>
            <button class="rent-button" data-car-id="${car.id}">Rent Now</button>
        `;

        
        carListContainer.appendChild(carCard);
    });
}

rentalForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    console.log('Search button clicked! Dates/Location captured.');
    
    displayCars(carInventory);
});


document.addEventListener('DOMContentLoaded', () => {
    
    carListContainer.innerHTML = '';
    
    
    displayCars(carInventory);
});
