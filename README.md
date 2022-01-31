# dio-url-shortener

Cria novo URL pequeno, baseado em um URL fornecido pelo usuário. Microserviço com mensagens em Json.

## Como funciona

Foi utilizado o hash do url original para criar uma versão compacta. O hash, o novo url criado e o url original são salvos em um servidor Mongo DB para consulta como um dicionário. O microserviço usa um verbo HTML Get para retornar o url original partindo do hash longo, e outro verbo HTML Post para enviar o url original para obter a verão minimizada.

Baseado [neste projeto](https://github.com/alexiadorneles/url-shortener-dio).