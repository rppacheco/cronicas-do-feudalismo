# AGENTS.md — Crônicas do feudalismo

## Objetivo e público

Aplicação educativa em português para um trabalho do sexto ano do ensino fundamental sobre feudalismo. Ajuda o aluno a explorar um feudo e compreender as ordens sociais e suas relações. Consulte `DESCRICAO-DO-PROJETO.md` para conhecer o escopo atual.

## Como trabalhar

- Leia o código atual antes de editar. Não use os scripts temporários de versões antigas para regenerar a aplicação: eles podem sobrescrever mudanças posteriores.
- Faça alterações proporcionais ao pedido, mantendo o projeto estático, sem framework, banco de dados ou etapa de build, salvo necessidade explicitamente acordada.
- Use português claro e adequado ao sexto ano. Preserve acentos e nomes dos conceitos.
- Para documentação ou empacotamento, atualize os arquivos pertinentes sem alterar o comportamento da aplicação nem publicar desnecessariamente.
- Não inclua credenciais, tokens, metadados de Git ou arquivos temporários nos pacotes de apresentação.

## Estrutura e responsabilidades

| Arquivo | Responsabilidade |
| --- | --- |
| `dist/index.html` | Estrutura das telas, controles e pontos de montagem. |
| `dist/css/estilos.css` | Estilos básicos e comportamento responsivo original. |
| `dist/css/medieval.css` | Tema medieval, pergaminho, retratos, segunda tela e modo imersivo. |
| `dist/js/conteudos.js` | Oito lugares do mapa, textos e coordenadas dos pontos. |
| `dist/js/app.js` | Pop-ups, contador de exploração e tela cheia. |
| `dist/js/ordens.js` | Ordens sociais, trabalhadores, relações e navegação entre capítulos. |
| `dist/js/linha-do-tempo.js` | Marcos, fontes e renderização do terceiro capítulo. |
| `dist/js/personalidades.js` | Doze biografias, retratos, filtros e conexões entre capítulos. |
| `dist/js/musica.js` | Reprodução, pausa, desbloqueio de áudio e volume. |
| `dist/assets/` | Imagens e áudio locais. |
| `tools/gerar_trilha.py` | Geração do arranjo de Greensleeves. |
| `.github/workflows/pages.yml` | Publicação de somente `dist/` no GitHub Pages. |
| `.openai/hosting.json` | Configuração histórica da hospedagem anterior, atualmente privada. |

Os scripts usam funções e variáveis compartilhadas. Preserve a ordem dos scripts com `defer`: `conteudos.js`, `app.js`, `musica.js`, `linha-do-tempo.js`, `personalidades.js`, `ordens.js`. Ao reorganizar o código, confira as referências entre arquivos.

## Decisões que devem ser preservadas

1. **Quatro capítulos:** `#feudo`, `#ordens`, `#tempo` e `#pessoas`, com seleção visível e suporte ao histórico do navegador.
2. **Navegação contextual:** o menu em pergaminho lista lugares no primeiro capítulo, grupos/assuntos no segundo e períodos históricos no terceiro e temas de personalidades no quarto. Cartões e menu abrem as mesmas explicações.
3. **Tela cheia contínua:** trocar de capítulo não deve chamar `leaveImmersive()`, recarregar a página ou sair da Fullscreen API. Mantenha os atalhos de capítulos e a saída acessíveis. A tela de ordens deve ter rolagem própria no modo imersivo.
4. **Mapa alinhado:** as coordenadas dos marcadores são relativas à imagem inteira. Não recorte o cenário com `object-fit: cover` sem recalcular os pontos. Em telas pequenas, preserve a rolagem lateral do mapa.
5. **Música contínua:** conserve o mesmo elemento de áudio ao trocar de tela. Respeite a pausa escolhida pelo usuário e as restrições de reprodução automática do navegador. Mantenha pausa e volume disponíveis nos quatro capítulos.
6. **Progresso da visita:** a troca de tela mantém os lugares explorados. Recarregar a página reinicia esse estado; não há persistência implementada.

## Conteúdo histórico e pedagógico

- O cenário é um modelo didático de um senhorio da Europa Ocidental entre os séculos XI e XIII, não uma reconstrução de um local real.
- Apresente as três ordens como um modelo idealizado de autores medievais, com limitações. Explique desigualdades, dependências e conflitos, sem retratar as relações como uma troca igualitária.
- Distinga servidão de escravidão e de vassalagem; não trate todos os camponeses como servos.
- Diferencie condição social, acesso à terra e profissão. As categorias de trabalhadores podem se sobrepor.
- O sentido de termos como “vilão” varia por região e época. Na explicação atual, o termo é empregado para camponeses livres, conforme o uso de materiais didáticos brasileiros. Não apresente essa definição como universal.
- Os retratos são fictícios e idealizados. Não deduza condição jurídica apenas pela roupa de uma pessoa.
- Greensleeves é ambientação artística; não é uma reconstituição musical dos séculos representados no mapa.
- Consulte fontes adequadas ao acrescentar fatos e registre as referências próximas do conteúdo ou na documentação. Preserve a indicação de revisão pelo professor.

Na linha do tempo, distinga acontecimentos datados de processos e intervalos. Não apresente 476 como nascimento imediato do feudalismo nem 1453 como seu fim universal. Cite as fontes dos marcos e esclareça que a disposição dos cartões não é proporcional à duração do tempo.

## Direção visual e acessibilidade

Preserve o cenário isométrico inspirado nos RPGs de PC dos anos 1990, o pergaminho envelhecido, as molduras, a paleta terrosa e a caligrafia dos títulos. A versão atual do cenário é `mapa-feudo-isometrico.png`; o SVG de 16 bits é um recurso de uma versão anterior.

Mantenha os retratos e os prompts documentados em `ARTE.md`, `ARTE-PERGAMINHO.md`, `ARTE-RETRATOS.md` e `ARTE-PERSONALIDADES.md`. Use o pergaminho com divisão em nove regiões (`border-image`) para preservar os enrolamentos.

Conserve contraste, textos alternativos, foco visível, rótulos dos controles e operação por teclado. Pop-ups usam `dialog`: Esc deve fechar a janela, e a navegação não deve deixar o foco em elementos ocultos. O volume deve ser ajustável pelo teclado. Use IDs distintos entre o conteúdo da tela e cópias exibidas em pop-ups.

## Execução e verificação

Abra `dist/index.html` no navegador ou execute, a partir desta pasta:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Confira a sintaxe dos arquivos JavaScript alterados com `node --check caminho/do/arquivo.js`, quando o runtime estiver disponível. Para mudanças de interação, verifique os caminhos afetados no navegador:

- entrada direta em cada capítulo, ida e volta e histórico;
- pop-ups, teclado e alinhamento dos pontos;
- troca de capítulos em tela cheia e botão de saída;
- reprodução, pausa e volume sem reinício na navegação;
- largura pequena, rolagem e controles acessíveis.

Não afirme ter feito verificações que não executou. Mudanças apenas de documentação pedem revisão de conteúdo e caminhos, sem repetir testes da aplicação.

## Entrega e hospedagem

Para apresentação local, distribua a pasta completa ou um ZIP. `dist/` contém a aplicação e seus recursos; as fontes especiais dependem do Google Fonts e têm alternativas do sistema. O pacote não inclui um instalador.

Se atualizar o pacote existente neste workspace, o arquivo de entrega é `../feudo-interativo.zip`, contendo a pasta `feudo-interativo/` e excluindo `.git`, `.openai` e arquivos temporários.

A hospedagem principal é o GitHub Pages: https://rppacheco.github.io/cronicas-do-feudalismo/ . O repositório público é `rppacheco/cronicas-do-feudalismo`, na branch `main`. O fluxo `.github/workflows/pages.yml` publica somente `dist/`, em mudanças dessa pasta ou por execução manual. Para alterações no site, envie o código verificado ao GitHub e confira o resultado em Actions. Documentos e ferramentas ficam no repositório e não entram no artefato publicado. A hospedagem Sites anterior está privada; não a reative nem publique nela sem pedido explícito do usuário. Nunca grave credenciais no repositório.

No capítulo de personalidades, preserve a seleção aprovada de 12 pessoas, incluindo Dante Alighieri. As datas podem indicar vida, reinado ou um marco: mantenha o rótulo explícito. Não confunda os retratos idealizados das ordens com pessoas históricas. Relacione cada trajetória com processos sociais e registre a fonte na biografia.
