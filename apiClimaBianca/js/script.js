$(document).ready(function () {

    $('#localizarTemperatura').click(
        function(){
            if($('#cidade').val()=='') {
               alert("Selecione uma cidade");
            }
            else{
                let dados;
                dados={woeid:$('#cidade').val() };
                
                $.post('pesquisaClima.php', dados,function(retornaClima){

                    resultado = retornaClima.split(",");

                    temperatura=resultado[0];
                    descricao=resultado[1];
                    velocidade=resultado[2];
                    
                    $('#temperatura').val(temperatura);
                    $('#descricao').val(descricao);
                    $('#velocidade').val(velocidade);

                });//fim do $.post
            }//fim do else
    });//fim do click no botaoLocalizar
});//fim da função principal