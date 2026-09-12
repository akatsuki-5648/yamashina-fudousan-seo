(() => {
const progress = document.createElement('div'); progress.className='reading-progress'; progress.setAttribute('aria-hidden','true');document.body.append(progress);
const top=document.createElement('a');top.className='back-top';top.href='#top';top.setAttribute('aria-label','ページの先頭へ');top.textContent='↑';document.body.append(top);
let pending=false;const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--read-progress',max>0?scrollY/max:0);pending=false};
addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});update();
const links=[...document.querySelectorAll('.contents a[href^="#"]')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}}},{rootMargin:'-10% 0px -65% 0px'});document.querySelectorAll('.chapter[id]').forEach(s=>observer.observe(s))}
})();
