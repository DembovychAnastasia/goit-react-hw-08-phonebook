import { LoginForm } from 'components/AuthForm/LoginForm';
import { NavLink } from 'react-router-dom';
import { RegForm } from './Home.styled';

const Login = () => {
  return (
    <RegForm>
      <h2>Log In</h2>
      <LoginForm />
      <p className="TextAuth">
        Don't have an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </RegForm>
  );
};

export default Login;