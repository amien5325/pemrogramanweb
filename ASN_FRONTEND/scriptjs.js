// ================= DATA Bengkel =================
const services = [
    {
        name: "Servis Ringan",
        price: 80000,
        rating: 4.5,
        type: "ringan",
        img: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=500&auto=format"
    },
    {
        name: "Ganti Oli",
        price: 50000,
        rating: 4.7,
        type: "oli",
        img: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=500&auto=format"
    },
    {
        name: "Servis Komplit",
        price: 150000,
        rating: 4.9,
        type: "full",
        img: "https://images.unsplash.com/photo-1600661653561-629509216228?w=500&auto=format"
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