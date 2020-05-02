var logo = document.querySelectorAll("#logo3 path");

for (let i = 0; i < logo.length; i++) {
   console.log(`Letter ${i}: ${logo[i].getTotalLength()}`);

}