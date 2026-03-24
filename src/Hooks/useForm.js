import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [FormState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...FormState,
            [name]: value
        })


    }



    return {
        ...FormState,
        onInputChange
    }
}
