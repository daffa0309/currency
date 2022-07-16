import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currency, setCurrency] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=e743e636b7384b20bdac1f7dd53e0873"
    )
      .then((res) => res.json())
      .then((data) => setCurrency(data.rates))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  },[]);
  let pengurangan = [Number(currency.CAD) * 0.05, Number(currency.EUR) * 0.05, Number(currency.IDR) * 0.05, Number(currency.JPY) * 0.05, Number(currency.CHF) * 0.05, Number(currency.GBP) * 0.05,];
  
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
              <td>
                <h3>Currency</h3>
              </td>
              <td>
                <h3>We Buy</h3>
              </td>
              <td>
                <h3>Exchange Rate</h3>
              </td>
              <td>
                <h3>We Sell</h3>
              </td>
            </tr>
            <tr>
              <td>
                <p>CAD</p>
              </td>
              <td>
                <p>{Number(currency.CAD) + pengurangan[0]}</p>
              </td>
              <td>
                <p>{currency.CAD}</p>
              </td>
              <td>
                <p>{Number(currency.CAD) - pengurangan[0]}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>EUR</p>
              </td>
              <td>
                <p>{Number(currency.EUR) + pengurangan[1]}</p>
              </td>
              <td>
                <p>{currency.EUR}</p>
              </td>
              <td>
                <p>{Number(currency.EUR) - pengurangan[1]}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>IDR</p>
              </td>
              <td>
                <p>{Number(currency.IDR) + pengurangan[2]}</p>
              </td>
              <td>
                <p>{currency.IDR}</p>
              </td>
              <td>
                <p>{Number(currency.IDR) - pengurangan[2]}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>JPY</p>
              </td>
              <td>
                <p>{Number(currency.JPY) + pengurangan[3]}</p>
              </td>
              <td>
                <p>{currency.JPY}</p>
              </td>
              <td>
                <p>{Number(currency.JPY) - pengurangan[3]}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>CHF</p>
              </td>
              <td>
                <p>{Number(currency.CHF) + pengurangan[4]}</p>
              </td>
              <td>
                <p>{currency.CHF}</p>
              </td>
              <td>
                <p>{Number(currency.CHF) - pengurangan[4]}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>GBP</p>
              </td>
              <td>
                <p>{Number(currency.GBP) + pengurangan[5]}</p>
              </td>
              <td>
                <p>{currency.GBP}</p>
              </td>
              <td>
                <p>{Number(currency.GBP) - pengurangan[5]}</p>
              </td>
            </tr>
          </thead>
        </table>
        <p>Rates are based from 1 usd</p>
        <p>Currency Using currencyfreak.com</p>

      </header>
      
    </div>
  );
}

export default App;
