import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Payroll = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform payment processing logic here
    console.log(`Processing payment for ${name} with amount ${amount}`)
    // Reset form fields
    setName('')
    setAmount('')
  }

  return (
    <div className='container'>
      <h1>Payroll</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='amount'>Amount</Label>
          <Input
            type='number'
            name='amount'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount'
            required
          />
        </FormGroup>
        <Button color='primary' type='submit'>
          Process Payment
        </Button>
      </Form>
    </div>
  )
}

export default Payroll
