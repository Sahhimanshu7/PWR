import "../../assets/home/main.css";
import Intro from './Intro';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { blue } from "@mui/material/colors";

function Main() {
  return (
    <div className='main' id='home'>
      <Intro />
        <div className="readmore">
          <p className="readmore-1"
          ><ExpandMoreOutlinedIcon sx={{fontSize: 40}}/></p>
          <p className="readmore-2"><ExpandMoreOutlinedIcon sx={{fontSize: 30}}/></p>
          <p className="readmore-3"><ExpandMoreOutlinedIcon sx={{fontSize: 25}}/></p>
        </div> 
    </div>
  )
}

export default Main