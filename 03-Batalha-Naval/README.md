## Descrição Do Projeto

* Usamos HTML para construir a estrutura do jogo batalha naval, o CSS para esterilizar e o JavaScript para criar o comportamento.  
* O id de cada elemento <td> na tabela é usado para atualizar a imagem do elemento para indicar um HIT ou um MISS.  
* O formulário usa um input como tipo "button". Anexamos um **event handler** ao botão para que possamos saber no código quando um jogador inseriu um palpite.  
* Para obter um valor de um elemento input de texto em um formulário, use a propriedade **value** do elemento.  
* O posicionamento CSS pode ser usado para posicionar elementos precisamente na página web.  
* Organizamos o código usando três objetos: um **modelo**, um **view** e um **controlller**.  
* Cada objeto no jogo tem uma **responsabilidade primária**.  
* A responsabilidade do modelo é armazenar o estado do jogo implementar a lógica que modifica esse estado. 
* A responsabilidade do view é atualizar a exibição quando o estado no  modelo mudar.  
* A responsabilidade do controller é fazer a colagem do jogo, para garantir que o palpite do jogador seja mandado para o modelo para atualizar o estado verificar quando o jogo termina.
* Ao projetar o jogo com objetos que tenham cada uma **esponsabilidade separada**, podemos construir e testar cada parte do jogo independentemente.  
* Para facilitar a criação e o teste do modelo, nós inicialmente colocamos em hardcode as posições dos navios. Depois de nos assegurarmos que o modelo estava funcionando, substituímos estas posições em hardcode com posições aleatórias geradas por código.  
* Usamos propriedades no modelo, como numShips e shipLength, para que não tivéssemos que colocar em hardcode os valores nos métodos que poderíamos nos querer alterar mais tarde.
* Arrays tem um método **indexOf** que é similar ao método indexOf da string. O método indexOf array pega um valor e retorna o índice desse valor se ele existir no array ou -1 se ele não existir.
* Com o **encadeamento** você pode encadear referência de objetos (usando o operador ponto), combinando as instruções e eliminando variáveis temporárias.
* O loop **do while** é similar ao loop while, exceto que a condição é verificada depois das instruções do corpo do loop terem sido executadas uma vez.
* 
