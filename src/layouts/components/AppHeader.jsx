import Button from '@common/components/Button'
import React from 'react'
import {  BsChevronLeft, BsThreeDots } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router'

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation()
  console.log({location})
  return (
    <div className='h-[80px] pt-6 flex items-center justify-around'>
        <Button intent="icon" className="text-primary-300" onClick={()=>navigate(-1)}><BsChevronLeft /></Button>
        <h2>Page Name</h2>
        <BsThreeDots className='size-8 text-primary-300'/>
    </div>
  )
}

export default AppHeader