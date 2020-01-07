import { useState } from 'react'

const useLogin = () => {
  const [values, setValues] = useState({})
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: React.SyntheticEvent) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
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

export default useLogin
