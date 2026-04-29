// ================= DATA MOBIL =================
const cars = [
    {
        name: "Toyota Avanza",
        price: 300000,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500"
    },
    {
        name: "Honda Brio",
        price: 250000,
        rating: 4.2,
        img: "https://images.unsplash.com/photo-1603386329225-868f9c7b7f0c?w=500"
    },
    {
        name: "Pajero Sport",
        price: 700000,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500"
    }
];

// ================= ELEMENT =================
const carGrid = document.getElementById("carGrid");
const historyList = document.getElementById("historyList");

// ================= TAMPILKAN MOBIL =================
function displayCars(carList) {
    carGrid.innerHTML = "";

    carList.forEach(car => {
        carGrid.innerHTML += `
        <div class="car-item">
            <img src="${car.img}">
            <h3>${car.name}</h3>
            <p>Rp ${car.price}/day</p>
            <p>⭐ ${car.rating}</p>
            <button onclick="openModal('${car.name}')">Book Now</button>
        </div>`;
    });
}

// tampilkan awal
displayCars(cars);

// ================= SEARCH =================
function searchCar() {
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;

    if (!start || !end) {
        alert("Pilih tanggal dulu!");
        return;
    }

    const filteredCars = cars.filter(car => car.price <= 500000);
    displayCars(filteredCars);
}

// ================= MODAL =================
function openModal(car) {
    document.getElementById("bookingModal").style.display = "flex";
    document.getElementById("carName").innerText = car;
}

function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

// ================= BOOKING =================
function confirmBooking() {
    const name = document.getElementById("userName").value;
    const car = document.getElementById("carName").innerText;

    if (!name) {
        alert("Masukkan nama!");
        return;
    }

    const booking = {
        name,
        car,
        date: new Date().toLocaleString()
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking berhasil!");
    closeModal();
    loadHistory();
}

// ================= HISTORY =================
function loadHistory() {
    if (!historyList) return;

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    historyList.innerHTML = "";

    bookings.forEach(b => {
        historyList.innerHTML += `<li>${b.name} - ${b.car} - ${b.date}</li>`;
    });
}

loadHistory();

// ================= DARK MODE =================
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}