"use client"
import React from 'react'
import { Puff } from 'react-loader-spinner'

type props = {
    loaderText: string
}

export default function Loader({loaderText} : Readonly<props>) {
    return (
        <div>
            <Puff visible={true} height={100} width={100} color='#3E4095'></Puff>
            <br /><span>{ loaderText }</span>
        </div>
    )
}

// Los componentes tambien se puede definir con un functional componente (FC)
// - Define el tipo de objeto de retorno
// - Define directamente que props va a recibir
// - Permite el uso de childrens dentro del componente
// const Loader : React.FC<props> = ({loaderText}) => {
//     return (
//         <div>
//             <Puff visible={true} height={100} width={100} color='#3E4095'></Puff>
//             <br /><span>{ loaderText }</span>
//         </div>
//     )
// }

// export default Loader;
