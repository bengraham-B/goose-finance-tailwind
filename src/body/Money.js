import React, { useEffect } from 'react'

export default function Money(props) {    

  return (
    <div className='flex flex-row justify-around border rounded border-blue-600 py-3 px-6 text-xl w-9/12'>
        <h1 className=''>{props.details}</h1>
        <h2>R{props.amount}</h2>
        <h3>{props.date}</h3>
        <h4>{props.month}</h4>
    </div>
  )
}
