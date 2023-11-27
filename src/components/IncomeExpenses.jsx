import { useGlobalState } from "../context/GlobalState";

export const IncomeExpenses = () => {

  const { transactions } = useGlobalState();


  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0)

  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc,transaction)=> acc + Number(transaction.amount),0) *-1


  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income :</h4>
        <p>{income}</p>
      </div>

      <div className="flex justify-between my-2">
        <h4>Expense :</h4>
        <p>{expense}</p>
      </div>
    </>
  );
};
