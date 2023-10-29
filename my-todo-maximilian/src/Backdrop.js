import React from 'react'

export default function ({onCancel }) {

 
  return (
    <div className='backdrop' onClick={onCancel()}></div>
  )
}
