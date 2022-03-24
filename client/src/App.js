import './App.css';
import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';


function App() {
  const [refresh, setRefresh] = useState(true);

  const refreshList = () =>{
    setRefresh(!refresh)
}

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/new">
            <Create />
          </Route>
          <Route exact path="/edit/:id">
            <Edit refreshList={refreshList}/>
          </Route>
          <Route exact path="/">
            <Main refresh={refresh}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;