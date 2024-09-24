import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'
import { useState } from 'react'


const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
const dispatch = useDispatch()  


const handleincrementAmount = ()=>{
  if(amount){
// adispatch action with input amountd
dispatch(incrementByAmount(amount))

  }else{
    alert("please fill the form!!!")
  }
} 
  return (
    <div className='border rounded p-5 text-center'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div style={{width:'500px'}} className="d-flex-justify-content-between mt-5">
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning text-light me-5'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger mx-2'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success  ms-5'>Increment</button>

        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
            <input onChange={e=>setAmount(e.target.value)} placeholder='Input Increment Amount' type="text" className='form-control'/>
            <button onClick={handleincrementAmount} className='btn btn-primary ms-3'>Increment By Amount</button>
        </div>
    </div>
  )
}

export default Counter