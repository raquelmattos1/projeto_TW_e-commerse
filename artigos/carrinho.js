var resumo = document.getElementById('descricao');
resumo.innerHTML = '<p><strong>Descrição do produto:</strong></p>' +  sessionStorage.descricao  +
' <strong>' + sessionStorage.valor + '</strong>';