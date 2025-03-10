-- Criar o schema
CREATE DATABASE academiaEquilibrio;
USE academiaEquilibrio;

-- Criar a tabela de alunos
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL 
);

-- Criar a tabela de agendamento
CREATE TABLE agendamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT NOT NULL,
    atividade VARCHAR(50) NOT NULL,
    data_hora DATETIME NOT NULL,
    duracao INT NOT NULL,
    nome_instrutor VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id) ON DELETE CASCADE
);

-- Inserir alunos
INSERT INTO alunos (nome, senha) VALUES
('igor', '15243'),
('luiz', '12345'),
('maycon', '54321');

-- Inserir agendamentos para Igor
INSERT INTO agendamento (id_aluno, atividade, data_hora, duracao, nome_instrutor) VALUES
(1, 'Yoga', '2025-03-10 08:00:00', 60, 'João'),
(1, 'Musculação', '2025-03-12 10:30:00', 90, 'Maria'),
(1, 'Pilates', '2025-03-14 07:00:00', 60, 'Ana');

-- Inserir agendamentos para Luis
INSERT INTO agendamento (id_aluno, atividade, data_hora, duracao, nome_instrutor) VALUES
(2, 'Musculação', '2025-03-09 18:00:00', 45, 'Ana'),
(2, 'Yoga', '2025-03-11 07:30:00', 60, 'Ana'),
(2, 'Musculação', '2025-03-13 09:00:00', 90, 'Maria');

-- Inserir agendamentos para Maicon
INSERT INTO agendamento (id_aluno, atividade, data_hora, duracao, nome_instrutor) VALUES
(3, 'Yoga', '2025-03-08 06:00:00', 30, 'João'),
(3, 'Yoga', '2025-03-10 17:00:00', 60, 'João'),
(3, 'Yoga', '2025-03-12 08:00:00', 60, 'João');
