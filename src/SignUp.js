import NavBar from "./NavBar";

import { useState} from "react";

import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUp()
{

const nav = useNavigate();

useEffect( () => {
	const un = localStorage.getItem("un");
	if(un != null)
		nav("/home");
}, []);

const [un,setUn] = useState("");

const [pw1,setPw1] = useState("");

const [pw2,setPw2] = useState("");

const [ans,setAns] = useState("");

const hUn = (event) => { setUn(event.target.value); } 
const hPw1 = (event) => { setPw1(event.target.value); }

const hPw2 = (event) => { setPw2(event.target.value); }



const save = (event) => {

event.preventDefault(); 
if (pw1 == pw2)
{
const auth=getAuth();

createUserWithEmailAndPassword (auth, un, pw1)
.then(res=> nav("/login"))

.catch(err => setAns("issue" + err))

}
else
{

setAns("passwords did not match ");
}
}
return(
<>

<center>

<NavBar/>

<h1> SignUp </h1>

<form onSubmit={save}>

<input type="email" placeholder="enter reg email"

onChange={hUn} />

<br/><br/>

<input type="password" placeholder="enter password"
onChange={hPw1}/>

<br/><br/>

<input type="password" placeholder="enter password"

onChange={hPw2}/>

<br/><br/>

<input type="submit" value="Register"/> 
<br/><br/>

</form>

<h1> {ans } </h1>

</center>

</>


);
}

export default SignUp;



























