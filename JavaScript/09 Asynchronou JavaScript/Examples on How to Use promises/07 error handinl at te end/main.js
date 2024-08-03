async function fetchFunction(){
   const response = await fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);
      
   if(!response.ok){
      throw new Error ( `HTTP error: ${response.status}`);
   }

   const data = await response.json();
   return data;

}

fetchFunction().then(data=>console.log(data)).catch(error=>console.log(`cant fetch data: ${error}`));