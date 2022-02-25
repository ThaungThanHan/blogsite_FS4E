import {AiFillCheckCircle} from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';
const ValidateMessage = ({condition,label}) => {

    return(
        <div style={{display:"flex",alignItems:"center",}}>
            {condition === true
            ?
            <AiFillCheckCircle style={{color:"green"}} size={20} />
            :
            <AiFillCloseCircle style={{color:"red"}} size={20} />
            }
            <p style={{marginLeft:10}}>{label}</p>
        </div>
    )
}

export default ValidateMessage;