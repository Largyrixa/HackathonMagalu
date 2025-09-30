<div align="center">
  <h1>task.er 🚀</h1>
  <strong>Transformando estudos em conquistas através da gamificação e prova social.</strong>
</div>
<br>

<p align="center">
  <img alt="Hackathon" src="https://img.shields.io/badge/Hackathon-Magalu%20Cloud%202025-blueviolet">
  <img alt="Status" src="https://img.shields.io/badge/Status-Protótipo%20Concluído-brightgreen">
  <img alt="Equipe" src="https://img.shields.io/badge/Equipe-typedef%20tones-orange">
</p>

---

## 📖 Sobre o Projeto

O **task.er** é uma aplicação web desenvolvida para o **Hackathon Magalu Cloud 2025**. Inspirado em redes de nicho como Strava e GymRats, nosso projeto aplica a mesma lógica de engajamento social e competição ao universo dos estudos. Sabemos que estudar sozinho pode ser solitário e desmotivador. Por isso, criamos uma plataforma que transforma o ato de aprender em uma atividade social, onde usuários compartilham seu progresso e avaliam as tarefas uns dos outros, fomentando um ambiente de colaboração e superação.

## 🎯 O Problema

A jornada de estudos de milhares de estudantes brasileiros é constantemente impactada por desafios que prejudicam o desempenho acadêmico. Identificamos os principais fatores:

* **🧠 Falta de Foco e Motivação:** A ausência de metas claras e reconhecimento externo leva à perda de interesse.
* **⏳ Procrastinação Crônica:** A dificuldade em iniciar e manter uma rotina consistente de estudos.
* ** Solitude Acadêmica:** A falta de interação social no processo de aprendizagem, especialmente no contexto remoto.

É necessária uma solução moderna, alinhada aos interesses do público jovem e que ataque diretamente essas dores.

## 💡 A Solução: task.er

Criamos uma plataforma interativa que quebra o ciclo da desmotivação com um **ciclo de engajamento** simples e poderoso:

1.  **Publicar e Provar:** O usuário realiza uma tarefa de estudo (um relatório, um resumo, um projeto) e publica na plataforma como um "desafio" concluído.

2.  **Avaliar e Colaborar:** A comunidade entra em ação. Outros usuários analisam a tarefa, oferecem feedback construtivo e atribuem uma nota, validando o esforço do colega.

3.  **Competir e Evoluir:** As avaliações são convertidas em pontos que alimentam um ranking em tempo real. Isso cria uma competição saudável e fornece uma métrica clara de progresso e desenvolvimento.

> O resultado é um ambiente que transforma o estudo, antes solitário, em uma jornada interativa, mensurável e, acima de tudo, motivadora.

## 🛠️ Arquitetura e Tecnologias Aplicadas
Para entregar um protótipo funcional no curto prazo do hackathon, optamos por uma arquitetura moderna e ágil:

* Frontend:
  1. **Framework:** React.js
  2. **Build Tool:** [Vite]

  3. **Descrição:** Uma interface de usuário reativa e dinâmica, permitindo uma experiência de uso fluida e rápida, focada em design responsivo para o task.er.

* Backend (Backend-as-a-Service):
  1. **Serviço:** [Supabase]

  2. **Recursos Utilizados:** [Autenticação de Usuários, Banco de Dados PostgreSQL em Tempo Real, Armazenamento de Arquivos]

  3. **Descrição:** Utilizamos um BaaS para acelerar o desenvolvimento, abstraindo a complexidade da gestão de banco de dados, armazenamento das provas (imagens/PDFs) e autenticação.

* Infraestrutura e Hospedagem (Magalu Cloud):
  1. **Serviço Utilizado:** [VM (Máquina Virtual) - Magalu Cloud]

  2. **Descrição:** A aplicação frontend (build estático do React) foi hospedada em uma Máquina Virtual (VM) da Magalu Cloud. Utilizamos um servidor web (como Nginx ou Node.js) dentro da VM   para servir o aplicativo, garantindo controle total sobre o ambiente de execução e a distribuição do task.er.
