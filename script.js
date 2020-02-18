const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//the plus sign changes its type from string to number
let ticketPrice = +movieSelect.value; 

//Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //Copy selected seats into arr, Map through arr, return a new arr indexes
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat)
    })

    localStorage.setItem('namegit ')
     
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', function(e){
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})