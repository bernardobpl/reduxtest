import React, {useState} from 'react'
import List from './List';
import { connect } from 'react-redux'

const Tela = ({curso, tela}) => {

    const { modulos, selectedModulo, selectedAula } = curso

    return (
        <>
            <h1>{tela}</h1>

            <div className="wrapper">  
                {modulos.map(modulo => <List key={modulo.id} modulo={modulo}/>)}
            </div>

            <p>{`Módulo ${selectedModulo.title}`}</p>
            <p>{`Aula ${selectedAula.title}`}</p>
        </>
    )
}

const mapStateToProps = state => ({
    curso: state.curso
})

export default connect(mapStateToProps,null)(Tela)
