const usuariocorreto = "admin";
const senhacorreta = "22";
const maxtentativas = "3";
let logado = false;

for  (let tentativa = 1; tentativa <= maxtentativas; tentativa++) {
     let usuarioinput = prompt (`[tentativa ${tentativa} de ${maxtentativas}]  digite o usuario:`);
     let senhainput = prompt (`[tentativa] $(tentativa) de ${maxtentativas}] digite a senhacorreta:`);
    
     if (usuarioinput) === usuariocorreto && senhainput === senhacorreta) {
        alert ("login efetuado com sucesso! Bem-vindo.");
        logado = true;
        break; 
     }

     if (tentativa < maxtentativas) {
    alert(`dados incorretos! você ainda tem ${maxtentativas - tentativa} tentativa(s). `);
    }
}

if (!logado) {
    alert("número máximo de tentativas excedidos! sua conta foi bloqueada por segurança (e pela nossa também).");
}
