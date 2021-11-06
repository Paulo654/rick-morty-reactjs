import  React, { useEffect, useState} from 'react';

function Personagem(){
    const [valor, setValor] = useState(0);

    useEffect(() => {
        console.log("Valor atualizador");
    }, [valor])
    
    function incrementar(){
        setValor(valor+1);
    }

    return(
        <div>
            <button onClick={incrementar}>
                incrementar
            </button>
            {valor}
        </div>
    );
}
export default Personagem;