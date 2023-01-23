import NavBar from "./NavBar";
import {useState} from "react";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function ForgotPassword()
{
	const nav = useNavigate();
	const [un, setUn] = useState("");
	const [ans, setAns] = useState("");

	useEffect (() => {
				const un = localStorage.getItem("un");
				if(un != null)
					nav("/home");
			}, []);

	const hUn = (event) => {setUn(event.target.value);}

	const save = (event) => {
				event.preventDefault();
				const auth = getAuth();
				sendPasswordResetEmail(auth, un)
				.then(res => {
					alert("Check your email");
					nav("/login");
				})
				.catch(err => setAns("issue " + err))
		} 

                 return(
				<>
				<center>
					<NavBar/>
					<h1> Forgot Password </h1>
					<form onSubmit={save}>
						<input type="email" placeholder="enter reg email"
						onChange={hUn}/>
						<br/><br/>
						<input type="submit" value="Reset Password"/>
						<br/><br/>
				      </form>
					  {/*<h1>check ur email</h1>*/}
					 <h1>{ans}</h1>
				</center>
				</>
		);
}
export default ForgotPassword;