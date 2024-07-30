const link = document.querySelector("a");
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride."

setTimeout(()=>{
   link.textContent = "Mozilla Developer Network";
   link.href = "https://developer.mozilla.org";
   sect.appendChild(para);


   


},1000)

setTimeout(()=>{
   const text = document.createTextNode(
      " — the premier source for web development knowledge.",
    );

    const linkPara = document.querySelector("p");
    linkPara.appendChild(text);

    para.setAttribute("class", "highlight");


    
},2000)