// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  

  if (email === "admin@example.com" && password === "1234") {
      alert("Login bem-sucedido!");
  } else {
      alert("E-mail ou senha inválidos!");
  }
});

document.getElementById('forgotPassword').addEventListener('click', function() {
  alert("Função de recuperação de senha em desenvolvimento.");
});

document.getElementById('register').addEventListener('click', function() {
  alert("Redirecionando para a página de cadastro.");
});
