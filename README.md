# 🔐 Login Frontend

Interface de autenticação desenvolvida em **React**, utilizando **Material UI**, integrada a uma API para autenticação de usuários.

Este projeto foi criado com foco em boas práticas, componentização e organização de código no front-end.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React  
- 🎨 Material UI (MUI)  
- 📦 Axios (requisições HTTP)  
- 🔥 JavaScript  

---

## 📂 Estrutura do Projeto
```
src/
├── assets/images
├── components/
│ ├── login_form/
| └── container_image/
├── services/
├── context/
├── hooks/
├── styles/
├── App.js
└── index.js
```

## 🎯 Funcionalidades

- ✅ Campo de e-mail  
- ✅ Campo de senha  
- ✅ Validação básica de formulário  
- ✅ Integração com API de login  
- ✅ Tratamento de erros  
- ✅ Layout responsivo  

---

## 🔌 Integração com API

A aplicação consome uma API própria! https://github.com/VinioVnz/api_login

### Endpoint esperado
POST /login
### Body da requisição

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

### Resposta esperada
```json
{
   "user": {
    "id": 1,
    "email": "usuario@email.com"
  },
  "token": "jwt_token_aqui"
}
```

## 🛠️ Como rodar o projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/VinioVnz/react_login.git
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Rode o projeto
```bash
npm start
```

### O projeto estará disponível em:
```bash
http://localhost:3000
```

## 📌 Melhorias Futuras

### 👤 Criar tela de cadastro

### 🔄 Adicionar recuperação de senha

### 🧪 Implementar testes com Jest e React Testing Library

## 👨‍💻 Autor

### Desenvolvido por Vinicius Bornhofen
