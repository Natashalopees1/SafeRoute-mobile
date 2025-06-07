Nomes dos integrantes:
Natasha Lopes
Juan Pablo
Barbara Dias

Link youtube: https://youtu.be/gDvQ7KtEhtE

# 🌪️ SafeRoute - App de Apoio em Desastres Naturais

O **SafeRoute** é um aplicativo mobile criado para auxiliar pessoas em situações de desastres naturais, como enchentes, deslizamentos e incêndios. Ele permite o **registro de alertas** por parte dos usuários e **recomenda casas de apoio seguras e próximas** com base em técnicas de Machine Learning.

---

## 📱 Funcionalidades

- 🔐 **Tela de Login e Cadastro**
  - Autenticação de usuários com armazenamento local (ou futuro backend)
  
- 🏠 **Tela Home**
  - Exibe os **alertas já cadastrados**
  - Lista as **casas de apoio mais próximas** da sua localização

- 👨‍👩‍👧‍👦 **Tela de Integrantes**
  - Mostra os voluntários, membros ou participantes da comunidade

- 🚨 **Tela de Alerta**
  - Cadastro de um novo alerta com:
    - Tipo de desastre (Enchente, Deslizamento, Incêndio)
    - Quantidade de pessoas afetadas
    - Data e hora do ocorrido
    - CEP/localização
  - O app consulta a API e **recomenda automaticamente a casa de apoio ideal**

---

## 🤖 Inteligência Artificial

O app se conecta a uma **API com modelo de Machine Learning** que:

- Analisa variáveis como distância, capacidade da casa, tipo de desastre e vulnerabilidade da região
- Utiliza um modelo Random Forest para prever a **melhor casa de apoio**
- Baseia-se em um histórico de alertas simulados para tomar decisões

---

## ⚙️ Tecnologias Utilizadas

### Mobile:
- [React Native](https://reactnative.dev/)
- [Axios](https://axios-http.com/)
- AsyncStorage para dados locais

### Backend/API:
- [Spring Boot (Java)](https://spring.io/projects/spring-boot)
- [FastAPI (Python)](https://fastapi.tiangolo.com/) com modelo `.pkl` treinado

### Machine Learning:
- Python
- Scikit-learn
- Pandas
- Joblib

---

## 🚀 Como Rodar o Projeto

### 1. Backend (Spring Boot):
- Inicie o projeto Java com suporte a CORS habilitado
- Endpoint: `POST /alertas`

### 2. API Python (opcional):
```bash
uvicorn main:app --reload