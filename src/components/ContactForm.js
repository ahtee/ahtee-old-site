import React from 'react'
import { Col, Form } from 'react-bootstrap'
import PrimaryButton from './PrimaryButton'
import useForm from '../hooks/useForm'

function ContactForm() {
  const { values, validated, handleChange, handleSubmit } = useForm()
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            value={values.phone}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          value={values.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="terms"
          label="I agree to allow otte.io to save my contact information."
          value={values.agreement}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <PrimaryButton type="submit">
        <span role="img" aria-label="Send form">
          🚀
        </span>{' '}
        Send
      </PrimaryButton>
    </Form>
  )
}
export default ContactForm
