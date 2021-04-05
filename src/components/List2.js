import React, { useState } from 'react'
import { connect } from 'react-redux'
import { interagir } from '../store/actions/pets'
import { bindActionCreators } from "redux"

const List2 = ({bixinho}) => {
    const [showInput, setshowInput] = useState(false)
    const [inputValue, setinputValue] = useState(false)

    console.log(bixinho.foto);
    return (
        <div className="list2-div">
            <img style={{maxWidth: "100px"}} src={bixinho.foto} alt="Foto do bixinho" />
            <ul className="ul-pets">
                {bixinho.caracteristicas.map(carac => (
                    <li style={{display: "flex"}}>
                        {`${carac.nome}: ${carac.valor}`}

                        {/* { showInput && 
                            <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/>
                        }

                        <button 
                            onClick={()=>{
                                if(showInput){
                                    setshowInput(false)
                                }else{
                                    setshowInput(true)
                                }
                            }}
                        >
                            { showInput ? "Concluir" : "Alterar" }
                        </button> */}
                    </li>
                ))}
            </ul>
            <button onClick={()=>interagir(bixinho)}>Interagir</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

// const mapDispatchToProps = dispatch => 
//     bindActionCreators()

export default connect(mapStateToProps, null)(List2)
