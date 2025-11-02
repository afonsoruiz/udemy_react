import { Person } from './Person';
import { people } from "../../../data"

const List = ({person}) => {
    return (
       <Person   person={person}  />
    )
}
export default List