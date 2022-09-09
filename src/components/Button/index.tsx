import type { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import './button.scss';
import { useLocation, useNavigate } from 'react-router-dom';

type ButtonProps = {
  size?: 'small' | 'large';
  children?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, size, disabled }: ButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    switch (location.pathname) {
      case '/':
        navigate('/quiz');
        break;
      case '/quiz':
        navigate('result');
        break;
      case '/result':
        navigate('/');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <button className={classNames('button', size)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
