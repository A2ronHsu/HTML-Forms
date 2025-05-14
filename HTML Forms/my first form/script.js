const textarea = document.getElementById("message");

textarea.addEventListener('input', function(){
   this.style.height = "auto";
   this.style.height = this.scrollHeight + 'px';
})