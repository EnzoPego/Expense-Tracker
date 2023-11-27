
import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

export const ExpenseChart = () => {

    const { transactions } = useGlobalState()

    const totalIncome = transactions
        .filter(transaction => transaction.amount > 0 )
        .reduce((acc , transaction)=> acc + Number(transaction.amount),0)

    const totalExpenses = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc , transaction) => acc + Number(transaction.amount), 0) *-1

    let totalExpensesPercentage = 0;
    let totalIncomePercentage = 0;

    if (totalIncome !== 0) {
        totalExpensesPercentage = Math.round((totalExpenses / totalIncome) * 100);
        totalIncomePercentage = 100 - totalExpensesPercentage;
    }

    console.log(totalExpensesPercentage)
    console.log(totalIncomePercentage)

    return (
        <VictoryPie
            colorScale={['#e74c3c','#2ecc71']}
            data={[
                { x: "Expenses", y: totalExpensesPercentage },
                { x: "Incomes", y: totalIncomePercentage },
            ]}
            animate={{
                duration: 2000
            }}
            labels={({datum})=> `${datum.y}%`}
            labelComponent={<VictoryLabel
                angle={45}
                style={{fill:'white'}}
            />}
        />
    )
}

