import { useState } from "react/cjs/react.development"


export const useForm = ( initialState = {} ) => {
   
    const [values, setValues] = useState(initialState)

    const handleInputChange = ( { target } ) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        })

    }

    return [ values, handleInputChange ]

}
