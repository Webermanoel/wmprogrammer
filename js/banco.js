var path = require('path');
var util = require('util');

let emailCadastrado = [];
let senhaCadastrado = [];

function realizarCadastro(){
    let email = prompt("Cadastre um email pessoal no formato válido: ")
    alert('email cadastrado com sucesso')
    let senha = prompt("Cadastre uma senha com até 8 caracteres no formato válido: ")
    alert('Senha cadastrada com sucesso')

    
}

function fazerLogin(){
    alert('Para acessar a conta, favor fazer login com email e senha cadastrados!')
    let emailLogin = prompt('Digite seu email: ')
    if(emailLogin != email){
        alert('email incorreto! digite o email cadastrado')
    }

    let senhaLogin = prompt('Digite sua senha:')
    if(senhaLogin != senha){
        alert('Senha incorreta! digite a senha cadastrada')
    }

    if(emailLogin == email && senhaLogin == senha){
        alert('Login efetuado com sucesso!')
    }
}

function fazerDeposito(){

}

function verExtrato(){
    
}

function fazerSaque(){
    
}

realizarCadastro();
fazerLogin();

