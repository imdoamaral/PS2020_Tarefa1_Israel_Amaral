
//MODELAGEM DE PESSOA
var Pessoa = function(nome, idade, ocupacao, tipoMoradia, parentesco) {
    this.nome = nome;
    this.idade = idade;
    this.ocupacao = ocupacao;
    this.tipoMoradia = tipoMoradia;
    this.parentesco = parentesco;
};

//METODO DE "AUTENTICACAO"  (faltou encapsular)
Pessoa.prototype.autentica = function () {
    if (this.nome == 'Andre'){
        console.log("Seja bem vindo Andre! Checando IDs ...");
        pessoa2.checaIDs();
        pessoa4.checaIDs();
    }
    else
    console.log("Erro. Voce nao e Andre");
};

//METODO checaIDs (faltou encapsular)
Pessoa.prototype.checaIDs = function() {
    if (this.idade<18)
    console.log(this.nome + " so pode tomar Coca-Cola.");

    else
    console.log(this.nome + " pode tomar cerveja!!!")
};

//INSTANCIAS DO OBJETO PESSOA
var pessoa1 = new Pessoa('Pedro', 20, 'Estudante', 'Republica', 'Irmao de Ana');
var pessoa2 = new Pessoa('Ana', 17, 'Estudante','Republica', 'Irma de Pedro');
var pessoa3 = new Pessoa('Paulo', 23, null, null, null);
var pessoa4 = new Pessoa('Armando', 17, null, null, null);
var pessoa5 = new Pessoa('Andre', null, 'Garcom', null, null);

//CHAMADA DO METODO 'checaIDs' ATRAVES DO METODO 'autentica'
pessoa5.autentica();

//MODELAGEM DE UNIVERSIDADE
var Universidade = function(nome, nomeCurso, quantPeriodos, cargaHoraria) {
    this.nome = nome;
    this.curso = { //o ideal aqui seria fazer uma associacao de classes/objetos
        nomeCurso,
        quantPeriodos,
        cargaHoraria
    }
}
var univ = new Universidade('UFOP', 'EC', 10, 3630);

//MODELAGEM DE REPUBLICA
var Republica = function (nome, idade, quantMoradores) {
    this.nome = nome;
    this.idade = idade;
    this.quantMoradores = quantMoradores;
};
var rep = new Republica('Orfanato', 10, 5);