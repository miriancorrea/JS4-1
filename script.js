function verificaAprovacao()
{
    let nota= document.getElementById("nota").value;
    console.log("Nota inserida:",nota);

    if(nota >= 7)
    {
        document.getElementById("resultado").innerHTML ="Aluno(a) aprovado(a)";
        alert("Aluno(a) aprovado(a)");
    }
    else{
        document.getElementById("resultado").innerHTML ="Alino(a) reprovado(a)";
        alert("Aluno(a) reprovado(a)");
    }

  
}
    