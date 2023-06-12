import { RegisterForm } from 'components/AuthForm/RegisterForm';
import { NavLink } from 'react-router-dom';
import { RegForm } from './Home.styled';

const Register = () => {
  return (
    <RegForm>
      <h2>Sing up</h2>
      <RegisterForm />
      <p className="TextAuth">
      Already have an account? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </RegForm>
  );
};

export default Register;