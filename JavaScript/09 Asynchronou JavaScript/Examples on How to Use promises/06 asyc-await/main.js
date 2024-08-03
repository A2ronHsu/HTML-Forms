async function fetchFunction(){
   try{
      const response = await fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);
      
      if(!response.ok){
         throw new Error ( `HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data[0].name);
      return data[1].name;
   }catch(error){
      console.log(`Could not get product: ${error}`)
   }
}

fetchFunction().then(data=>console.log(data));