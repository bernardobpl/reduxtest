export function selectAula(modulo,aula){
    return {
        type: "SELECT_AULA",
        modulo,
        aula
    }
}