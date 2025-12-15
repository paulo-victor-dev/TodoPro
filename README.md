# 📝 Lista de Tarefas – Fullstack (Django REST Framework + React)

Este é um projeto de **Lista de Tarefas (To-Do List)** desenvolvido com uma arquitetura **fullstack**, separando claramente **backend** e **frontend** no mesmo repositório.

- **Backend (server)**: Django + Django REST Framework (API REST)
- **Frontend (client)**: React + Axios
- **Autenticação**: JWT (JSON Web Token)
- **Controle de acesso**: cada usuário só acessa suas próprias tarefas

## 🚀 **Funcionalidades**

🔐 **Autenticação**
 - Registro de usuário
 - Login com JWT
 - Logout
 - Proteção de rotas
 - Usuário identificado via token

✅ **Tarefas**
 - Criar tarefa
 - Listar tarefas do usuário logado
 - Atualizar tarefa
 - Excluir tarefa
 - Cada usuário só pode acessar suas próprias tarefas

## ⚙️ **Tecnologias Utilizadas**

**Backend**
 - Python
 - Django
 - Django REST Framework
 - djangorestframework-simplejwt
 - SQLite (ambiente de desenvolvimento)

**Frontend**
 - React
 - Axios
 - JavaScript (ES6+)

## ▶️ Como rodar o projeto localmente

**1.** Acesse a pasta do backend:
```
cd server
```
**2.** Crie e ative um ambiente virtual:
```
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```
**3.** Instale as dependências:
```
pip install -r requirements.txt
```
**4.** Rode as migrações:
```
python manage.py migrate
```
**5.** Crie um superusuário (opcional):
```
python manage.py createsuperuser
```
**6.** Acesse a pasta do frontend (client):
```
cd client
```
**7.** Instale as dependências:
```
npm install
```
**8.** Execute o comando:
```
npm run all
```

<hr>

**➡️ Frontend disponível em:**
```
http://localhost:5173
```
**➡️ API disponível em:**
```
http://127.0.0.1:8000/api/v1/
```
