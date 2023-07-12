<!DOCTYPE html>
<html>
<head>
  <title>Interface JavaScript</title>
  <style>
    /* Estilos CSS para a interface */
    body {
      font-family: Arial, sans-serif;
    }
    #message {
      color: blue;
      font-weight: bold;
    }
    button {
      padding: 10px 20px;
      background-color: blue;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Interface JavaScript</h1>
  
  <p id="message">Clique no botão para exibir uma mensagem!</p>
  
  <button id="btn">Clique Aqui</button>

  <!-- Seu código JavaScript -->
  <script src="seu_arquivo.js"></script>
</body>
</html>
// Adicione um evento de clique ao botão
document.getElementById("btn").addEventListener("click", function() {
  // Atualize o texto da mensagem
  document.getElementById("message").textContent = "Olá, mundo!";
});
