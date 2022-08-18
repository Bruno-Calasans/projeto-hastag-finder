
import Airtable from 'airtable'
const {API_KEY, BASE_KEY, SQUAD_ID} = env

//console.log(API_KEY,  BASE_KEY, SQUAD_ID);

/*
* API_KEY => precisa disso para se conectar à Airtable
* BASE_KEY => chave da planilha
* SQUAD_ID => id do nosso grupo (precisaremos disso para filtar os registros das tabelas)
*/

// planilha
const base = new Airtable({apiKey: API_KEY}).base(BASE_KEY);

// tabelas
const projetos = base('projeto')
const buscas = base('puscas')
const equipe = base('equipe')
const login = base('login')

// use este hook para fazer requisições na api do airtable
export const seApi = () => ({

    example() {
        projetos
        .select()
        .all()
        .then(records => console.log(records))
    },
  
})


