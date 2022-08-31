
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
const projeto = base('projeto')
const buscas = base('buscas')
const equipe = base('equipe')
const login = base('login')

// use este hook para fazer requisições na api do airtable
const useApi = () => ({

    async getSearches() {

        let searches = []

        await buscas.select({
            filterByFormula: `Squad = "${SQUAD_ID}"`,
            sort: [{ field: 'Data', direction: 'asc' }]
        })
        .all()
        .then(records => {
            records.map((record) => {
                searches.push(record.fields)
            })
        })

        return searches
    },
    async getTeam() {

        let team = []

        await equipe.select({
            filterByFormula: `Squad = "${SQUAD_ID}"`,
            sort: [{ field: 'Nome', direction: 'asc' }]
        })
        .all()
        .then(records => {
            records.map((record) => {
                team.push(record.fields)
            })
        })

        return team
    },
    async getAbout() {

        let about = null

        await projeto.select({
            filterByFormula: `Squad = "${SQUAD_ID}"`
        })
        .all()
        .then(records => {about = records[0].fields})

        return about
    },
    async getUser(email) {

        let user = null

        await login.select({
            filterByFormula: `AND({Squad}="${SQUAD_ID}", {Email}="${email}")`
        })
        .all()
        .then(records => { user = records[0].fields})
        .catch(e => { if(e) { user = null } })

        return user
    },
    async createUser(email, password) {

        const user = await this.getUser(email)

        if(!user) {

            const userRecord = {fields: {
                'Squad': SQUAD_ID,
                'Email': email,
                'Senha': password
            }}

            let successCreateUser = null

            login
            .create([userRecord], 
            (err, records) => {
                if(err) { successCreateUser = false }
                else { successCreateUser = true }
            })
           
            return successCreateUser
        }

        // se o usuário já existe
        return null
    },
    async login(email, password) {

        const user = await this.getUser(email)

        if(user) {

            let successLogin = null

            await login.select({
                filterByFormula: `
                AND({Squad}="${SQUAD_ID}", 
                {Email}="${email}", 
                {Senha}="${password}")`
            })
            .all()
            .then(records => { 
                if(records.length > 0) { successLogin = true }
                else { successLogin = false }
            })
            .catch(e => { if(e) { successLogin = false } })
    
            return successLogin
        }

        // se o usuário não existe
        return null
    },
})

export default useApi

