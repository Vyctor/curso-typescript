// Tipo Record
export const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

export type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Tipo required
type PessoaRequired = Required<PessoaProtocol>;

// Tipo partial
type PessoaPartial = Partial<PessoaProtocol>;

// Tipo Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;

// Tipo Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'akldhniouhoadaskdjçkalwh1',
  nome: 'Luiz',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return {
    ...accountData,
    id: _id,
  };
}

export const objeto2: PessoaPick = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
};

console.log(objeto2);
