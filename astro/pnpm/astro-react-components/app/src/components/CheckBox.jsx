import { useState } from "react";

function CheckBox(props) {

    const defaultValue = false
    const [checked, setChecked] = useState(defaultValue);

    const color = !checked ? "text-gray-400" : "text-green-500"
    const clas = "text-2xl " + color
    const handlerCheck = () => {
        console.log(checked) // output in console browser
        setChecked(!checked)
    }

    return (
        <div className="place-content-center flex flex-col w-96 space-y-2 justify-center m-10">
            <div>
                <a className="text-2xl">Check state:</a> <a className={clas}>{checked ? "checked" : "unchecked"}</a>
            </div>
            <input
                id="id-0"
                type="checkbox"
                checked={checked}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handlerCheck}
            />
            <label htmlFor="id-0" className="sr-only">
                {" "}
                checkbox
            </label>
        </div>
    );
}

export default CheckBox;
