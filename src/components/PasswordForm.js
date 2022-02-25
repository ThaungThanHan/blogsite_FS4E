import {useState, useEffect} from "react";
import {AiFillEye} from 'react-icons/ai';
import {AiFillEyeInvisible} from 'react-icons/ai';
import './PasswordForm.scss';
import * as validators from "./Validators";
import ValidateMessage from './ValidateMessage';
const PasswordForm = () => {
    const [passShown,setPassShown] = useState(false);
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState(null);
    const onClickEye = () => {
        setPassShown(!passShown) // !true = false; !false = true;
    }

    const passwordValidations = [
        {condition:validators.minimumChar(password,8),label:"Minimum of 8 characters!"},
        {condition:validators.hasNumeral(password),label:"Must have at least a number"},
        {condition:validators.hasSpecialChar(password),label:"Must have at least a special char"},
        {condition:validators.hasUpper(password),label:"Must have an uppercase letter"},
        {condition:validators.hasLower(password),label:"Must have an lowercase letter"}
    ]

    const confirmPasswordValidations = {
        condition:validators.isMatching(password,confirmPassword),label:"Must be matching with password above!"
    }

    const validationArray = [];
    validationArray.push(confirmPasswordValidations.condition);
    passwordValidations.map((vali)=>{
        validationArray.push(vali.condition)
    })
    console.log(validationArray)
    useEffect(()=>{
        if(validationArray.includes(false)){    //return true.
            setError(true)
        }else{
            setError(false)
        }
    },[validationArray])

    return(
        <div className="container">
        <div className="form">
            <div className="form--inputdiv">
                <label>Password</label>
                {passShown ?
                <AiFillEye size={20} style={{position:"absolute",marginTop:"2rem",marginLeft:"24rem"}}
                onClick={()=>onClickEye()} />
                :
                <AiFillEyeInvisible size={20} style={{position:"absolute",marginTop:"2rem",marginLeft:"24rem"}}
                onClick={()=>onClickEye()} />
                }
                <input onChange={(e)=>setPassword(e.target.value)} 
                type={passShown ? "text" : "password"} className="passwordForm" placeholder="Enter password" />
                {passwordValidations.map((vali)=>(
                    <ValidateMessage label={vali.label} condition={vali.condition} />
                ))}
            </div>
            <div className="form--inputdiv">
                <label>Confirm Password</label>
                {passShown ?
                <AiFillEye size={20} style={{position:"absolute",marginTop:"2rem",marginLeft:"24rem"}}
                onClick={()=>onClickEye()} />
                :
                <AiFillEyeInvisible size={20} style={{position:"absolute",marginTop:"2rem",marginLeft:"24rem"}}
                onClick={()=>onClickEye()} />
                }
                <input  onChange={(e)=>setConfirmPassword(e.target.value)}  type={passShown ? "text" : "password"}
                 className="passwordForm" placeholder="Enter confirm password" />
                <ValidateMessage label={confirmPasswordValidations.label} condition={confirmPasswordValidations.condition}/>
            </div>
            <div className="form--inputdiv">
            <div className="btn" onClick={error ? null : ()=>alert("Password created!")}>
                <p className="btn--text">Create password</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default PasswordForm;