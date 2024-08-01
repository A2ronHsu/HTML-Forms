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

function generatePrimes(){
   let count = 0;
   numberOfPrimes = input.value;
   for(let i = 2; count < numberOfPrimes; i++){
      if(isPrime(i)) {
         primes.textContent += i + " ";
         count++;
         console.table(count,i);
      }
   }
   output.textContent = "finished calculating primes"

}



const generatePrimesbutton = document.querySelector("#generate");
generatePrimesbutton.addEventListener("click", ()=> generatePrimes())

const reload = document.querySelector("#reload");
reload.addEventListener("click", ()=>{
   document.location.reload();
})
