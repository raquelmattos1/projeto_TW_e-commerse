function mensagem_formulario(frm_ele, mensagem){
    const mng=frm_ele.querySelector("frm_mng");
    mng.textContent= mensagem;
    mng.classList.remove("frm_mng_sucesso", "frm_mng_erro");
    mng.classList.add('frm_mng_$(type)');
}



document.addEventListener("DOMContentLoaded",()=>{
    const logfrm=document.querySelector("#login");
    const criarcontafrm=document.querySelector("#Criarconta");
    document.querySelector("#criar_conta").addEventListener("click", e=>{
        e.preventDefault();
        logfrm.classList.add("frm_escondido");
        criarcontafrm.classList.remove("frm_escondido");
    });
    document.querySelector("#link_entrar").addEventListener("click", e=>{
        e.preventDefault();
        logfrm.classList.remove("frm_escondido");
        criarcontafrm.classList.add("frm_escondido");
    });
    document.getElementsByClassName("utilizador")

});