const getCategorias = async () => {
  await fetch('https://my-json-server.typicode.com/germancrc/dashboardEjem/categories')
    .then((response) => {
      return response.json();
    })
    .then((categories) => {
      console.log(categories);
      
        function buildTable(catData){
        const table = document.getElementById('categoryData');

        for(let i = 0; i < catData.length; i++){
          let row = `
              <tr>
              <td>${catData[i].id}</td>
              <td>${catData[i].name}</td>
              <td>${catData[i].description}</td>
              </tr>`

              table.innerHTML += row;

        }
       }

       buildTable(categories);
  })
    .catch(error => {
      //handle error
    });;
};

getCategorias();



 // PRODUCTOS
 const getProductos = async () => {
    await fetch('https://my-json-server.typicode.com/germancrc/dashboardEjem/products')
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        console.log(products);
        
          function buildTable(prodData){
          const table = document.getElementById('productData');

          for(let i = 0; i < prodData.length; i++){
            let row = `
                <tr>
                <td>${prodData[i].id}</td>
                <td>${prodData[i].name}</td>
                <td>${prodData[i].price}</td>
                <td>${prodData[i].description}</td>
                <td>${prodData[i].categoryId}</td>
                </tr>`

                table.innerHTML += row;

          }
         }

         buildTable(products);
    })
      .catch(error => {
        //handle error
      });;
  };
  
  getProductos();