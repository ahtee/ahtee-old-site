import { useState } from 'react'
import { navigate } from '@reach/router'

const useForm = () => {
  const [values, setValues] = useState({})
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    navigate(`/`)
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    validated
  }
}

export default useForm
