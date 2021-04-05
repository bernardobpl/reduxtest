const INTIAL_STATE = {
    selectedModulo: 'X',
    selectedAula: 'X',
    modulos: [
        { id:1,
          title: "Módulo 1",
          aulas: [
            {id:1, title:"Aula 1"},
            {id:1, title:"Aula 2"},
            {id:1, title:"Aula 3"}
          ]
        },
        { id:2,
          title: "Módulo 2",
          aulas: [
            {id:2, title:"Aula 4"},
            {id:2, title:"Aula 5"},
            {id:2, title:"Aula 6"}
          ]
        },
        { id:3,
          title: "Módulo 3",
          aulas: [
            {id:3, title:"Aula 7"},
            {id:3, title:"Aula 8"},
            {id:3, title:"Aula 9"}
          ]
        }
    ]
}

function curso(state=INTIAL_STATE,action){
    if(action.type==="SELECT_AULA"){
      return {
        ...state,
        selectedModulo: action.modulo,
        selectedAula: action.aula
      }
    }
    return state;
}

export default curso;