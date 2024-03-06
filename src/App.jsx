import './App.css'
import ChartComponent from './components/ChartComponent'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import Performance from './components/Performance'
import AboutBitcoin from './components/AboutBitcoin'
import Tokenomics from './components/Tokenomics'
import Team from './components/Team'
function App() {


  return (
    <>
    <Navbar/>
    <ChartComponent/>
    {/* <Chart/>  */}
    <Performance/>
    <AboutBitcoin/>
    <Tokenomics/>
    <Team/>
    </>
  )
}

export default App
