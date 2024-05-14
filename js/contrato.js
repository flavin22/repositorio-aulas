function dados() {
    let nome = document.getElementById("nome").value
    let rg = document.getElementById("rg").value
    let cpf = document.getElementById("cpf").value
    let prof = document.getElementById("prof").value
    let end = document.getElementById("end").value

    document.getElementById("a").innerHTML = `Eu , ${nome}, com o RG ${rg}, e CPF ${cpf}, tenho a profissão de ${prof} e com o endereço ${end}`
}

function mascaras() {
    $(`#rg`).mask(`0000000000-0`)
    $(`#cpf`).mask(`000.000.000-00`)
    $(`#end`).mask(`00000-000`)
}