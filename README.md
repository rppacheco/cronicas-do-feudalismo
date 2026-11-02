# Crônicas do feudalismo

Aplicação educativa em português para o sexto ano, com mapa isométrico, oito lugares clicáveis e capítulos sobre as ordens sociais, a linha do tempo e 12 personalidades. Não requer instalação, cadastro ou banco de dados na execução local.

## Documentação

- [Descrição do projeto](DESCRICAO-DO-PROJETO.md): objetivos, funcionalidades, organização técnica e apresentação em sala de aula.
- [AGENTS.md](AGENTS.md): orientações para continuar o desenvolvimento e preservar as decisões do projeto.

## Abrir
Abra `dist/index.html` no navegador. Todos os recursos necessários são locais; as fontes do Google são opcionais e têm alternativas do sistema. Também é possível servir `dist/` com um servidor HTTP estático.

## Organização
- `dist/index.html`: estrutura dos quatro capítulos e controles.
- `dist/css/estilos.css`: estilos e adaptação a telas pequenas.
- `dist/js/conteudos.js`: oito textos, conceitos, perguntas e posições dos pontos.
- `dist/js/app.js`: navegação, janelas acessíveis e progresso da exploração.
- `.openai/hosting.json`: configuração da publicação.

## Escopo pedagógico
Modelo ilustrativo de um senhorio rural da Europa Ocidental entre os séculos XI e XIII. Os textos foram escritos para introdução ao tema e precisam ser confrontados com o livro didático e as orientações do professor. A imagem não reconstrói um lugar real. Progresso válido durante a visita; recarregar a página o reinicia.

## Fontes para revisão
- https://teachersinstitute.yale.edu/curriculum/units/1986/3/86.03.03/3
- https://home.uncg.edu/~rebarton/peasant-life.htm

## Etapas seguintes
1. Revisar a linguagem e os conceitos com o professor.
2. Recolher comentários dos alunos sobre o mapa e as explicações.
3. Acrescentar um quiz, se for útil para a apresentação.

## Arte isométrica
O cenário atual usa `dist/assets/mapa-feudo-isometrico.png`, gerado com a ferramenta integrada de geração de imagens. Tem inspiração visual em RPGs isométricos dos anos 90 e contém aldeões, nobres e clero. Os três botões de grupos sociais abrem explicações e ajudam a localizar os personagens. O modelo continua didático e não é uma reconstrução histórica de um lugar real.

## Tema medieval e tela cheia
A interface usa pergaminho, molduras e as fontes Fondamento (títulos caligráficos) e IM Fell English (texto), com alternativas locais quando o Google Fonts estiver indisponível. `dist/css/medieval.css` concentra esse tema. O botão Tela cheia expande a exploração para a janela inteira e tenta usar a Fullscreen API quando disponível. Use o botão de saída ou Esc para voltar; Esc fecha primeiro um pop-up aberto. No celular o cenário mantém a rolagem lateral.

## Música e pergaminho
A barra lateral é um pergaminho desenrolado feito em CSS. A trilha local `dist/assets/greensleeves-8bits.wav` é um arranjo sintetizado próprio de Greensleeves, com pulso, baixo triangular e quantização em 8 bits. A melodia tradicional foi conferida em https://natunelist.net/greensleeves/. Essa música do século XVI serve como ambientação artística, não como reconstituição sonora dos séculos XI–XIII. Não foi usada gravação de terceiros.

Reprodução contínua, volume inicial de 18%, botão de pausa e regulador de 0 a 100%. O site tenta iniciar ao carregar; se o navegador bloquear, o primeiro clique ou Enter/Espaço libera o som. Uma pausa explícita é respeitada. Os controles funcionam também na tela cheia. Para regenerar o áudio: `python3 tools/gerar_trilha.py`.

## Pergaminho ilustrado
A barra lateral agora usa `dist/assets/pergaminho-envelhecido.png`, arte com fundo transparente, manchas e bordas gastas. O `border-image` em nove regiões preserva os rolos de papel ao variar a altura do menu. O prompt e a procedência da imagem estão em `ARTE-PERGAMINHO.md`.

## Ordens sociais e relações
O botão “Ordens e relações” apresenta clero (oratores), nobreza (bellatores) e trabalhadores (laboratores), com cartões navegáveis e textos adequados ao sexto ano. Explica trabalho e pagamentos, defesa e justiça, dízimos, doações, alianças e conflitos. Distingue servidão de vassalagem e usa o caminho do trigo como exemplo. A abordagem destaca que as três ordens eram um modelo idealizado e limitado, com relações desiguais.

O conteúdo está em `dist/js/ordens.js`. Fontes: https://the-orb.arlima.net/textbooks/westciv/medievalsoc.html ; https://assets.cambridge.org/97805214/14104/excerpt/9780521414104_excerpt.pdf ; https://teachersinstitute.yale.edu/curriculum/units/1986/3/86.03.03/3 .

## Segunda tela e tipos de trabalhadores
Os capítulos `#feudo` e `#ordens` apresentam o mapa e as ordens sociais. A segunda tela apresenta três retratos idealizados com representantes masculinos e femininos, os textos das ordens, as relações e o exemplo do trigo. O menu em pergaminho muda conforme o capítulo. Cartões e links do menu abrem os mesmos detalhes. O histórico do navegador funciona e a música continua na troca de capítulo.

A seção de trabalhadores distingue servos, vilões, outros camponeses livres e arrendatários, jornaleiros/assalariados e artesãos/trabalhadores de serviços. Explica a diferença entre condição social e profissão e avisa que a terminologia varia por região e época. Fontes adicionais: https://brasilescola.uol.com.br/historiag/sociedade-feudal.htm ; https://www.wealddown.co.uk/buildings/medieval-building-hangleton/ ; https://www.nationalarchives.gov.uk/currency-converter/living-in-the-13th-century/ .

O modo de tela cheia é preservado ao trocar de capítulo. A barra superior inclui os atalhos entre capítulos, e a tela de ordens tem rolagem própria mantendo os controles visíveis. A saída depende apenas do botão ou de Esc. Os retratos e seus prompts estão documentados em `ARTE-RETRATOS.md`.

## Linha do tempo
O terceiro capítulo (`#tempo`) reúne 12 marcos e processos históricos, de 476 aos séculos XV–XVI. Os cartões são agrupados em origens, formação/expansão, crises/resistências e transformações. Cada um apresenta data, explicação, relação expansível com o feudalismo e fonte. Intervalos podem se sobrepor; a disposição não é uma escala proporcional. O conteúdo destaca a formação gradual e a ausência de uma data única para o fim do feudalismo.

Dados e renderização: `dist/js/linha-do-tempo.js`, carregado antes de `ordens.js`. A navegação e o histórico abrangem os quatro capítulos e preservam tela cheia, áudio e o progresso do mapa.

## Personalidades
O quarto capítulo (`#pessoas`) apresenta 12 retratos ilustrativos e biografias de Carlos Magno, Guilherme, o Conquistador, Gregório VII, Henrique IV, Leonor da Aquitânia, Hildegarda de Bingen, Dante Alighieri, Francisco de Assis, Luís IX, Tomás de Aquino, Wat Tyler e Joana d’Arc. O menu filtra por tema. Cada janela reúne data contextualizada, trajetória, relação com a sociedade medieval, pergunta e fonte, com atalhos para a linha do tempo e as ordens sociais.

Dados e renderização: `dist/js/personalidades.js`, entre `linha-do-tempo.js` e `ordens.js`. As imagens e os prompts estão documentados em `ARTE-PERSONALIDADES.md`. A navegação preserva a tela cheia e a música.
