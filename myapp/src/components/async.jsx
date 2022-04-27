import AsyncSelect from 'react-select/async';
import "../App.css"
const data = [
    {value: "Peacock", label: "animal"},
    {value: "Shark", label: "Fish"},
    {value: "Sky Blue", label: "Color"},
    {value: "Hockey", label: "Sports"},
    {value: "India", label: "place"}
];

const filterOptions = (input) => {
    
   return data.filter( (i) => {
     if ( i.label.toLowerCase().includes(input.toLowerCase()) ) {
         return i ;
     }
  })

}
const promiseOptions = (inputValue) => {
   
   return  new Promise ((resolve, reject) => {
       setTimeout( () => {
           resolve(filterOptions(inputValue))
       }, 2000)
    })
}
export function Assync_select () {
    return (
        <AsyncSelect
        isMulti
        defaultOptions={[...data]}
         loadOptions={promiseOptions}
         className={"multiSelect"}
        />
    )
}
