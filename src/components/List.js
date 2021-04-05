import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import * as CursoActions from "../store/actions/curso"

const List = ({modulo, selectAula}) => {
    const [show, setshow] = useState(false)

    return (
        <div className="list" onClick={()=>setshow(show=>!show)}>
            {modulo.title}
            { show && 
                <ul>
                    {modulo.aulas.map(aula => <li key={aula.id} onClick={()=>selectAula(modulo,aula)}>{aula.title}</li>)}
                </ul>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(CursoActions,dispatch)
    
export default connect(null,mapDispatchToProps)(List);