import jose from '../../assets/josePuto.jpeg'
import pamps from '../../assets/pamps.jpeg'
import negao from '../../assets/negao.jpeg'


const INITIAL_STATE = {
    interagir: "",
    petsFelizes: [],
    bixinhos: [
        {   
            id:1,
            nome:"Pamps",
            foto: pamps,
            caracteristicas: [
                {id:1, nome:"Pelo", valor: "Cinza" },
                {id:2, nome:"Temperamento", valor: "Preguiçoso"},
                {id:3, nome:"Biotipo", valor: "Gordo"},
            ]
        },

        {   
            id:2,
            nome:"Josefino",
            foto: jose,
            caracteristicas: [
                {id:1, nome:"Pelo", valor: "Branco" },
                {id:2, nome:"Temperamento", valor: "Puto"},
                {id:3, nome:"Biotipo", valor: "Atlético"},
            ]
        },

        {   
            id:3,
            nome:"Negão",
            foto: negao,
            caracteristicas: [
                {id:1, nome:"Pelo", valor: "Preto" },
                {id:2, nome:"Temperamento", valor: "Carente"},
                {id:3, nome:"Biotipo", valor: "Obeso"},
            ]
        }
    ]
}

function pets(state=INITIAL_STATE, action){
    return state
}

export default pets;