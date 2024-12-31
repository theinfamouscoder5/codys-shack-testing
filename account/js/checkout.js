const cardBox = document.getElementById('card-information');
const cardButton = document.getElementById('card-checkout-button');

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
countrySelect.addEventListener('change', handleSelectChange);