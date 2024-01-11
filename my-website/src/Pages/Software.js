import GitAuto from './Software-components/GitAuto';
import '../software.css'
import Software1 from './Software-components/Software1';


function Software(){
   
    return(
        <>
        <Software1 />
        <h1>Software Repository</h1>
        <div className='table-container'>
            <GitAuto />
        </div>
       
        </>
    )
}

export default Software;