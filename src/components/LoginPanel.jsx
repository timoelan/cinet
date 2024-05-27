import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function LoginPanel() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return <>
  
  <Input type="email" value={email} onChange={setEmail}/>
  <Input type="password" value={password} onChange={setPassword} />

  <Button action="register" />

  </>;
}
export default LoginPanel;
