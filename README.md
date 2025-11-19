# 💊 PillOnTime — Gerenciador Inteligente de Medicamentos  
Aplicativo mobile desenvolvido em **React Native + Expo + SQLite**, criado para facilitar o controle de medicamentos, horários e histórico de uso.

O sistema calcula automaticamente as doses, organiza pílulas por dia, exibe histórico de uso, envia notificações e permite editar/remover medicamentos com base em regras bem definidas. 

O App permite ao usuário monitorar sua saúde com hábitos que irão combater o esquecimento de algo tão importante à vida.

![Static Badge](https://img.shields.io/badge/Nodejs-0de10d?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Typescript-0072b9?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/React_Native-37a0e1?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Expo-000?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Zod-939ca1?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Android-30ad62?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Prettier-bda60f?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/SQLite-0f23bd?style=for-the-badge)


## 🚀 Tecnologias Utilizadas

- **React Native (Expo)**
- **TypeScript**
- **SQLite (expo-sqlite)**
- **Zustand** para gerenciamento de estado
- **Context API**
- **Zod** para validação
- **AsyncStorage** para persistência de tema
- **Expo Notifications**
- **React Navigation**
- **Expo Router**
- **Stylesheet**


## 🧠 Principais Funcionalidades

### ✔ Cadastro de medicamentos
- Nome, quantidade, unidade, frequência e observações (opcional)  
- Validação completa com **Zod**

### ✔ Cálculo automático de doses
Cada medicamento gera automaticamente:

- Intervalos baseados na frequência  
- Tabela de horários  
- Lista de doses para o dia  
- Organização automática por data

### ✔ Histórico de medicamentos
- Exibe medicamentos do dia anterior  
- Mostra medicamentos já tomados  
- Armazena tudo em **SQLite**

### ✔ Edição e exclusão
- Atualiza dados  
- Recalcula doses  
- Remove histórico e pílulas associadas

### ✔ Agenda diária
- Separação por “Hoje”, “Amanhã”, ou data específica  
- Filtragem rápida por horários

### ✔ Tema claro / escuro (Dark Mode)
- Persistência com AsyncStorage  
- Context API estruturado

### ✔ Notificações locais
- Envio de notificações nos horários de dose  
- Cancelamento automático ao deletar medicamento



## 🏛 Arquitetura do Projeto

O projeto foi estruturado em camadas, separando responsabilidades:

```
app/              → Telas da aplicação
assets/
    styles/           → Estilização das telas
    images/           → Imagens, ícones, etc.
src/
    components/       → Componentes reutilizáveis
    config/           → Configuração do banco SQLite
    data/             → Dados repetidos que servem a aplicação   
    hooks/            → Hooks customizados
    models/           → Schemas, classes, etc.
    services/         → Lógica de negócio + sqlite
    store/            → Zustand (estado global)
    theme/            → Contexto de tema e estilos
    types/            → Tipos e entidades
````

### 📌 Camada de Serviços

- `pillService.ts` — CRUD completo das pílulas  
- `historyService.ts` — Gerencia tomadas, histórico e exclusões  
- `notificationService.ts` — Agendamento e cancelamento de notificações  
- `generateHours.ts` - Geração de horas para preenchimento do componente de Select

### 📌 Store (Zustand)

- Lista de pílulas
- Lista de pílulas do dia
- Lista de históricos
- Contador de remédios (global)
- Contador de remédios do dia
- Contador de remédio tomados

## 📦 Instalação e Execução

### 1️⃣ Clonar repositório
```bash
git clone https://github.com/Leonardobern10/Pill_On_Time.git
cd Pill_On_Time
````

### 2️⃣ Instalar dependências

```bash
npm install
```

ou

```bash
yarn
```

### 3️⃣ Iniciar o projeto

```bash
npm start
```

### 4️⃣ Executar no dispositivo físico
É necessário fazer o download do aplicativo **Expo Go** disponível na Play Store para dispositivos Android.

1. Ao iniciar o projeto, um **QR CODE** será exibido na tela.
2. O usuário deve abrir o aplicativo **Expo Go**
3. Selecionar a opção Scan QR e apontar
4. Apontar a câmera para o QR CODE exibido na tela

   4.1 Ou, digitar o endereço disponivel na tela, na opção Enter URL
6. Automaticamente o aplicativo será executado no dispositivo.


## 🗃 Banco de Dados (SQLite)

O app cria automaticamente as tabelas:

* `pills` – medicamentos cadastrados
* `histories` – doses tomadas


Cada dose é armazenada para facilitar consulta, histórico e notificações.


## 📂 Estrutura das Tabelas

### pills

| campo    | tipo    |
| -------- | ------- |
| id       | integer |
| name     | text    |
| quantity | number  |
| unid     |  text   |
| freq     | text    |
| hour     | text    |
| date     | text    |
| obs      | text    |
|created_at| date    |

### histories

| campo  | tipo    |
| ------ | ------- |
| id     | integer |
| pillId | integer |
| date   | text    |
| time   | text    |
| taken  | boolean |



## ⚙️ Scripts

```bash
npm start       # Executa o projeto Expo
npm run android # Executa no Android
npm run ios     # Executa no iOS (macOS)
npm run lint    # Lint do projeto
```



## 🧩 Exemplos de Código

### Gerando horários automaticamente

```ts
export const generateHours = (end: number): string[] => {
  const hours: string[] = [];

  for (let h = start; h <= end; h++) {
    const hour = h.toString().padStart(2, "0");
    hours.push(`${hour}:00`);
    hours.push(`${hour}:30`);
  }

  return hours;
};
```

### Inserindo um medicamento

```ts
await addPill({
  name: "Ibuprofeno",
  quantity: 2,
  unid: "comprimidos",
  freq: "1x ao dia",
  hour: "14:00",
  date: "2025-11-21",
  obs: "Tomar após almoço"
});
```



## 🖼 Screenshots (opcional)

```
/docs/screenshots/home.png  
/docs/screenshots/history.png  
/docs/screenshots/form.png  
```




## 🤝 Contribuindo

Contribuições são bem-vindas!
Para contribuir:

1. Faça um fork
2. Crie uma branch (`feature/nova-feature`)
3. Faça commits claros
4. Abra um Pull Request 🎉


## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar e modificar.



## 👨‍💻 Autor

Projeto desenvolvido por **Leonardo Bernardo**

Estudante de Engenharia de Software | Desenvolvedor Full Stack

![Static Badge](https://img.shields.io/badge/LinkedIn-00F?style=for-the-badge&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fleonardobernardo-dev%2F)
![Static Badge](https://img.shields.io/badge/Portf%C3%B3lio-252525?style=for-the-badge&link=https%3A%2F%2Fportfolio-leonardo25.vercel.app%2F)
