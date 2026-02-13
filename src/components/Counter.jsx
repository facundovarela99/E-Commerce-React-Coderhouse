import { useEffect } from "react";

export function Counter({counter, setCounter}){

    const handlerSuma = ()=> setCounter(counter + 1);
    
    const handlerResta = ()=> setCounter(counter - 1);

    useEffect(()=>{
        console.log('se ejecutó el efecto')
        return ()=>{
            console.log('se desmontó')
        }
    }, [counter])

    return (
        <div className="flex flex-col w-75">
            <p className="text-center text-2xl">{counter}</p>
            <div className="flex place-content-evenly">
            <button onClick={handlerSuma} className="bg-green-500 px-8 py-3"><strong>+</strong></button>
            <button onClick={handlerResta} className="bg-red-500 px-8 py-3"><strong>-</strong></button>
            </div>
        </div>
    )
}