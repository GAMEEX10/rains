const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = '1010101010101010101010101010101';
const latin = 'AHIKRS';
/*const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; */
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontsize = 16;
const columns = canvas.width/fontsize;
const rainDrops =[];
for (let x =0; x < columns; x++){
    rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle ='rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.fillStyle = 'red';
  /*context.fillStyle = '#0F0'; */
  context.font = fontsize + 'px monospace';
    
for (let i = 0; i < rainDrops.length; i++)
{
   const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length)); 
   context.fillText(text, i*fontsize, rainDrops[i]*fontsize);
   if ((rainDrops[i]*fontsize > canvas.height) && (Math.random() > 0.975)){
         rainDrops[i] = 0;
   }
   rainDrops[i]++;
}
};

setInterval(draw, 30);















