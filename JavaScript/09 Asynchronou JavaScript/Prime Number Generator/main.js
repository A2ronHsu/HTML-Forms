const input = document.querySelector("#quota");
const primes = document.querySelector("#primes");
const output = document.querySelector("#output");

let numberOfPrimes = +input.value

function isPrime(num){
   for (let i = Math.sqrt(num).toFixed(0); i > 1; i--){
      if( num%i == 0 ) return false
   }
   return true;
}

let primesPromise= ()=> new Promise(resolve=>{
   numberOfPrimes = +input.value
   let count = 0;
   let result= "";
   let i = 2;
   setInterval(()=>{
      let breakCount = count + 100;
      for(i; count<breakCount && count < numberOfPrimes;i++){
         if(isPrime(i)) {
            result += i + " ";
            count++;
            console.log(count,i);
            
         };
      }
      if(count == numberOfPrimes) resolve(result);
   },100)
});

async function generatePrimes(){
   primes.textContent = "calculating";
   primesPromise()
   .then((result)=>{
      primes.textContent += result;
   })
   .then(()=>output.textContent = "finished calculating primes");
}

const generatePrimesbutton = document.querySelector("#generate");
generatePrimesbutton.addEventListener("click", generatePrimes)

const reload = document.querySelector("#reload");
reload.addEventListener("click", ()=>{
   document.location.reload();
})
