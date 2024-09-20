// Show the cash out button

document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.remove('hidden');

    //Hide the add money form
    document.getElementById("add-money-form").classList.add('hidden');
});

// show add money form and hide the cash out form
document.getElementById('button-show-add-money-form').addEventListener('click', function () {
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})