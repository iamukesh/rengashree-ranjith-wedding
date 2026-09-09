// ===== EDIT YOUR WEDDING DETAILS HERE =====
const WEDDING_DATE = '2026-11-15T09:30:00+05:30';

const timerEls = {
  days: document.getElementById('days'), hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'), seconds: document.getElementById('seconds')
};
function tick(){
  const diff = new Date('2026-11-15T09:30:00+05:30').getTime() - Date.now();
  if(diff <= 0){ Object.values(timerEls).forEach(x=>x.textContent='00'); return; }
  const d=Math.floor(diff/86400000), h=Math.floor(diff/3600000)%24, m=Math.floor(diff/60000)%60, s=Math.floor(diff/1000)%60;
  timerEls.days.textContent=String(d).padStart(2,'0'); timerEls.hours.textContent=String(h).padStart(2,'0');
  timerEls.minutes.textContent=String(m).padStart(2,'0'); timerEls.seconds.textContent=String(s).padStart(2,'0');
}
tick(); setInterval(tick,1000);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('rsvpForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  document.getElementById('formMessage').textContent=`Thank you, ${data.get('name')}! Your RSVP has been recorded for this demo.`;
  e.currentTarget.reset();
});

// Optional music: place your music file in the same folder and change the path below.
const music=document.getElementById('bgMusic');
// music.src='music.mp3';
document.getElementById('musicToggle').addEventListener('click',async()=>{
  if(!music.src){alert('Add your music file as music.mp3 and uncomment the music.src line in script.js.');return;}
  if(music.paused){await music.play();}else{music.pause();}
});
