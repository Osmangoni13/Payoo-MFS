//add money to the account

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    //prevent page relode after login
    event.preventDefault();
    //step-2: get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    //get pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;

    //verify pin number
    //wrong way to valdate pin number,it's uses for learning purpose/
    if (pinNumberInput === '1234') {
        console.log('adding money to your account')
        //get the current blance
        const blance = document.getElementById("account-blance").innerText;
        console.log(blance)

        //step-5: addmoneyInput with blance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const blanceNumber = parseFloat(blance);
        const newBlance = addMoneyNumber + blanceNumber;
        console.log(typeof newBlance)

        // step-6: Update the blance in the UI/DOM
        document.getElementById('account-blance').innerText = newBlance;
    } else {
        alert('Faild to add Money! Please try again!')
    }


})