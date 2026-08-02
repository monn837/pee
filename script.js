const lock=document.getElementById('lock');
const main=document.getElementById('main');
const music=document.getElementById('music');
const dots=document.querySelectorAll('#dots span');

let value='';

function renderDots(){
  dots.forEach((d,i)=>d.textContent=i<value.length?'●':'');
}

document.querySelectorAll('.pad button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(btn.id==='del'){
      value=value.slice(0,-1);
    }else if(btn.id==='ok'){
      if(value==='2505'){
        lock.style.opacity='0';
        setTimeout(()=>{
          lock.style.display='none';
          main.style.display='block';
          main.style.opacity='0';
          requestAnimationFrame(()=>{
            main.style.transition='opacity .6s';
            main.style.opacity='1';
          });
          if(music){
            music.volume=0.5;
            music.play().catch(()=>{});
          }
        },300);
      }else{
        alert('Password salah!\nHint: tanggal spesial 🤍');
        value='';
      }
    }else{
      if(value.length<4) value+=btn.textContent.trim();
    }
    renderDots();
  });
});

renderDots();