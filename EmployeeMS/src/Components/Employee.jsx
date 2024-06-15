import React from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
  ;<div className='px-5 mt-3'>
    <div>
      <h3>Employee List</h3>
    </div>
    <Link to='/dashboard/add_employee' className='btn btn-success'>
      Add Employee
    </Link>
    <div className='mt-3'></div>
  </div>
}

export default Employee
