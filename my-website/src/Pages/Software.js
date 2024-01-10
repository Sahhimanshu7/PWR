import EnhancedTable from '../Components/Table'
import '../software.css'
import Software1 from './Software-components/Software1';


function Software(){
   
    return(
        <>
        <Software1 />
        <h1>Software Repository</h1>
        <div className='table-container'>

        <EnhancedTable />
        </div>
       
        </>
    )
}

export default Software;