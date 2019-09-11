import React, { useState } from 'react';
import { TextInput, ButtonPrimary } from '@primer/components';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      Name:
      <TextInput
        value={name}
        aria-label="name"
        onChange={e => setName(e.target.value)}
        name="name"
        id="name"
        placeholder="Your first name"
        type="text"
      />
      <br />
      Email:
      <TextInput
        value={email}
        aria-label="email"
        onChange={e => setEmail(e.target.value)}
        name="email"
        id="email"
        placeholder="ben@otte.io"
        type="email"
        mt={3}
      />
      <br />
      <ButtonPrimary>Submit</ButtonPrimary>
    </form>
  );
}
export default Form;
