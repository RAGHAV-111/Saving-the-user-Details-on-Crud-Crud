function addExpense() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (name && email && phoneNumber) {
        axios
            .post('https://crudcrud.com/api/bdd99c4da68043df8192ae03862c81b9/appointmentData', {
                "name": name,
                "email": email,
                "phoneNumber": phoneNumber
            })
            .then((response) => {
                console.log(`Expense added with ID: ${response.data._id}`);
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phoneNumber').value = '';
                displayExpenses();
            })
            .catch((error) => {
                console.log(`Error adding expense: ${error}`);
            });
    }
}
