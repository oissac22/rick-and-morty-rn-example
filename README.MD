# Branchs

- A principal branch é a master
- As branchs iniciadas com feature são apenas momentos isolados de desenvolvimento
- as branchs iniciadas com version são versões anteriores do projeto que salvei pra usar como versionamento

# Comandos

## npm run test
- Este comando roda todos os arquivos de teste

## npm run test:o
- Este comando roda os arquivos de testes que não sofreram commits e também aqueles que tem ligação direta com estes arquivos

## expo start
- roda um comando que gera um qrcode e uma url para você testar usando o Expo em seu celular.

## eas build -p android
- gera uma build app no seu serviço online da expo

# Desenvolvimento

O Aplicativo foi desenvolvido usando React Native e Expo

# Testes unitários

Os testes unitários foram feito usando JEST, os arquivos de testes tem os mesmos nomes dos arquivos a serem testados, com a diferença de conterem o .spec no nome.
Apenas os arquivos que eu juguei precisar de testes tem os testes definidos.
Você vai encontrar arquivos de testes nas pastas config, design, entities e services.

# Pastas

## src/components
- Esta pasta contem os components portateis e semi-portateis que são usados em todo o projeto

## src/config
- Esta pasta contem os arquivos com informação de configuração do projeto

## src/design
- Esta pasta contem as configurações de design do projeto

## src/entities
- Essa pasta contem as pequenas e individuais regras de negócios que podem ser usadas por todo o projeto

## src/error
- Esta pasta contem as classes de tratamento de erro

## src/hooks
- Esta pasta contem os hooks que podem ser usados globalmente

## src/imgs
- Esta pasta contem as imagens globais e também uma estrutura que ajuda a utilizar estas imagens

## src/interfaces
- Esta pasta contem as interfaces e tipagens do typescript

## src/pages
- Nesta pasta você vai encontrar todas as páginas que aparecem em tela durante a navegação, cada página está semi-modularizada

## src/services
- Nesta pasta estão os as classes de administração dos microserviços, é nesta pasta que fica os tratamentos do Graphql

# Nível de desenvolvimento

Para demonstrar o máximo de capacitação em desenvolvimento de código eu evitei usar o máximo de componentes de terceiros, implementando no projeto apenas o react-native-animatable.
Até mesmo o componente de navegação eu desenvolvi totalmente acompanhado de pilha de histórico possibilitando "voltar"

# Áreas clicaveis do aplicativo

## Menu

- Home, a casa que fica no menu inferior, para ir a página inicial, no caso a lista de personagens
- Informação, o i no menu inferior para levar a página de informações do aplicativo

## Página inicial

- Os personagens são clicaveis
- As setas de navegação
- O número da página atual e quantidade de páginas
- A lupa
- O botão com X que aparece a direita da lupa quando algum filtro de pesquisa está ativo
- existe barra de navegação no início e fim da lista

## Página de detalhes do personagem

- A foto do personagem para que essa expanda ou reduza
- No painel episódio, quando tem mais de 2 episódios aparece a frase "Mostrar mais..." que extende este painel, quando o mesmo é extendida a frase é trocada por "Mostrar menos..."
- No final da página aparece a frase "Mais sobre Fulano de tal", esta, ao ser clicada, ti leva a uma pesquisa no google sobre o personagem que está sendo visualizado
- No final também tem a palavra "Voltar" que pode ser clicada

## Página Sobre
- "Linkedin" leva ao linkedin do desenvolvedor
- "Youtube" leva ao canal do desenvolvedor
- "E-mail" usa o mailto para enviar um e-mail ao desenvolvedor