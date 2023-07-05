const order1 = new Order('Uova', 12, 2)

const order2 = new Order('Pasta', 5, 1.50)

const order3 = new Order('Computer', 2, 600)

const order4 = new Order('Automobile', 1, 10000)

const order5 = new Order('Telefono', 1, 200)

const client1 = new Client('Steve', 'Stephenson', 29/12/1993, 'male', 'age da inserire con get', 'via Maragliano, 30', [order1, order2, order3]);

const client2 = new Client('Josh', 'Josherson', 15/10/1984, 'male', 'age da inserire con get', 'via Papigliano, 3', [order4]);

const client3 = new Client('Mary', 'Maryson', 30/11/1980, 'female', 'age da inserire con get', 'via Castigliano, 10', [order5]);

//client1.addOrder(order1)
//client1.addOrder(order2)
//client1.addOrder(order3)
//client2.addOrder(order4)
//client3.addOrder(order5)

const employee1 = new Employee('Immanuel', 'Kant', 18/0o5/2000, 'male', 'age da inserire con get', 'via Gramsci, 2', 'Gastronomia', [client1, client2, client3]);

//employee.addClient(client1);
//employee.addClient(client2);


//console.log(employee.bestClient);

console.log(Order.toString(client2));

