import CharacterComponent from './components/character-component/character';
import './App.css';
import { RaceModel } from './types/RaceModel';
import { ChangeEvent, SelectHTMLAttributes, useState } from 'react';
import RaceComponent from './components/race-component/racecomponent';
// import { test } from './api/getData';

const raceArr: RaceModel[] = [
  {name: "name1"},
  {name: "name2"}
];

type test = {
  str: string
  num: number
  select: string
};

const App = (): JSX.Element  => {
  const [state, updateState] = useState<test>({str: "asdf", num: 0, select: "orc"})

  const upd = (update: Partial<test>): void => {
    updateState({...state, ...update});
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) => {
    const name: any = e.target.name;
    let upda: any = state;
    upda[name] = e.target.value;

    upd(upda as test)
  }

  return (
    <div className="App">
      <header className="App-header">
        {raceArr.map(x => {
              return <CharacterComponent {...x}/>
            })
        }
        {/* <button onClick={() => test().then(x => console.log(x))}>get data</button> */}
        <form>
          <input type="text" name="str" onChange={(e) => handleChangeInput(e)}/>
          <input type="text" name="test2" />
          <p>{state.str}</p>
          <select onChange={(e) => handleChangeInput(e)} name="select">
            {raceArr.map(x => {
              return <RaceComponent {...x}/>
            })}
          </select>
          <p>{state.select}</p>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
