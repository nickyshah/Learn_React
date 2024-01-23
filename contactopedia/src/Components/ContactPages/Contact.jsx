import React from 'react'

const Contact = (props) => {
  return (
    <div>
          <button className="btn btn-primary form-control mb-2">{props.contact.name}</button>
    </div>
  )
}

export default Contact