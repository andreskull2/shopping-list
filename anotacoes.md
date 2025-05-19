# Desafio Prático - App de lista de compras

## Introdução
Faaaaaaala, dev! Parabéns por chegar até aqui! 💜
Chegou a hora de aplicar toda a teoria que você aprendeu até aqui colocando a mão na massa!
Este é o momento de transformar conhecimento em ação, desenvolvendo um projeto que vai consolidar suas habilidades e te preparar um pouco mais para os desafios reais!

Vamos lá? 🚀

## Descrição do desafio
Você vai desenvolver um site responsivo de lista de compras onde o usuário pode gerenciar os itens adicionando e removendo eles. 

link - https://www.figma.com/community/file/1397279978314668489

## Funcionalidades da aplicação
- O usuário pode **adicionar** um item a lista de compras
- O usuário pode **remover** um item da lista de compras

Nessa aplicação você vai trabalhar com:

- JavaScript;
- Manipulação da DOM;
- Funções;
- Eventos;

## Entrega
Após concluir os exercícios desse desafio, você deve enviar o link do seu código no GitHub para a plataforma. 

Após concluir o desafio, se você se sentir confortável, o que acha de postar no LinkedIn 
contando como foi a sua experiência compartilhando o seu projeto e o seu aprendizado?
É uma excelente forma de demonstrar seus conhecimentos e atrair novas oportunidades! 👀

E pode marcar a gente, viu? Vai ser incrível acompanhar toda a sua evolução! 💜

## Considerações finais
Lembre-se que o intuito de um desafio é te impulsionar, por isso, dependendo do desafio, pode ser que você precise ir além do que foi discutido em sala de aula. 
Mas isso não é algo ruim: ter autonomia para buscar informações extras é uma habilidade muito valiosa e vai ser ótimo pra você treinar ela aqui com a gente!

E lembre-se: **tenha calma**! Enfrentar desafios faz parte do seu processo de aprendizado! 

Se precisar de alguma orientação ou suporte, estamos aqui com você!
Bons estudos e boa prática! 💜

--- 
### HTML/CSS
HTML e CSS concluidos com sucesso. Até o momento foram 10h e 30min para concluir a parte de estrutura e estilização do aplicativo da lista de compras. Todo visual está pronto, agora preciso me concentrar na inteligencia da aplicação. Para isso, vou rever a aula de lógica de programação para tentar criar um algorítimo para essa aplicação. Verificar tamvém a aula da Rafaela Ballerini sobre esse assunto. 

## Agora começa o Javascript
A partir da aula de lógica de programação, fiz um algoritimo para me auxiliar na criação do código.

# Método 5Qs para montar um algoritimo:
Analise criticamente o problema e descubra: (Tente explicar este problema para você mesmo em voz alta e peça mais informações, investigue mais até você compreender completamente o problema)

1. Quais são os dados de entrada necessários?
Descrição do item a se comprar

2. O que devo fazer com estes dados?
Adicioná-lo a uma lista de compras

3. Quais são as restrições do problema?
Não podem ser inseridos apenas números, caracteres especiais ou emojis

4. Qual é o resultado esperado?
Espera-se que os itens sejam organizados e exibidos conforme a lista de compras vá sendo formada

5. Qual é a sequencia de passos a ser feita para chegar ao resultado esperado?
    1 - Usuário digita o nome do item.

    2- Ao clicar no botão "Adicionar":
        a. Verifica se o campo está vazio ou contém só números/caracteres especiais.
            – Se estiver errado, mostra aviso e para aqui.
            – Se estiver certo, continua.

    3- Cria um novo item com nome digitado.

    4- Adiciona esse item na lista visível.

    5- Se o usuário clicar na checkbox, o item aparece riscado.

    6- Se clicar na lixeira, o item é removido da lista.

    7- Exibe uma mensagem confirmando que o item foi deletado.
