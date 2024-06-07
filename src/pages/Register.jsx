// Register.js
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function Register() {
  const handleRegisterClick = () => {
    // Hier können Sie die Registrierungshandlung implementieren
    alert('Registrierung abgeschlossen');
  };

  return (
    <>
      <div className="register-container">
        <h1>Account erstellen</h1>
        <div className="rout-to-login">
          <h4 className="link-to-login">
            Hast du schon einen Account? <br />
            <a href="/login">Hier anmelden</a>
          </h4>
        </div>
        <h3>Username</h3>
        <Input placeholder="Username" />
        <br />
        <h3>Email</h3>
        <Input placeholder="Email" />
        <br />
        <h3>Password</h3>
        <Input type="password" placeholder="Password" />
        <br />
        <br />
        <Button className="btn btn-secondary" onClick={handleRegisterClick}>
          ACCOUNT ERSTELLEN
        </Button>
      </div>
    </>
  );
}

export default Register;
