# Crônicas do feudalismo

**Descrição do projeto · Atualizada em 2 de novembro de 2026**

## Apresentação

Crônicas do feudalismo é uma aplicação web educativa criada para apoiar um trabalho do sexto ano do ensino fundamental. O aluno explora visualmente um feudo, conhece seus espaços e descobre como terra, trabalho, religião e poder se relacionavam na sociedade medieval.

A experiência combina um mapa interativo, retratos ilustrativos, explicações curtas, conceitos e perguntas para discussão. Pode ser usada individualmente ou projetada durante uma apresentação em sala de aula.

## Objetivos de aprendizagem

- Reconhecer espaços e atividades de um senhorio rural.
- Identificar clero, nobreza e trabalhadores no modelo das três ordens.
- Compreender relações de dependência, obrigações e desigualdade.
- Diferenciar servidão, vassalagem, condição social e profissão.
- Identificar diferentes situações entre os trabalhadores, evitando tratar todos como servos.
- Entender que um modelo didático simplifica uma realidade histórica diversa.

## Organização da experiência

### Capítulo I — O feudo

O primeiro capítulo apresenta um cenário isométrico com oito lugares clicáveis:

| Lugar | Tema principal |
| --- | --- |
| Castelo | Poder senhorial, administração e defesa. |
| Igreja | Religião e vida comunitária. |
| Aldeia | Moradia, atividades e cotidiano. |
| Terras do senhor | Trabalho e obrigações camponesas. |
| Cultivos camponeses | Produção de alimentos e sustento familiar. |
| Terras de uso comum | Recursos compartilhados e regras de acesso. |
| Moinho | Transformação dos cereais e cobranças pelo uso. |
| Bosque | Recursos naturais e limites de acesso. |

Cada ponto abre uma janela com explicação, pessoas associadas ao espaço, um conceito e uma pergunta. O aluno também pode escolher os lugares pelo menu lateral em pergaminho. Um contador mostra quantos lugares já foram explorados naquela visita.

### Capítulo II — As ordens sociais

A segunda tela apresenta três retratos idealizados: um nobre e uma nobre, um religioso e uma religiosa, um servo e uma serva. Os cartões e o menu lateral permitem acessar explicações sobre os grupos representados.

O conteúdo aborda as funções atribuídas às três ordens — os que rezam, os que combatem e os que trabalham — e explica suas relações: produção, pagamentos, defesa, justiça, orientação religiosa, alianças e disputas.

Uma seção distingue os tipos e as situações dos trabalhadores:

- **Servos:** camponeses submetidos a obrigações e restrições senhoriais.
- **Vilões:** apresentados, nesta explicação, no sentido didático de camponeses livres sujeitos a rendas ou serviços; o termo não tem significado universal ao longo da história.
- **Outros camponeses livres:** incluindo pequenos proprietários e arrendatários.
- **Jornaleiros e assalariados:** pessoas que recebiam pagamento pelo trabalho.
- **Artesãos e trabalhadores de serviços:** como ferreiros, carpinteiros, tecelões, moleiros e trabalhadores domésticos.

Essas categorias não formam uma divisão rígida: combinam condição social, acesso à terra, forma de trabalho e ofício. Uma pessoa podia cultivar a terra e exercer uma atividade artesanal.

A tela inclui ainda a comparação entre servidão e vassalagem e um exemplo sobre o caminho do trigo, da produção à distribuição de parte da colheita.

### Capítulo III — Linha do tempo do feudalismo

O terceiro capítulo reúne 12 marcos em quatro períodos: origens e antecedentes; formação e expansão; crises e resistências; transformações. Abrange 476, a coroação de Carlos Magno (800), o Tratado de Verdun (843), a formação de poderes locais nos séculos IX–X, a expansão dos séculos XI–XIII, a convocação da Primeira Cruzada (1095), a Grande Fome (1315–1317), a Guerra dos Cem Anos (1337–1453), a Peste Negra (aproximadamente 1347–1351), a Jacquerie (1358), a revolta inglesa (1381) e transformações dos séculos XV–XVI.

Cada cartão inclui uma data ou intervalo, uma explicação, a relação expansível com o feudalismo e um link de fonte. A linha é uma sequência narrativa, sem escala proporcional, e indica que períodos podem se sobrepor. Não trata o feudalismo como algo que começou ou terminou em um único ano. O menu em pergaminho permite saltar entre períodos.

### Capítulo IV — Personalidades

A galeria apresenta 12 trajetórias aprovadas: Carlos Magno; Guilherme, o Conquistador; Papa Gregório VII; Henrique IV; Leonor da Aquitânia; Hildegarda de Bingen; Dante Alighieri; Francisco de Assis; Luís IX da França; Tomás de Aquino; Wat Tyler; Joana d’Arc.

Os retratos são interpretações ilustrativas. Cada biografia traz uma data ou intervalo identificado (vida, reinado ou acontecimento), uma explicação curta, conexões com a sociedade medieval, uma pergunta para reflexão e uma fonte. Os atalhos permitem explorar o período correspondente na linha do tempo ou comparar com as ordens sociais. O menu em pergaminho filtra os cartões por poder e nobreza, Igreja e saber, literatura e lideranças e conflitos.

A introdução lembra que a história também foi feita por camponeses, artesãos e outras pessoas cujos nomes não foram registrados. As personalidades ajudam a compreender os processos; não representam sozinhas toda a sociedade.

## Navegação e funcionalidades

Os quatro capítulos usam os endereços internos `#feudo`, `#ordens`, `#tempo` e `#pessoas`. O cabeçalho e a identidade visual são compartilhados; o menu lateral muda conforme o capítulo. O histórico do navegador permite voltar e avançar.

O modo de tela cheia amplia a exploração e mantém controles para alternar os capítulos. A troca de tela preserva o modo expandido, o progresso da visita e a reprodução musical. Nos capítulos de leitura, o conteúdo tem rolagem própria quando expandido.

As janelas podem ser fechadas pelo botão ou por Esc. A aplicação oferece rótulos de controles, foco visível, textos alternativos e navegação por teclado. No celular, o mapa mantém rolagem lateral e o conteúdo explicativo se reorganiza em uma coluna.

## Identidade visual e som

O cenário do feudo tem aparência isométrica inspirada em RPGs de PC dos anos 1990, com Ultima VIII como referência visual solicitada. A interface utiliza pergaminho ilustrado e envelhecido, tons terrosos, molduras e títulos caligráficos.

Mapa, pergaminho e retratos foram criados com geração de imagens integrada. São ilustrações originais para esta aplicação, não capturas do jogo nem retratos históricos. Os prompts estão registrados nos documentos de arte do projeto.

A trilha é um arranjo sintetizado próprio de **Greensleeves**, com timbres e quantização em 8 bits. O áudio fica em um arquivo local, toca em repetição e tem pausa e regulador de volume. O volume inicial é 18%. Se o navegador bloquear a reprodução automática, uma interação do usuário libera o som. Uma pausa explícita é respeitada.

Greensleeves é utilizada como ambientação artística, não como reconstrução musical da época representada.

## Recorte histórico e cuidados pedagógicos

O mapa é um modelo de senhorio rural da Europa Ocidental entre os séculos XI e XIII. Não reconstrói um lugar real e não representa todos os feudos como iguais.

As três ordens são apresentadas como uma visão idealizada de autores medievais, não como uma descrição completa da população. O conteúdo ressalta diferenças de poder, conflitos e grupos que não se encaixavam bem nessa divisão. Nem todo camponês era servo, e nem todo feudo tinha castelo.

As explicações devem ser comparadas com o livro didático e as orientações do professor antes da apresentação final.

## Implementação técnica

A aplicação é estática, feita com HTML, CSS e JavaScript. Não exige compilação, framework, banco de dados ou cadastro na execução local.

```text
feudo-interativo/
├── AGENTS.md
├── DESCRICAO-DO-PROJETO.md
├── README.md
├── ARTE.md
├── ARTE-PERGAMINHO.md
├── ARTE-RETRATOS.md
├── ARTE-PERSONALIDADES.md
├── dist/
│   ├── index.html
│   ├── css/
│   │   ├── estilos.css
│   │   └── medieval.css
│   ├── js/
│   │   ├── conteudos.js
│   │   ├── app.js
│   │   ├── musica.js
│   │   ├── linha-do-tempo.js
│   │   ├── personalidades.js
│   │   └── ordens.js
│   └── assets/
└── tools/
    └── gerar_trilha.py
```

O repositório de desenvolvimento também contém `.openai/hosting.json`, que identifica a hospedagem existente. Esse arquivo não é necessário para a apresentação local.

## Uso em sala de aula

**Pela internet:** acesse [Crônicas do feudalismo](https://explore-um-feudo-rodrigo.swiftowl25.chatgpt.site). A publicação atual é privada e requer acesso pela conta autorizada do ChatGPT.

**Por uma cópia local:** extraia o ZIP completo, entre em `feudo-interativo/dist/` e abra `index.html` no navegador. Não separe o HTML das pastas de imagens, estilos, scripts e áudio.

Os recursos principais são locais. As fontes especiais vêm do Google Fonts; sem internet, o navegador utiliza alternativas do sistema. Links de pesquisa também dependem de conexão.

Se preferir um servidor local, execute na raiz do projeto:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Depois, abra `http://127.0.0.1:8765/`. Teste a cópia no computador da apresentação, confirme o volume e ative a tela cheia.

### Roteiro sugerido

1. Apresente a pergunta: quem vivia, trabalhava e exercia poder no feudo?
2. Explore os espaços do primeiro capítulo.
3. Mude para as ordens sociais e use os três retratos.
4. Compare as situações dos trabalhadores.
5. Acompanhe o exemplo do trigo e discuta a distribuição da produção.
6. Percorra a linha do tempo e situe as transformações.
7. Escolha duas personalidades e compare suas trajetórias e seus contextos.

## Estado atual e limitações

Estão implementados os quatro capítulos, os oito pontos do mapa, os retratos, os textos das ordens e trabalhadores, o tema medieval, a tela cheia e a trilha com controle de volume.

Não estão implementados cadastro de alunos, armazenamento de resultados, avaliação automática, quiz ou persistência do progresso. Ao recarregar a página, o contador de exploração recomeça. As pessoas ilustradas no cenário não são personagens controláveis.

As próximas melhorias possíveis incluem revisão pedagógica com o professor, testes com alunos, inclusão de fontes tipográficas locais e um quiz, caso faça parte do escopo aprovado.

## Referências utilizadas no conteúdo

- [Yale Teachers Institute — Medieval Life](https://teachersinstitute.yale.edu/curriculum/units/1986/3/86.03.03/3).
- [UNC Greensboro — Peasant Life](https://home.uncg.edu/~rebarton/peasant-life.htm).
- [ORB — Medieval Society](https://the-orb.arlima.net/textbooks/westciv/medievalsoc.html).
- [Cambridge University Press — The New Cambridge Medieval History, Volume IV, excerto](https://assets.cambridge.org/97805214/14104/excerpt/9780521414104_excerpt.pdf).
- [Brasil Escola — Sociedade Feudal](https://brasilescola.uol.com.br/historiag/sociedade-feudal.htm).
- [Weald & Downland Museum — Medieval Building from Hangleton](https://www.wealddown.co.uk/buildings/medieval-building-hangleton/).
- [The National Archives — Living in the 13th Century](https://www.nationalarchives.gov.uk/currency-converter/living-in-the-13th-century/).
- [North Atlantic Tune List — Greensleeves](https://natunelist.net/greensleeves/), referência da melodia para o arranjo.

### Fontes das personalidades

- [Carlos Magno — Society of Antiquaries of London](https://www.sal.org.uk/collections/explore-our-collections/collections-highlights/charlemagne-c-742-814/).
- [Guilherme, o Conquistador — English Heritage](https://production.english-heritage.org.uk/visit/places/1066-battle-of-hastings-abbey-and-battlefield/history-and-stories/what-happened-battle-hastings/).
- [Papa Gregório VII — The Met · Henrique IV em Canossa](https://www.metmuseum.org/art/collection/search/232147).
- [Henrique IV — Ohio State University · Investiture Controversy](https://origins.osu.edu/read/investiture-controversy).
- [Leonor da Aquitânia — English Heritage · Eleanor of Aquitaine](https://www.english-heritage.org.uk/learn/histories/women-in-history/eleanor-aquitaine/).
- [Hildegarda de Bingen — Catholic Encyclopedia · Saint Hildegard](https://www.newadvent.org/cathen/07351a.htm).
- [Dante Alighieri — Stanford Encyclopedia of Philosophy · Dante](https://plato.stanford.edu/entries/dante/).
- [Francisco de Assis — The Met · Saints in Medieval Christian Art](https://www.metmuseum.org/fr/essays/saints-in-medieval-christian-art).
- [Luís IX da França — The Met · The Age of Saint Louis](https://www.metmuseum.org/it/essays/the-age-of-saint-louis-1226-1270).
- [Tomás de Aquino — Stanford Encyclopedia of Philosophy · Aquinas](https://plato.stanford.edu/archives/fall2022/entries/aquinas/).
- [Wat Tyler — London Museum · Peasants’ Revolt](https://www.londonmuseum.org.uk/collections/london-stories/how-peasants-revolt-rocked-medieval-london/).
- [Joana d’Arc — Fordham · Carta de Joana d’Arc, 1429](https://sourcebooks.web.fordham.edu/source/joanofarc.asp).
