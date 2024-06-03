import Button from "../components/Button";
import Input from "../components/Input";
function Login() {
  return (
  <>
     <div className='register-container'>
      <h1>Account erstellen</h1>
      <div className="rout-to-register">
        <h4 className='link-to-register'>Hast du noch keinen Account? <br/> <a href='/register'>Hier Registrieren</a></h4> 
      </div>
      <h3>Username</h3>
      <Input placeholder='Username'></Input>
      <br />
      <h3>Email</h3>
      <Input placeholder='Email'></Input>
      <br />
      <h3>Password</h3>
      <Input type='password' placeholder='Password'></Input>
      <br />
      <br />
      <Button></Button>
    </div>
  </>
  )
}
export default Login;