import React from 'react'
import { connect } from 'react-redux'
import List2 from './List2';

const Tela2 = ({pets}) => {
    const { bixinhos, interagindo, petsFelizes } = pets;

    return (
        <div className="wrapper-tela2">
            {bixinhos.map(bixinho => <List2 bixinho={bixinho}/>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    pets: state.pets
})

export default connect(mapStateToProps,null)(Tela2)