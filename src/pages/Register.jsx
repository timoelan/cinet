import Button from '../components/Button';
import Input from '../components/Input';

function Register(){
  return(
    <>
    <div className='register-container'>
      <h1>Account erstellen</h1>
      <div className="rout-to-login">
        <h4 className='link-to-login'>Hast du schon einen Account? <br/> <a href='/login'>Hier anmelden</a></h4> 
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
export default Register;