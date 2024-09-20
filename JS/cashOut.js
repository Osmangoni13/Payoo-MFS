document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash-out-pin').value;
    console.log(cashOut, pinNumber)
    //Wrong way to verify pin number
    if (pinNumber === '1234') {
        const blance = document.getElementById('account-blance').innerText;
        const blanceNumber = parseFloat(blance);
        // Reduce the blance
        const newBlance = blanceNumber - cashOutNumber;
        // Update the UI
        document.getElementById('account-blance').innerText = newBlance;
    } else {
        alert('Faild to Cash Out,PLease try again!')
    }
})