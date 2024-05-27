import Button from '../components/Button';

function Register(){
  return(
    <>
      <h1>Account erstellen</h1>
      <div className="rout-to-login">
        <h3>Hast du schon einen Account?</h3> 
        <a href='/login'>Hier anmelden</a>
      </div>
      <Button></Button>
    </>
  )
}
export default Register;