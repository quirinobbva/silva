import logo from './cat.svg';
import './index';
import { useState } from 'react';

function App() {

  const [solutions, setSolutions] = useState([
    {
      solution: "Ketosol 100mg/ml (5ml)",
      mg: 100,
      size: 5,
      totalMgBySolution: 500
    },
    {
      solution: "Aspirina 75mg/ml (8ml)",
      mg: 75,
      size: 8,
      totalMgBySolution: 600
    },
    {
      solution: "Paracetamol 50mg/ml (10ml)",
      mg: 50,
      size: 10,
      totalMgBySolution: 500
    }
  ])

  const [result, setResult] = useState(0);
  const [horseWeiht, setHorseWeiht] = useState(0);
  const [dose, setDose] = useState(0);
  const [solution, setSolution] = useState(solutions[0])
  const [params, setParams] = useState(false)

  const paramsHandler = () =>{
    if (params){
      setParams(false);
    }
  }

  const resultHandler= ()=>{
    if(horseWeiht && dose){

      /*console.log(horseWeiht);
      console.log(dose);
      console.log(solution);*/
      
      let weightUnderMg = horseWeiht*dose;
      setResult(((weightUnderMg*solution.size)/solution.totalMgBySolution).toFixed(2))

      setParams(false);
    }else{
      setResult(0);
      setParams(true);
    }
  }


  const horseWeihtHandler = async (event) => {
    paramsHandler();
    setResult(0);
    if(event){
      setHorseWeiht(parseFloat(event.target.value));
    }
  };

  const doseHandler = async (event) => {
    paramsHandler();
    setResult(0);
    if(event){
      setDose(parseFloat(event.target.value));
    }
  };
  
  const solutionHandler = async (event) => {
    if(event){
      if(solutions[event.target.selectedIndex]){
        setResult(0);
        setSolution(solutions[event.target.selectedIndex]);
      }
    }
  };

  return (
    <div className="App">
      <div className='image'>
        <img src={logo} className="app_logo" alt="logo" />
      </div>
      <div className='clip_path'>
          {params
            ?<label className='alert'>Check your data 💡</label>
            :<></>
          }

          <form action="/action_page.php" className='form'>
            <label className='form_label'>Weight KG</label>
            <input className='form_input' type="number" placeholder="Horse weight" onChange={horseWeihtHandler}></input>

            <label className='form_label' for="dose">Dose</label>
            <input className='form_input' type="number" placeholder="MG Dose" onChange={doseHandler}></input>

            <label className='form_label' >Solution</label>
            <select className='form_select' onChange={solutionHandler}>

              {solutions.map(solution => (
                  <option className='select_option' >{solution.solution}</option>
              ))}

            </select>
            <a className='submit' href='#' onClick={resultHandler}>Calculate</a>
          </form>
      <div>
        {
          result ? `Result: ${result} ML` : <></> 
        }
      </div>
      </div>
    </div>
  );
}

export default App;
