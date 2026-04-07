document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    assunto: document.getElementById("assunto").value,
    mensagem: document.getElementById("mensagem").value,
  };

  console.log("Formulário enviado:", formData);

  alert(
    "Obrigado, " + formData.nome + "! Sua mensagem foi enviada com sucesso.",
  );
  this.reset();
});
