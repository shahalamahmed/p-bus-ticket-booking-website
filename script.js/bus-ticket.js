
    //scrolling to ticket section
    document.getElementById('buy-tickets').addEventListener('click', function () {
        document.getElementById('bus-ticket').scrollIntoView({ behavior: 'smooth' });
    })

function buyTicket(alpha) {
    let seatNumber = alpha.currentTarget.innerHTML;
    let seatPrice = 550;
    const htmlString = `
    <div class="grid grid-cols-3 mt-5">
    <div>
    <p>${seatNumber}</p>
    </div> 
    <div>
    <p>Economy</p>
    </div>
    <div>
    <p>${seatPrice}</p>
    </div>
    </div>
   `;

    const tempContainers = document.createElement('div');
    tempContainers.innerHTML = htmlString;
    document.getElementById('seat-table').append(...tempContainers.children);

    // select button
    const buttons = document.querySelectorAll('.button-seat');
    let testArray = [];
    let buttonClickCount = 0;
    for (const button of buttons) {
        button.addEventListener('click', function () {

            button.style.backgroundColor = 'orange';
            // validation for 4 button
            buttonClickCount++;
            if (buttonClickCount === 4) {
                for (const button of buttons) {
                    button.disabled = true;
                }

            }
        });



    }
    const totalSeatElement = document.getElementById('total-seat');
    const totalSeatTexts = totalSeatElement.innerText;
    const newCurrentSeat = parseInt(totalSeatTexts);
    const remainingSeats = newCurrentSeat - 1;
    totalSeatElement.innerText = remainingSeats;
    
    const currentSeatElement = document.getElementById('seat-numbers');
    const currentSeatTexts = currentSeatElement.innerText;
    const currentSeat = parseInt(currentSeatTexts);
    const finalSeat = currentSeat + 1;
    currentSeatElement.innerText = finalSeat;


    let totalPrice = 550 * finalSeat;
    document.getElementById('total-price').innerHTML = totalPrice;
    document.getElementById('grand-total-price').innerHTML = totalPrice;

}

function onClickApplyCoupon() {
    const couponCode1 = "NEW15";
    const couponCode2 = "Couple 20";
    const couponCode = document.getElementById('coupon-code').value;
    const totalPriceString = document.getElementById('total-price').innerHTML;
    const totalPrice = parseInt(totalPriceString);



    if (couponCode === couponCode1) {
        document.getElementById('grand-total-price').innerHTML = totalPrice - 55;
        const couponCodeSection = document.getElementById('coupon-code-section');
        couponCodeSection.classList.add('hidden');
    }
    else if (couponCode === couponCode2) {
        document.getElementById('grand-total-price').innerHTML = totalPrice - 110;
        const couponCodeSection = document.getElementById('coupon-code-section');
        couponCodeSection.classList.add('hidden');

    }
}

const numberInput = document.getElementById('phone-number');
const nextButton = document.getElementById('next-button');

numberInput.addEventListener('input', function () {
    if (!isNaN(numberInput.value.trim()) && numberInput.value.trim() !== '') {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
});


const nextBtn = document.getElementById('next-button');
const modal = document.getElementById('my_modal_5');
nextBtn.addEventListener('click', function () {
    modal.showModal();
});



(function () {
    const buttons = document.querySelectorAll('.button-seat');

    let buttonClickCount = 0;
    for (const button of buttons) {
        button.addEventListener('click', function () {

            button.style.backgroundColor = 'orange';
            
            buttonClickCount++;
            if (buttonClickCount === 4) {
                for (const btn of buttons) {
                    btn.disabled = true;
                }

            }
        });
    }
})();