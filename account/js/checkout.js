// Variables

const urlParams = new URLSearchParams(window.location.search);

let quantityNum = 1;
const quantityNumBox = document.getElementById('quantity-number');
const quantityAdd = document.getElementById('quantity-add');
const quantityRemove = document.getElementById('quantity-remove');

const cardBox = document.getElementById('card-information');
const cardButton = document.getElementById('card-checkout-button');

  // daypass infos (2)
  const dayPassName = 'Day Pass';
  const dayPassAllowedQuantity = 3;
  const dayPassPrice = 1.99;
  const dayPassType = 'one-time';

  // codypass infos (3)
  const codyPassName = 'CodyPass';
  const codyPassAllowedQuantity = 1;
  const codyPassPrice = 14.99;
  const codyPassType = 'month';

  let membershipId = urlParams.get('membership');
  // freepass = 1
  // daypass = 2
  // codypass = 3
  // classic pass = 4

function handleRadioClick() {
  if (document.getElementById('cardRadioButton').checked) {
    cardBox.style.display = 'block';
    cardButton.style.display = 'block';
  } else {
    cardBox.style.display = 'none';
    cardButton.style.display = 'none';
  }
}

const radioButtons = document.querySelectorAll(
  'input[name="payment-method"]',
);
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});

function handleSelectChange() {
    const selectedCountry = document.querySelector('select[name="country"]').value;
    if (selectedCountry === 'United States') {
        cardBox.style.display = 'block';
        cardButton.style.display = 'block';
    } else {
        cardBox.style.display = 'none';
        cardButton.style.display = 'none';
    }
}

const countrySelect = document.querySelector('select[name="country"]');
//countrySelect.addEventListener('change', handleSelectChange);









function loadPaymentInfo(){

  if (membershipId == 2){
    document.getElementById('membership-name').innerHTML = dayPassName;
    document.getElementById('total-cost').innerHTML = dayPassPrice;
    document.getElementById('payment-type').innerHTML = dayPassType;
  }

  if (membershipId == 3){
    document.getElementById('membership-name').innerHTML = codyPassName;
    document.getElementById('total-cost').innerHTML = codyPassPrice;
    document.getElementById('payment-type').innerHTML = codyPassType;
    quantityAdd.className = 'ml-2 text-xl text-gray-400';
    quantityAdd.setAttribute('disabled', '');
  }

}

function addQuantity(){

  let maxQuantity;
  
  if (membershipId == 2){
    maxQuantity = dayPassAllowedQuantity;
  } else if (membershipId == 3){
    maxQuantity = codyPassAllowedQuantity;
  } else {
    console.error('No membership ID specified, could not get maximum allowed quantity.');
  }

  if (quantityNum !== maxQuantity){
    quantityNum = quantityNum + 1;
    quantityNumBox.innerHTML = quantityNum;
    quantityRemove.className = 'mr-2 text-xl text-indigo-400 hover:text-indigo-300';
    quantityRemove.removeAttribute('disabled', '');
    if (quantityNum == maxQuantity){
      quantityAdd.className = 'ml-2 text-xl text-gray-400';
      quantityAdd.setAttribute('disabled', '');
    }
  } else {
    quantityAdd.className = 'ml-2 text-xl text-gray-400';
    quantityAdd.setAttribute('disabled', '');
  }

}

function removeQuantity(){

  let minQuantity = 1;

  if (quantityNum !== minQuantity){
    quantityNum = quantityNum - 1;
    quantityNumBox.innerHTML = quantityNum;
    quantityAdd.className = 'ml-2 text-xl text-indigo-400 hover:text-indigo-300';
    quantityAdd.removeAttribute('disabled', '');
    if (quantityNum == minQuantity){
      quantityRemove.className = 'mr-2 text-xl text-gray-400';
      quantityRemove.setAttribute('disabled', '');
    }
  } else {
    quantityRemove.className = 'mr-2 text-xl text-gray-400';
    quantityRemove.setAttribute('disabled', '');
  }

}

loadPaymentInfo();