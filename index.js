console.log(process.argv);

////const partes= endpoint.split('/');
//console.log(partes);

const[,,method,endpoint, ...args]=process.argv;
//console.log(`Method: ${method}`);
//console.log(`Endpoint: ${endpoint}`);



//console.log(endpoint.includes("/"));

//console.log(args);


const url = 'https://fakestoreapi.com/' + endpoint;

switch (method) {
  case 'GET':
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
    break;

  case 'POST':
  const [title, price, category] = args;
  const producto = {
    title,
    price,
   category
  };
    fetch('https://fakestoreapi.com/products', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(producto)
    })
     .then(response => response.json())
     .then(data => console.log(data));
    break;

  case 'DELETE':
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log("El producto eliminado:");
        console.log(data);
      });
    break;

  default:
    console.log("Método no identificado. Por favor utilize GET, POST o DELETE.");
    break;
}