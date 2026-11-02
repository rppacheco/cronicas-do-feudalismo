const dialog = document.querySelector('#detail');
const body = document.querySelector('#dialog-body');
const visited = new Set();
let current = -1;
const nav = document.querySelector('#lugares');
const markers = document.querySelector('#markers');
lugares.forEach((place,i)=>{
  const button = document.createElement('button');
  button.className='place-link';
  button.innerHTML=`<span class="num">${String(i+1).padStart(2,'0')}</span><span>${place.name}</span><span class="arrow" aria-hidden="true">↗</span>`;
  button.dataset.place=place.id;
  button.addEventListener('click',()=>openPlace(i));
  nav.append(button);
  const marker=document.createElement('button');
  marker.className='marker';
  marker.style.left=`${place.x/12}%`;
  marker.style.top=`${place.y/7.2}%`;
  marker.setAttribute('aria-label',`Explorar ${place.name}`);
  marker.dataset.place=place.id;
  marker.innerHTML=`${i+1}<span class="marker-label" aria-hidden="true">${place.name}</span>`;
  marker.addEventListener('click',()=>openPlace(i));
  markers.append(marker);
});
function updateProgress(){
 document.querySelector('#count').textContent=visited.size===8?'8 de 8 · Feudo explorado!':`${visited.size} de 8 lugares explorados`;
 document.querySelector('#progress').style.width=`${visited.size/8*100}%`;
 document.querySelectorAll('[data-place]').forEach(el=>el.classList.toggle('visited',visited.has(el.dataset.place)));
}
function show(html){dialog.classList.remove('orders-dialog','person-dialog');body.innerHTML=html;if(!dialog.open)dialog.showModal();dialog.scrollTop=0;document.querySelector('.close').focus();}
function openPlace(index){
 if (typeof setProjectScreen === 'function' && (document.body.classList.contains('society-view') || document.body.classList.contains('timeline-view') || document.body.classList.contains('people-view'))) setProjectScreen('feudo', false);
 current=index;const p=lugares[index];visited.add(p.id);updateProgress();
 document.querySelectorAll('.place-link').forEach((el,i)=>el.classList.toggle('active',i===index));
 show(`<p class="eyebrow">LUGAR ${String(index+1).padStart(2,'0')} / 08 · ${p.tag}</p><h2 class="modal-title" id="dialog-title">${p.name}</h2><p class="modal-text">${p.text}</p><div class="who"><strong>QUEM ESTAVA AQUI?</strong>${p.who}</div><div class="concept"><strong>${p.term}</strong><br>${p.definition}</div><div class="question"><span>PARA PENSAR</span>${p.question}</div><button class="next" id="next">${visited.size===8?'Voltar ao mapa ✓':'Próximo lugar →'}</button>`);
 document.querySelector('#next').addEventListener('click',()=>{if(visited.size===8){dialog.close();return;}let next=(index+1)%8;while(visited.has(lugares[next].id))next=(next+1)%8;openPlace(next);});
}
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.querySelectorAll('.place-link').forEach(el=>el.classList.remove('active')));
document.querySelector('#reset').addEventListener('click',()=>{visited.clear();current=-1;updateProgress();});
document.querySelector('#about').addEventListener('click',()=>show(`<p class="eyebrow">APRENDER EXPLORANDO</p><h2 class="modal-title" id="dialog-title">Uma janela para o passado.</h2><p class="modal-text">Este projeto foi pensado para o sexto ano do ensino fundamental. Explore oito lugares e observe como terra, trabalho, religião e poder se relacionavam.</p><div class="who"><strong>UM MODELO DIDÁTICO</strong>O mapa reúne características de senhorios da Europa Ocidental entre os séculos XI e XIII. Não representa um lugar real, e seus elementos não existiam da mesma forma em todos os feudos.</div><p class="modal-text">Use os pontos do mapa ou a lista de lugares. No celular, deslize o mapa para os lados. Pelo teclado, use Tab e Enter. Para fechar uma janela, pressione Esc.</p>`));
document.querySelector('#sources').addEventListener('click',()=>show(`<p class="eyebrow">PARA CONTINUAR A PESQUISA</p><h2 class="modal-title" id="dialog-title">Fontes e conceitos.</h2><p class="modal-text">“Feudalismo” é uma forma de estudar relações de terra, poder e dependência na sociedade medieval. Este mapa apresenta um senhorio rural e simplifica uma realidade que variou no tempo e no espaço.</p><ul class="source-list"><li><a href="https://teachersinstitute.yale.edu/curriculum/units/1986/3/86.03.03/3" target="_blank" rel="noopener noreferrer">Yale Teachers Institute — Medieval Life</a><br>Material de ensino sobre a vida medieval (em inglês).</li><li><a href="https://home.uncg.edu/~rebarton/peasant-life.htm" target="_blank" rel="noopener noreferrer">UNC Greensboro — Peasant Life, 11th–13th Centuries</a><br>Textos e registros históricos sobre a vida camponesa (em inglês).</li></ul><div class="who"><strong>NA SALA DE AULA</strong>Compare estas explicações com o livro didático e revise os termos com o professor. Nem todo camponês era servo, e nem todo feudo possuía um castelo.</div>`));

document.querySelectorAll('[data-group]').forEach(button=>button.addEventListener('click',()=>openSocialGroup(button.dataset.group)));

// A visualização imersiva funciona mesmo sem suporte à Fullscreen API.
const fullButton = document.querySelector('#fullscreen-toggle');
const viewStatus = document.querySelector('#view-status');
let requestedNativeFullscreen = false;
function setImmersive(enabled) {
 document.body.classList.toggle('immersive', enabled);
 fullButton.setAttribute('aria-pressed', String(enabled));
 fullButton.textContent = enabled ? '⤢ Sair da tela cheia' : '⛶ Tela cheia';
 fullButton.title = enabled ? 'Voltar à página (Esc)' : 'Expandir o mapa para ocupar o navegador';
 viewStatus.textContent = enabled ? 'Mapa expandido. Use Sair da tela cheia ou Esc para voltar.' : 'Visualização normal.';
}
async function leaveImmersive() {
 setImmersive(false);
 if (requestedNativeFullscreen && document.fullscreenElement) {
  try { await document.exitFullscreen(); } catch { /* A interface já voltou ao modo normal. */ }
 }
 requestedNativeFullscreen = false;
 fullButton.focus();
}
fullButton.addEventListener('click', async () => {
 if (document.body.classList.contains('immersive')) { await leaveImmersive(); return; }
 setImmersive(true);
 if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
  try { await document.documentElement.requestFullscreen(); requestedNativeFullscreen = true; }
  catch { requestedNativeFullscreen = false; }
 }
});
document.addEventListener('fullscreenchange', () => {
 if (requestedNativeFullscreen && !document.fullscreenElement) {
  requestedNativeFullscreen = false;
  setImmersive(false);
  fullButton.focus();
 }
});
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && !dialog.open && document.body.classList.contains('immersive')) {
  event.preventDefault();
  leaveImmersive();
 }
});
