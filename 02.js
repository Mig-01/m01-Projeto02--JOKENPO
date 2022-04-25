
const prompt = require('prompt-sync')();

console.log('VAMOS JOGAR JOKENPÔ?');
console.log('Digite "sim", caso deseje jogar e "nao", caso não queira jogar: ')
let escolha = prompt().toLowerCase();
console.clear()

while (escolha != "sim" && escolha != "nao") {
console.log('Resposta inválida! Responda apenas sim ou não');
console.log('Digite "sim", caso deseje jogar e "nao", caso não queira jogar: ')
console.log(); escolha = prompt().toLowerCase() }
     
if (escolha == 'sim'){
 console.log('REGRAS:O JOKENPÔ É UM JOGO POPULAR DE PEDRA, PAPEL E TESOURA.\nVOCÊ TEM 3 ELEMENTOS ONDE UM VENCE UM DELES, E PERDE PARA O OUTRO.\n-A PEDRA GANHA DA TESOURA E PERDE PARA O PAPEL\n-A TESOURA GANHA DO PAPEL, MAS PERDE PARA A PEDRA;\n-O PAPEL GANHA DA PEDRA, MAS PERDE PARA A TESOURA.')
 prompt('Aperte "ENTER" para CONTINUAR ...')
console.clear()
  } 
 
const ppt = ["[0]PEDRA", "[1]PAPEL", "[2]TESOURA"];
let vitUsuario =  0
let vitComp = 0
let empate = 0 


do{ // CRIANDO UMA EXECUÇÃO NO DO WHILE =========================================================================
vitComp = 0;
vitUsuario = 0;
empate = 0 ;

  if (escolha == 'nao'){ 
   console.log ('Então encerramos por aqui. Até a próxima!')
   break } 

 // Determinar o número de partidas  
   console.log('JGADOR: Digite aqui quantidade de rodadas você quer jogar: ')
   let quantidade = +prompt()
    console.clear()
   

     // Determinar o número de partidas CRIANDO UM LAÇO NO FOR ================================================================
    for(i = 0; i < quantidade; i++ ) {
      
        //********INÍCIO DO GAME (laço)*************-----------------------------------------------------------------------------------------------------------
    
      console.log ('JOGADOR: Cada número corresponde a um elemento.\nDigite:\n0 para escolher PEDRA.\n1 para escolher PAPEL.\n2 para escolher TESOURA:\n ')
      let esc2 = +prompt('DIGITE UM NÚMERO:');
      console.log()
      
       // RESTRIÇÃO DE OPÇÕES-----------------------------------------------------------------------------------------------------
       while(esc2 <0 || esc2>2) {
        console.clear()
       console.log('Resposta inválida!');
       console.log()
       console.log ('JOGADOR: Cada número corresponde a um elemento.\nDigite:\n0 para escolher PEDRA.\n1 para escolher PAPEL.\n2 para escolher TESOURA:\n ')
       esc2 = +prompt('DIGITE UM NÚMERO:'); }
      
         // DETERMINAR VALOR PARA ESCOLHA DO USUÁRIO CORRESPONDENTE AO ÍNDICE DO ARRAY -----------------------------------------------------
         if ( esc2== 0) { 
        console.log('JOGADOR: Você escolheu '+ ppt[0] )
        console.log() 
         }else if ( esc2== 1) {
         console.log('JOGADOR: Você escolheu '+ ppt[1])
         console.log()
                    
         } else if ( esc2 == 2) {
         console.log('JOGADOR: Você escolheu '+ ppt[2])
         console.log()
         }
       
        // NÚMERO ALEATÓRIO  DO COMPUTADOR----------------------------------------------------
  
           prompt('Aperte ENTER para continuar ...\n')
        

        // NUMERO ALEAATÓRIIO
        let variavelAleatoria = Math.floor(Math.random() * 2 + 1)
         console.log()
         console.log("MÁQUINA: Eu escolhi " +ppt[variavelAleatoria])
         console.log()
        //---------------------------------------------------------------------------------------
          //CRIANDO CONDIÇÃO DE VITÓRIA / DERROTA E EMPATE  + CONTAGEM
        /*ppt = ["PEDRA", "PAPEL", "TESOURA"];*/
         
               if(variavelAleatoria == 0)
               {
                   if(esc2 == 0) {console.log("\nEmpatamos!\n")
                   prompt('\nAperte "ENTER" para CONTINUAR ...\n')     
                   console.clear() 
                     empate ++ }
                   else if(esc2 == 1){ console.log("\nEssa você Ganhou!\n")
                   prompt('\nAperte "ENTER" para CONTINUAR ...\n') 
                   console.clear()                 
                   vitUsuario ++}
                   else if(esc2 == 2){console.log("\nMÁQUINA:Essa eu venci\n") 
                   prompt('\nAperte "ENTER" para CONTINUAR ...\n') 
                   console.clear()                  
                   vitComp ++}
               } else if(variavelAleatoria == 1)
               {
           
                 if(esc2 == 0){
                     console.log("\nMÁQUINA:Essa eu venci!\n")
                    prompt('\nAperte "ENTER" para CONTINUAR ...\n')    
                     console.clear()
                     vitComp ++ } 
              else if(esc2 == 1){console.log("\nEmpatamos!\n")
              prompt('\nAperte "ENTER" para CONTINUAR ...\n')            
                           console.clear()
                               empate++ }
             else if(esc2 == 2){ console.log("\nEssa você Ganhou!\n")
             prompt('\nAperte "ENTER" para CONTINUAR ...\n') 
                        console.clear()   
                         vitUsuario ++}
               } else if(variavelAleatoria == 2)
               {
               if(esc2 == 0){console.log("\nEssa você Ganhou!\n")
               prompt('\nAperte "ENTER" para CONTINUAR ...\n')    
                     console.clear()      
                      vitUsuario ++}
                   else if(esc2 == 1){console.log("\nMÁQUINA:Essa eu venci!\n")
                   prompt('\nAperte "ENTER" para CONTINUAR ...\n')   
                                   console.clear()
                                      vitComp ++}
                   else if(esc2 == 2){console.log("\nEmpatamos!\n")
                   prompt('\nAperte "ENTER" para CONTINUAR ...\n')    
                   console.clear()    
                     empate++}  }

        console.log('=====================================')
        console.log(`PLACAR:
        MAQUINA : ${vitComp}
        JOGADOR : ${vitUsuario}`)
        console.log('=======================================')


    } // chave do for 

     // CONDIÇÕES PARA DETERMINAR O VENCEDOR DA PARTIDA
     if(vitComp > vitUsuario){

          console.log ("\n HAHAHA ... FINALMENTE TUDO ACABOU E EU VENCI!\n");

        }
        else if(vitComp < vitUsuario){

          console.log ("\nMANDOU BEM! VOCÊ VENCEU O JOGO\n");
          

        } else if(vitUsuario = vitComp) { 

console.log ("\nWOOOW... TEMOS UM EMPATE!VAMOS JOGARMOS MAIS UMA PARTIDA PRA VER QUEM É O MELHOR?\n");
          
        } 
            


     
  
    if ( i = quantidade) {
        console.log ('FIM DE JOGO!\nQuer jogar mais uma partida? Digite "sim" se quiser jogar novamente ou "nao" para encerrar o jogo.\n')
        questão = prompt('Digite apenas SIM ou NAO: ').toLocaleLowerCase()
        
        while (questão !== 'sim' && questão !== 'nao'){
          console.log ('Resposta inválida!')
          questão = prompt('Digite apenas SIM ou NAO: ').toLocaleLowerCase() 
         } }  
    
         if (questão == 'nao')
       {
        console.log ('Então encerramos por aqui. Até a próxima!')
        break
        }

  } while (questão == 'sim')/* do while*/

