import EmploeesListItem from '../employees-list-item/employees-list-item';
import './emploees-list.css';

const EmploeesList = ({data}) => {
    const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
        <EmploeesListItem key={id} {...itemProps}/>
    )
})

console.log(elements)

    return (
        <ul className="app-list list-group">
           {elements}


        </ul>
    )
}

export default EmploeesList;