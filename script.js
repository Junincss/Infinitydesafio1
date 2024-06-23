


const resultado = document.getElementById("resultado")
const button = document.querySelector("#buttonc")
const buttonr = document.querySelector("#buttonr")


button.addEventListener('click', function(){
  const vlHoraTrabalhada = document.querySelector("#v_hora").value;
  const horasTrabalhadasMes = document.querySelector("#qtd_hora").value;
  const salarioBruto = vlHoraTrabalhada * horasTrabalhadasMes;

  const impostorenda = salarioBruto * 0.11;
  const inss = salarioBruto * 0.08;
  const sindicato = (salarioBruto * 0.05);
  let totalDescontos = impostorenda + inss + sindicato;
  let salarioLiquido = salarioBruto - impostorenda - inss - sindicato;


  resultado.innerText= ` Salario bruto R$: ${salarioBruto.toFixed(2)}
  INSS R$ ${inss.toFixed(2)}
  Sindicato: R$ ${sindicato.toFixed(2)}
  Salário líquido: R$ ${salarioLiquido.toFixed(2)}
  O total de descontos foi R$ ${totalDescontos.toFixed(2)}`

})


buttonr.addEventListener('click', function(){
  const vlHoraTrabalhada = document.querySelector("#v_hora");
  const horasTrabalhadasMes = document.querySelector("#qtd_hora");
  resultado.innerText = '';
  vlHoraTrabalhada.innerText = '';
  horasTrabalhadasMes.innerText =''
})