import { useState } from 'react'
import { navigate } from '@reach/router'

interface IFormValues {
  name: string
  email: string
  phone: string
  agreement: boolean
}

const useForm = () => {
  const [values, setValues] = useState<IFormValues>({
    name: '',
    email: '',
    phone: '',
    agreement: false,
  })
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: React.SyntheticEvent) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    navigate(`/`)
  }

  const handleChange = (event: React.SyntheticEvent) => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    validated,
  }
}

export default useForm
