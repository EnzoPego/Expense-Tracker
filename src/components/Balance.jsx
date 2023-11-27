
import { useGlobalState } from "../context/GlobalState"

export const Balance = () => {
  const {transactions} = useGlobalState() 

  const totalAmount = transactions.reduce(( acc, transaction ) => acc + Number(transaction.amount),0)

  return (
    <div className="flex justify-between my-6">
      <h3 className="text-2xl font-bold">Your Balance: $</h3>
      <h1 className="text-2xl font-bold">{totalAmount.toFixed(2)}</h1>
    </div>
  )
}





















