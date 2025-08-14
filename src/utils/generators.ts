// Gerador de CPF válido
export function generateCPF(): string {
  // Gera 9 dígitos aleatórios
  const numbers = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  
  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += numbers[i] * (10 - i);
  }
  const firstDigit = ((sum * 10) % 11) % 10;
  numbers.push(firstDigit);
  
  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += numbers[i] * (11 - i);
  }
  const secondDigit = ((sum * 10) % 11) % 10;
  numbers.push(secondDigit);
  
  // Retorna apenas os números, sem formatação
  return numbers.join('');
}

// Gerador de CNPJ válido
export function generateCNPJ(): string {
  // Gera 12 dígitos base aleatórios (8 + 4 da filial)
  const numbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
  numbers.push(0, 0, 0, 1); // Filial 0001
  
  // Calcula o primeiro dígito verificador
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += numbers[i] * weights1[i];
  }
  const remainder1 = sum % 11;
  const firstDigit = remainder1 < 2 ? 0 : 11 - remainder1;
  numbers.push(firstDigit);
  
  // Calcula o segundo dígito verificador
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += numbers[i] * weights2[i];
  }
  const remainder2 = sum % 11;
  const secondDigit = remainder2 < 2 ? 0 : 11 - remainder2;
  numbers.push(secondDigit);
  
  // Retorna apenas os números, sem formatação
  return numbers.join('');
}

// Gerador de nomes aleatórios
const FIRST_NAMES = [
  'Ana', 'Carlos', 'Maria', 'João', 'Fernanda', 'Pedro', 'Juliana', 'Rafael', 
  'Camila', 'Lucas', 'Beatriz', 'Thiago', 'Larissa', 'Felipe', 'Mariana',
  'Gabriel', 'Isabela', 'Bruno', 'Letícia', 'André', 'Gabriela', 'Diego',
  'Natália', 'Rodrigo', 'Amanda', 'Gustavo', 'Caroline', 'Henrique', 'Patrícia',
  'Eduardo', 'Sofia', 'Matheus', 'Vanessa', 'Leonardo', 'Priscila', 'Renato',
  'Daniela', 'Fábio', 'Cláudia', 'Sérgio', 'Érica', 'Paulo', 'Aline', 'Victor',
  'Jéssica', 'Roberto', 'Bianca', 'Antônio', 'Nicole', 'Marcelo', 'Evelyn',
  'Bruna', 'Otávio', 'Débora', 'Luciana', 'Vinícius', 'Tatiane', 'Cristiano',
  'Rita', 'Caio', 'Elaine', 'Maurício', 'Michele', 'Ricardo', 'Helena', 'Yasmin'
];

const LAST_NAMES = [
  'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves',
  'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho',
  'Almeida', 'Lopes', 'Soares', 'Fernandes', 'Vieira', 'Barbosa', 'Rocha',
  'Dias', 'Monteiro', 'Cardoso', 'Reis', 'Araújo', 'Correia', 'Pinto',
  'Moura', 'Medeiros', 'Nogueira', 'Tavares', 'Castro', 'Campos', 'Figueiredo',
  'Moreira', 'Fonseca', 'Batista', 'Cavalcanti', 'Guimarães', 'Mendonça',
  'Siqueira', 'Assis', 'Rezende', 'Borges', 'Magalhães', 'Peixoto', 'Cabral',
  'Duarte', 'Lacerda', 'Barros', 'Brandão', 'Vasconcelos', 'Salvador',
  'Carneiro', 'Amaral', 'Teixeira', 'Cunha', 'Vieira', 'Pacheco', 'Aguiar',
  'Cardim', 'Coutinho', 'Ramos', 'Farias', 'Leite', 'Moraes', 'Freitas',
  'Queiroz', 'Castilho', 'Galdino', 'Sá', 'Bittencourt', 'Teles'
];

export function generateName(): string {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const lastName1 = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  const lastName2 = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  
  return `${firstName} ${lastName1} ${lastName2}`;
}

// Gerador de nomes de empresas
const COMPANY_PREFIXES = [
  'Tech', 'Digital', 'Smart', 'Global', 'Pro', 'Ultra', 'Super', 'Mega',
  'Advance', 'Prime', 'Elite', 'Master', 'Expert', 'Fast', 'Quick', 'Easy'
];

const COMPANY_BASES = [
  'Solutions', 'Systems', 'Consultoria', 'Serviços', 'Tecnologia', 'Inovação',
  'Desenvolvimento', 'Estratégia', 'Comercial', 'Industrial', 'Logística',
  'Marketing', 'Comunicação', 'Design', 'Engenharia', 'Construção'
];

const COMPANY_SUFFIXES = [
  'Ltda', 'S.A.', 'EIRELI', 'ME', 'EPP'
];

export function generateCompanyName(): string {
  const usePrefix = Math.random() > 0.3;
  const prefix = usePrefix ? COMPANY_PREFIXES[Math.floor(Math.random() * COMPANY_PREFIXES.length)] : '';
  const base = COMPANY_BASES[Math.floor(Math.random() * COMPANY_BASES.length)];
  const suffix = COMPANY_SUFFIXES[Math.floor(Math.random() * COMPANY_SUFFIXES.length)];
  
  const name = usePrefix ? `${prefix} ${base}` : base;
  return `${name} ${suffix}`;
}