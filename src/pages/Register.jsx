import Button from '../components/Button';
import Input from '../components/Input';

function Register(){
  return(
    <>
    <div className='register-container'>
      <h1>Account erstellen</h1>
      <div className="rout-to-login">
        <h3>Hast du schon einen Account? <br/> <a href='/login'>Hier anmelden</a></h3> 
      </div>
      <p>Username</p>
      <Input></Input>
      <br />
      <p>Email</p>
      <Input></Input>
      <br />
      <p>Password</p>
      <Input type='password'></Input>
      <br />
      <br />
      <Button></Button>
    </div>
    </>
  )
}
export default Register;