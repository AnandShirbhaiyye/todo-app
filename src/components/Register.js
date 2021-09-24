import { useState } from "react"
import UserService from "../services/UserService"

function Register(props){
    const registerObj={
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    const[register,setRegister]=useState(registerObj)

    const handleChange=event=>{
        setRegister({...register,[event.target.name]:event.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(register);
        UserService.registerUser(register).then(res=>{
            props.history.push('/login')
        })
    }
    return(
        <div className="center">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingFirstName" placeholder="First Name" name="firstName" value={register.firstName} onChange={handleChange}/>
                    <label htmlFor="floatingFirstName">First Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingLastName" placeholder="Last Name" name="lastName" value={register.lastName} onChange={handleChange} />
                    <label htmlFor="floatingLastName">Last Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"  placeholder="name@example.com" name="email" value={register.email} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Email Address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword"  placeholder="Password" name="password" value={register.password} onChange={handleChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="register">
                    <input className="btn btn-primary" type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Register