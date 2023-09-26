import React from 'react'
import { Link } from 'react-router-dom'
export default function MainHomePage() {
  return (
    <div>
          <button><Link to='/loginpage'>Login-Page</Link></button>
        <button><Link to='/adminpage'>Admin Page</Link></button>
    <button><Link to='/nonadminpage'>Non-Admin Page</Link></button>
    <br />
    <br />
    </div>
  )
}
