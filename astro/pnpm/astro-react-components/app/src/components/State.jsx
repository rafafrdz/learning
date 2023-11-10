import { useState } from 'react'

function State(props) {
    const defaultWord = "default"
    const [word, setWord] = useState(defaultWord)
    const color = word === "default" ? "text-gray-400" : "text-green-500"
    const clas = "text-2xl " + color
    const handlerText = () => {
        const newValue = word === "default" ? "changed" : "default"
        setWord(newValue)
    }
    return (
        <div className="place-content-center flex flex-col w-96 space-y-2 justify-center m-10">
            <div>
                <a className="text-2xl">Word state:</a> <a className={clas}>{word}</a>
            </div>
            <button
                type="button"
                onClick={handlerText}
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-black text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Button
            </button>
        </div>
    )
}

export default State