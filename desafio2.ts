enum Trabalho {
  Vendedor,
  Apresentador,
}

type Humano = {
  nome: string;
  idade: number;
  profissao: Trabalho;
};

let pessoa1: Humano = {
  nome: "Kleber",
  idade: 43,
  profissao: Trabalho.Vendedor,
};

let pessoa2: Humano = {
  nome: "Marina",
  idade: 53,
  profissao: Trabalho.Apresentador,
};

let pessoa3: Humano = {
  nome: "Vicente",
  idade: 31,
  profissao: Trabalho.Vendedor,
};

let pessoa4: Humano = {
  nome: "Roberta",
  idade: 21,
  profissao: Trabalho.Apresentador,
};
