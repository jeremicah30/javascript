document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

//Load Customers

function loadCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(e) {
        if (this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            const output  = `
                <li>ID:${customer.id}</li>
                <li>ID:${customer.name}</li>
                <li>ID:${customer.company}</li>
                <li>ID:${customer.phone}</li>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
};

//Load Customers

function loadCustomers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(e) {
        if (this.status === 200) {
            // console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer){
                output  += `
                <li>ID:${customer.id}</li>
                <li>ID:${customer.name}</li>
                <li>ID:${customer.company}</li>
                <li>ID:${customer.phone}</li>
                `;
            })

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}