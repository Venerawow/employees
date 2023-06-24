import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {

    const data = [
        {name:"John" , salary:"800", increase: false, id: 1},  //increase:false - 'элемент не активировали
        {name:"Alex" , salary:"3500", increase: true, id: 2},  //increase:true - элемент активировали и он выделился
        {name:"Carl" , salary:"5000", increase: false, id: 3},
    ]

    return ( 
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
              
            </div>
            <EmploeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;