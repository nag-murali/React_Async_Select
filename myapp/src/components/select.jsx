import Select from "react-select";
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated();
export function Select_basic () {
    const options = [
        {value: "Peacock", label: "animal"},
        {value: "Shark", label: "Fish"},
        {value: "Sky Blue", label: "Color"}
]
    return (
        <div>
        <Select
        closeMenuOnSelect={false}
        isMulti
        components={animatedComponents}
         options= {options} 
         className={"multiSelect"}/>
        </div>
    )
}