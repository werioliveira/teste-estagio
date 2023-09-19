-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Set-2023 às 22:44
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estagio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `enderecos`
--

CREATE TABLE `enderecos` (
  `id` int(11) NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `cep` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `pessoaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `enderecos`
--

INSERT INTO `enderecos` (`id`, `logradouro`, `cep`, `numero`, `cidade`, `pessoaId`) VALUES
(1, 'casa', 444444, 44, 'sao gabriel', 1),
(2, 'casa', 444444, 44, 'sao gabriel1', 1),
(3, 'casa', 444444, 44, 'sao gabriel4', 2),
(4, 'casa', 444444, 44, 'sao gabriel7', 1),
(5, 'casa', 444444, 44, 'sao gabriel7', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoas`
--

CREATE TABLE `pessoas` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `nascimento` date NOT NULL,
  `defaultAddress` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `pessoas`
--

INSERT INTO `pessoas` (`id`, `nome`, `nascimento`, `defaultAddress`) VALUES
(1, 'weri7', '0000-00-00', 2),
(2, 'weri5', '0000-00-00', 4),
(3, 'teste2', '0000-00-00', NULL),
(4, 'weri1', '0000-00-00', 1),
(5, 'teste6', '0000-00-00', NULL),
(6, 'teste7', '0000-00-00', NULL),
(7, 'teste7', '0000-00-00', NULL),
(8, 'teste7', '0000-00-00', NULL),
(9, 'teste7', '2012-01-21', NULL),
(10, 'teste7', '0000-00-00', NULL),
(11, 'teste7', '0000-00-00', NULL),
(12, 'teste7', '2012-01-21', 5),
(13, 'teste12', '2011-01-21', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `enderecos`
--
ALTER TABLE `enderecos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pessoaId` (`pessoaId`);

--
-- Índices para tabela `pessoas`
--
ALTER TABLE `pessoas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fk_defaultAddress` (`defaultAddress`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `enderecos`
--
ALTER TABLE `enderecos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `pessoas`
--
ALTER TABLE `pessoas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `enderecos`
--
ALTER TABLE `enderecos`
  ADD CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`pessoaId`) REFERENCES `pessoas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `pessoas`
--
ALTER TABLE `pessoas`
  ADD CONSTRAINT `pessoas_ibfk_1` FOREIGN KEY (`defaultAddress`) REFERENCES `enderecos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
