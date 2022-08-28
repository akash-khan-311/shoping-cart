

function UpdateCaseInput(product, price, isIncrase) {
    const caseInput = document.getElementById(product + '-input');
    let CaseNum = caseInput.value

    if (isIncrase == true) {
        CaseNum = parseInt(CaseNum) + 1;

    } else if (CaseNum > 0) {
        CaseNum = parseInt(CaseNum) - 1;
    }
    caseInput.value = CaseNum;
    // Update Case Price Total 
    const casePrice = document.getElementById(product + '-price');
    casePrice.innerText = CaseNum * price

    calculateTotal();
}



function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-input');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// add evem on phone product
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    UpdateCaseInput('phone', 1229, true);
})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    UpdateCaseInput('phone', 1229, false);
});





// Add even on case product

document.getElementById('case-plus-btn').addEventListener('click', function () {
    UpdateCaseInput('case', 59, true);
})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    UpdateCaseInput('case', 59, false);
})