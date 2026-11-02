const ordensSociais = {
 clero: {
  name:'Clero',latin:'Oratores',role:'Os que rezam',symbol:'✦',
  summary:'Padres, monges, bispos e outros religiosos. Cuidavam de práticas religiosas e tinham influência na sociedade.',
  text:'O clero celebrava missas, orientava os fiéis e participava da educação e da preservação de textos. A Igreja podia possuir terras e receber dízimos e doações. Havia grandes diferenças entre um padre de aldeia e um bispo rico e poderoso.',
  relation:'Recebia sustento e recursos de outros grupos. Em troca, oferecia orientação religiosa. Parte do clero defendia a divisão em ordens como uma organização desejada por Deus.',
  map:'Observe o grupo de vestes longas na entrada da igreja.',
  question:'Como possuir terras e orientar as crenças das pessoas podia aumentar o poder da Igreja?'
 },
 nobres: {
  name:'Nobreza',latin:'Bellatores',role:'Os que combatem',symbol:'⚑',
  summary:'Reis, senhores e cavaleiros ligados ao poder e à guerra. Controlavam terras e direitos sobre elas.',
  text:'A nobreza era associada à defesa militar. Muitos senhores também cobravam obrigações e exerciam justiça em suas terras. Mulheres nobres podiam administrar patrimônios e propriedades. A riqueza e o poder variavam entre as famílias.',
  relation:'Dependia da produção e do trabalho camponês. Podia fazer doações à Igreja e receber apoio religioso. Também havia disputas entre nobres e conflitos com autoridades religiosas.',
  map:'Procure os personagens com mantos vermelhos e azuis no pátio do castelo.',
  question:'Por que a força militar e o controle da terra davam vantagens aos senhores?'
 },
 aldeoes: {
  name:'Trabalhadores',latin:'Laboratores',role:'Os que trabalham',symbol:'❧',
  summary:'Sobretudo camponeses, responsáveis por produzir os alimentos que sustentavam a vida no feudo.',
  text:'As famílias camponesas cultivavam, criavam animais e exerciam outros trabalhos. Muitas entregavam parte da produção ou prestavam serviços aos senhores. Algumas eram livres; outras estavam submetidas à servidão, com obrigações e restrições à sua liberdade.',
  relation:'Produziam o sustento de diferentes grupos. Podiam dever trabalho e pagamentos ao senhor e dízimos à Igreja. Essas obrigações eram desiguais e podiam provocar resistências e conflitos.',
  map:'Observe os aldeões com cestos e ferramentas na aldeia, nos campos e no moinho.',
  question:'Se os camponeses produziam os alimentos, por que nem sempre tinham poder para decidir sobre sua produção?'
 }
};
function socialLinks(root = document.querySelector('#dialog-body')){
 root.querySelectorAll('[data-social-group]').forEach(button=>button.addEventListener('click',()=>openSocialGroup(button.dataset.socialGroup)));
 root.querySelector('[data-social-overview]')?.addEventListener('click',openSocialOverview);
}
function openSocialGroup(key){
 const g=ordensSociais[key];
 show(`<p class="eyebrow">AS ORDENS SOCIAIS · ${g.latin}</p><h2 class="modal-title" id="dialog-title">${g.name}</h2><p class="order-role">${g.symbol} ${g.role}</p><p class="modal-text">${g.text}</p><div class="who"><strong>COMO SE RELACIONAVA COM OS OUTROS?</strong>${g.relation}</div>${key==='aldeoes'?workerTypesMarkup(true):''}<p class="social-map"><strong>No mapa:</strong> ${g.map}</p><div class="question"><span>PARA PENSAR</span>${g.question}</div><button class="next" data-social-overview>Entender as relações entre as ordens →</button>`);
 socialLinks();
}
function socialOverviewMarkup(){
 const cards=['nobres','clero','aldeoes'].map(key=>{
  const g=ordensSociais[key];
  const portrait = {nobres:{file:'nobre',caption:'Um nobre e uma nobre idealizados',alt:'Homem e mulher da nobreza medieval lado a lado diante de um castelo'},clero:{file:'clero',caption:'Um religioso e uma religiosa idealizados',alt:'Sacerdote e religiosa medieval lado a lado com livros em uma igreja'},aldeoes:{file:'servo',caption:'Um servo e uma serva idealizados',alt:'Camponês e camponesa medievais lado a lado com cereais junto a um campo'}}[key];
  return `<button class="order-card" data-social-group="${key}" aria-label="Conhecer ${g.name}"><img class="social-portrait" src="assets/retrato-${portrait.file}-dupla.png" alt="${portrait.alt}" width="640" height="960"><span class="portrait-caption">${portrait.caption}</span><span class="portrait-copy"><strong>${g.name}</strong><span class="order-latin">${g.latin} · ${g.role}</span><span>${g.summary}</span><span class="order-more">Conhecer esta ordem →</span></span></button>`;
 }).join('');
 return (`<p class="eyebrow">AS PESSOAS E SEUS VÍNCULOS</p><h2 class="society-title" id="society-title" tabindex="-1">Uma sociedade de ordens</h2><p class="modal-text">Alguns autores medievais descreviam a sociedade cristã em três ordens, conforme as funções atribuídas a cada uma. Era um modelo idealizado, que ajudava a justificar hierarquias.</p><div class="order-cards">${cards}</div><p class="portrait-note">Retratos ilustrativos de personagens fictícios. O servo e a serva representam parte dos trabalhadores: nem todo camponês era servo, e as condições variavam.</p>${workerTypesMarkup()}<h3 class="social-heading" id="social-relations" tabindex="-1">Como se relacionavam?</h3><div class="relations"><article><p class="relation-route">Camponeses <span aria-hidden="true">→</span> Senhores</p><p>Trabalho nas terras senhoriais e entrega de parte da produção ou pagamentos, conforme as regras locais.</p></article><article><p class="relation-route">Senhores <span aria-hidden="true">→</span> Moradores</p><p>Defesa e exercício da justiça. Isso também permitia controlar pessoas e cobrar obrigações: a relação era desigual.</p></article><article><p class="relation-route">Fiéis <span aria-hidden="true">↔</span> Igreja</p><p>Dízimos e doações ajudavam a sustentar a Igreja. O clero oferecia orientação e serviços religiosos.</p></article><article><p class="relation-route">Nobreza <span aria-hidden="true">↔</span> Clero</p><p>Doações, terras e apoio religioso podiam aproximá-los. Também disputavam poder e autoridade.</p></article></div><div class="social-distinction"><h3>Servidão e vassalagem são iguais?</h3><p><strong>Servidão:</strong> dependência de muitos camponeses em relação ao senhor, com trabalho, pagamentos e restrições.</p><p><strong>Vassalagem:</strong> vínculo de fidelidade entre nobres, com deveres de auxílio e proteção. Podia envolver a concessão de terras ou de outros direitos.</p></div><details class="social-example"><summary>Um exemplo: acompanhe o caminho do trigo</summary><p>Uma família camponesa colhe trigo. Parte pode servir de alimento, parte pode ser entregue ao senhor e outra à Igreja. Moer o grão no moinho senhorial também podia envolver uma cobrança. As regras mudavam de um lugar para outro.</p><p><strong>Reflita:</strong> quem trabalhou para produzir o trigo? Quem recebeu parte dele?</p></details><div class="who social-caution"><strong>UM MODELO NÃO CONTA TODA A HISTÓRIA</strong>Os grupos dependiam uns dos outros, mas não tinham os mesmos direitos nem o mesmo poder. A divisão em três ordens não descrevia toda a população. Moradores das cidades e diferentes comunidades religiosas não se encaixavam bem nela.</div><p class="social-source">Para pesquisar: <a href="https://the-orb.arlima.net/textbooks/westciv/medievalsoc.html" target="_blank" rel="noopener noreferrer">ORB · Medieval Society</a> e <a href="https://assets.cambridge.org/97805214/14104/excerpt/9780521414104_excerpt.pdf" target="_blank" rel="noopener noreferrer">The New Cambridge Medieval History</a> (em inglês).</p>`);
}




function workerTypesMarkup(inDialog = false){
 return `<section class="worker-types" aria-label="Tipos de trabalhadores"><h3 class="social-heading" id="${inDialog ? 'dialog-worker-types' : 'worker-types-title'}" tabindex="-1">Quem eram os trabalhadores?</h3><p class="worker-intro">Nem todos tinham a mesma liberdade, terra ou renda. Também exerciam atividades diferentes.</p><div class="worker-grid"><article><span>CONDIÇÃO SOCIAL</span><h4>Servos</h4><p>Camponeses submetidos ao poder de um senhor. Tinham obrigações de trabalho e pagamentos e podiam sofrer restrições para deixar a terra. Servidão e escravidão eram condições diferentes.</p></article><article><span>CONDIÇÃO SOCIAL</span><h4>Vilões</h4><p>Aqui, o termo designa camponeses livres que viviam em vilas ou terras senhoriais. Podiam dever rendas e serviços, mas tinham maior liberdade pessoal que os servos. “Vilão” não significa malfeitor neste contexto.</p></article><article><span>ACESSO À TERRA</span><h4>Outros camponeses livres</h4><p>Alguns possuíam pequenas terras; outros eram arrendatários: usavam terras de outra pessoa mediante pagamento. Ser livre não significava viver sem obrigações ou ter riqueza.</p></article><article><span>FORMA DE TRABALHO</span><h4>Jornaleiros e assalariados</h4><p>Recebiam pagamento pelo trabalho, por exemplo durante uma colheita. Alguns tinham pouca ou nenhuma terra e completavam o sustento trabalhando para outras pessoas.</p></article><article><span>OFÍCIOS</span><h4>Artesãos e trabalhadores de serviços</h4><p>Ferreiros, carpinteiros, tecelões, moleiros e trabalhadores domésticos produziam objetos e prestavam serviços. Uma família podia combinar agricultura e artesanato.</p></article></div><div class="worker-note"><strong>Condição social não é profissão.</strong> Uma pessoa podia ser camponesa e artesã. “Servo” indica uma condição de dependência; “ferreiro” indica um ofício. Os nomes e os direitos variavam por região e época, inclusive o sentido de “vilão”.</div><p class="social-source">Para conferir: <a href="https://brasilescola.uol.com.br/historiag/sociedade-feudal.htm" target="_blank" rel="noopener noreferrer">Brasil Escola</a>, <a href="https://www.wealddown.co.uk/buildings/medieval-building-hangleton/" target="_blank" rel="noopener noreferrer">Weald &amp; Downland Museum</a> e <a href="https://www.nationalarchives.gov.uk/currency-converter/living-in-the-13th-century/" target="_blank" rel="noopener noreferrer">The National Archives</a>.</p></section>`;
}

const societyScreen = document.querySelector('.society-screen');
const societyContent = document.querySelector('#society-content');
societyContent.innerHTML = socialOverviewMarkup();
socialLinks(societyContent);
socialLinks(document.querySelector('.social-sidebar'));
const sidebarHeading = document.querySelector('aside h2');
const sidebarNote = document.querySelector('.aside-note');
function setProjectScreen(screen, focusHeading = true, updateHistory = true) {
 const chapter = ['feudo','ordens','tempo','pessoas'].includes(screen) ? screen : 'feudo';
 const social = chapter === 'ordens';
 const timeline = chapter === 'tempo';
 const people = chapter === 'pessoas';
 const reading = social || timeline || people;
 if (dialog.open) dialog.close();
 document.body.classList.toggle('society-view',social);
 document.body.classList.toggle('timeline-view',timeline);
 document.body.classList.toggle('people-view',people);
 document.querySelector('.skip').href = social ? '#society-title' : timeline ? '#timeline-title' : people ? '#people-title' : '#lugares';
 document.querySelector('.skip').textContent = social ? 'Pular para as ordens sociais' : timeline ? 'Pular para a linha do tempo' : people ? 'Pular para as personalidades' : 'Pular para a lista de lugares';
 document.querySelector('.explorer').setAttribute('aria-label', social ? 'Ordens sociais e relações' : timeline ? 'Linha do tempo do feudalismo' : people ? 'Personalidades do mundo medieval' : 'Explorar o feudo');
 document.querySelector('.lead').innerHTML = social ? 'Quem rezava, quem combatia e quem trabalhava?<br>Conheça os grupos sociais e suas relações.' : timeline ? 'Como esse mundo se formou e se transformou?<br>Percorra os principais marcos do feudalismo.' : people ? 'Quem foram algumas das pessoas desse mundo?<br>Conheça trajetórias e suas conexões com a sociedade.' : 'Quem vivia aqui? Quem trabalhava a terra?<br>Explore o mapa e descubra como essa sociedade funcionava.';
 societyScreen.hidden = !social;
 timelineScreen.hidden = !timeline;
 peopleScreen.hidden = !people;
 document.querySelector('.map-top > span').innerHTML = social ? 'CAPÍTULO II · ORDENS SOCIAIS' : timeline ? 'CAPÍTULO III · LINHA DO TEMPO' : people ? 'CAPÍTULO IV · PERSONALIDADES' : '<i></i> EUROPA OCIDENTAL · SÉCULOS XI–XIII';
 document.querySelector('#lugares').hidden = reading;
 document.querySelector('.social-sidebar').hidden = !social;
 document.querySelector('.timeline-sidebar').hidden = !timeline;
 document.querySelector('.people-sidebar').hidden = !people;
 document.querySelector('aside .legend').hidden = reading;
 sidebarHeading.textContent = social ? 'As três ordens' : timeline ? 'Pelo tempo' : people ? 'Trajetórias' : 'Por onde começar?';
 sidebarNote.innerHTML = social ? 'Conheça os grupos e<br>os vínculos entre eles.' : timeline ? 'Escolha um período<br>para explorar seus marcos.' : people ? 'Escolha um tema<br>para conhecer as pessoas.' : 'Escolha um lugar na lista<br>ou nos pontos do mapa.';
 document.querySelectorAll('.chapter-nav [data-screen], .view-switch [data-screen]').forEach(button=>{
  if(button.dataset.screen===chapter)button.setAttribute('aria-current','page');
  else button.removeAttribute('aria-current');
 });
 if (updateHistory && location.hash !== '#'+chapter) history.pushState({screen:chapter},'', '#'+chapter);
 if (focusHeading) {
  const heading = social ? document.querySelector('#society-title') : timeline ? document.querySelector('#timeline-title') : people ? document.querySelector('#people-title') : document.querySelector(document.body.classList.contains('immersive') ? '.view-switch [data-screen="feudo"]' : '.chapter-nav [data-screen="feudo"]');
  heading.focus({preventScroll:true});
  if (!document.body.classList.contains('immersive')) document.querySelector('.chapter-nav').scrollIntoView({block:'start',behavior:'instant'});
  else if (reading) (social ? societyScreen : timeline ? timelineScreen : peopleScreen).scrollTop = 0;
 }
}
function screenFromLocation(){return ['feudo','ordens','tempo','pessoas'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'feudo';}
function openSocialOverview(){setProjectScreen('ordens');}
document.querySelectorAll('[data-screen]').forEach(button=>button.addEventListener('click',()=>setProjectScreen(button.dataset.screen)));
document.querySelector('#social-orders').addEventListener('click',openSocialOverview);
document.querySelector('#sidebar-relations').addEventListener('click',()=>{
 const heading=document.querySelector('#social-relations');heading.focus({preventScroll:true});heading.scrollIntoView({block:'start',behavior:'instant'});
});
document.querySelector('#sidebar-workers').addEventListener('click',()=>{const heading=document.querySelector('#society-content #worker-types-title');heading.focus({preventScroll:true});heading.scrollIntoView({block:'start',behavior:'instant'});});
window.addEventListener('popstate',()=>setProjectScreen(screenFromLocation(),true,false));
setProjectScreen(screenFromLocation(),false,false);
