import React, {useState, useEffect} from 'react'
import Money from './Money'
// import IPAddress from './IP_Address'

export default function Body() {
    const [details, setDetails] = useState()
    const [amount, setAmount] = useState()
    const [moneyArrayLS, setMoneyArrayLS] = useState([])
    // const [month, setMonth] = useState('')

    const [noTransactions, setNoTransactions] = useState(true)

    class MoneyClass {
        constructor(details, amount){
            this.details = details
            this.amount = amount
            this.date = new Date().toDateString()

            this.month = this.getMonth()

        }
        
        getMonth(){
            const monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            const dateVar = new Date()
            const month = monthArray[dateVar.getMonth()]
            return month
        }

        
    }

    function getMoney() {
        if(localStorage.getItem('money') === null){
            setNoTransactions(true)
        }

        else {
            try {
                setNoTransactions(false); // Update the state
                const jsonData = JSON.parse(localStorage.getItem('money'));
                const newMoneyArray = []
                jsonData.map(data => newMoneyArray.push(data))
                setMoneyArrayLS(newMoneyArray)
                
            } catch (error) {
                console.log(error)
            }

            
        }
    }
    
    

    const handleClick = () => {
        console.log(typeof localStorage.getItem("money"))

        try {
            if (!localStorage.getItem('money')) {
                const date = new Date().toDateString()
                const moneyArrayLS = [new MoneyClass(details, amount, date)];
                localStorage.setItem('money', JSON.stringify(moneyArrayLS));
            } 
              
            else {
                const jsonData = JSON.parse(localStorage.getItem('money'));
                console.log(jsonData);
                jsonData.push(new MoneyClass(details, amount));
                localStorage.setItem('money', JSON.stringify(jsonData));
                console.log(moneyArrayLS)
            }

        } catch (error) {
            console.log(error)
        }

        // setAmount('')
        // setDetails('')


    }


    useEffect(() => {

        getMoney()

    }, [handleClick])
    

    console.log('Works')




    return (
        <main className='flex md:flex-row xsm:flex-col h-max w-screen'>

            {/* <IPAddress/> */}

            <section id="input-container" className="md:w-6/12  py-6 p-4 m-4 h-max space-y-8 items-center border border-blue-600 rounded border-">

                <h1 className='text-center text-4xl text-blue-700'>Add Transaction</h1>

                <div className='flex justify-center flex-col'>
                    <h3 className='text-2xl py-2 '>Details</h3>
                    <input type="text" onChange={(e) => setDetails(e.target.value)} className='text-2xl p-1 pl-2 border border-blue-600 rounded'/>
                </div>

                <div className='flex justify-center flex-col'>
                    <h3 className='text-2xl py-2'>Amount</h3>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} className='text-2xl p-1 pl-2 border border-blue-600 rounded'/>
                </div>
                <div className='flex justify-center flex-col'>
                    <button onClick={handleClick}  className='p-2 rounded text-xl border-black bg-blue-700 text-white py-2 px-4 hover:bg-blue-600'>Add</button>
                </div>

            </section>

            <section id="list-section" className="md:w-6/12  py-6 space-y-6 h-max border m-4 border-blue-700 rounded h-x flex flex-col justify-center items-center">

                {noTransactions && noTransactions ? 
                    
                    <p className='text-2xl text-blue-700'>No Transactions</p> 
                    
                    : 
                    <div>
                        <h1 className='text-4xl text-blue-700'>Transaction Histroy</h1>
                        <p className="text-center text-xl text-blue-600">Transactions: {moneyArrayLS.length}</p>
                        <p className="text-center text-xl text-blue-600">{'month'}</p> 

                    </div>
                    }
                
                   { 
                   
                   moneyArrayLS && moneyArrayLS.map((money, index) => (


                    <Money key={index} details={money.details} amount={money.amount} date={money.date} monthProp={'month'}/>



                ))}
                
                
                
            </section>
            
        </main>
    )
}
