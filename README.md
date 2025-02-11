# Formômetro

O **Formômetro** é um projeto open source desenvolvido para auxiliar estudantes de **Engenharia de Software** no acompanhamento do seu progresso acadêmico. A plataforma permite visualizar a carga horária cursada, os créditos obtidos e a porcentagem de integralização do curso, facilitando o planejamento e a organização dos estudos.

## 🎯 Objetivo

O Formômetro tem como principal objetivo fornecer uma ferramenta para que os alunos possam Acompanhar seu progresso para se formar

## 🛠️ Tecnologias

- **Backend**: Python
- **Frontend**: React 
- **Banco de Dados**: SQLite


## 🚀 Como rodar o projeto

### Backend (Python)

```sh
# Clone o repositório
git clone https://github.com/rayenealmeida/Formometro.git
cd Formometro/backend

# Crie um ambiente virtual e ative
python -m venv venv
source venv/bin/activate  # No Windows use `venv\Scripts\activate`

# Instale as dependências
pip install -r requirements.txt

# Rode o servidor
python manage.py runserver  # Django
uvicorn main:app --reload  # FastAPI (se for o caso)
