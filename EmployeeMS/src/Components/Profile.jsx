import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const [employee, setEmployee] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get('http://localhost:3000/auth/employee')
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result)
        } else {
          alert(result.data.Error)
        }
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {employee.map((e) => (
        <div key={e.id}>
          {/* <h1>{e.name}</h1> */}
          <center>
            {' '}
            <img
              src={`http://localhost:3000/Images/${e.image}`}
              className='employee_images'
              alt={e.name}
            />
            <table>
              <tr>
                <td>Name:</td>
                <td>{e.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{e.email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{e.address}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>{e.salary}</td>
              </tr>
            </table>
          </center>
        </div>
      ))}
    </div>
  )
}

export default Profile
