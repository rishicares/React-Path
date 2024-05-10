import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index'

function App() {
  const [amount,setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('npr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }


  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://diseasecalleddebt.com/wp-content/uploads/2021/01/forex.jpeg)` }}>
     <div className="w-full">div.w-full.max-w-md.mx-auto,<border className="border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
        
        <div className="w-full mb-1">
          <InputBox
        label="from"
        amoint={amount}
        currencyOptions={options}
        onCurrencyChange={(currency)=>setFrom(currency)}
        selectedCurrency={from}

        />
        </div></div></form></border></div>
    </div>
  )
}

export default App
