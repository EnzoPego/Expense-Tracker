import { useState } from "react"
import {useGlobalState} from '../../context/GlobalState'

export const TransactionForm = () => {

 const {addTransacton} = useGlobalState()
 const [description , setDescription] = useState('')
 const [amount , setAmount] = useState(0)

  const onSubmit = (e) =>{
    e.preventDefault()
    //console.log(amount , description)
    addTransacton({
      id: window.crypto.randomUUID(),
      description,
      amount
    })
    setAmount('')
    setDescription('')
  }
  

  return (
    <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Enter a Description"
          onChange={(e)=>setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
          />
          <input type="number" step={0.01} placeholder="00.00"
          onChange={(e)=>setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
          />

          <button className="bg-indigo-700  text-white px-3 py-2 rounded-lg block mb-2 w-full">
            Add Transaction
          </button>
        </form>
       
    </div>
    
  )
}

