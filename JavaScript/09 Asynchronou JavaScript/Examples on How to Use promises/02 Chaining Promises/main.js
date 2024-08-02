const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

console.log(fetchPromise);

// fetchPromise.then((response)=>{
//    const jsonPromise = response.json();
//    jsonPromise.then((data)=>{
//       console.log(data[0])
//    })
   
   
//    console.log(fetchPromise);
// });

console.log("Started request...");


fetchPromise
   .then(response =>{ 
      console.log(response);
      return response.json()
   })
   .then(data=>{
      console.log(data[0].name);
   })
