import './App.css'
import Weather from './Componants/Weather'
import './bootstrap.min.css'



function App() {

  return (
    <>
    <div className='container'>
      <div><h1 style={{textAlign:'center'}} className='mt-3'>WEATHER APP</h1></div>
      <div  className="row mt-3 border p-3 ">
       <div>
        <form action="">
          <label className='ms-3 fs-2' htmlFor="">Enter the city</label>
          <input className='ms-3 form-control mt-3 w-50' type="text" placeholder='City Name' id='inputcity'/>
          <button  className='ms-3 mt-3 rounded bg-primary'>Search</button>

        </form>
        
       </div>
       <Weather/>
      </div>
    </div>
    </>
  )
}

export default App
