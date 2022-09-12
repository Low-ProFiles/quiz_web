import type { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import './button.scss';

type ButtonProps = {
  size?: 'small' | 'large';
  children?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, size, disabled, ...restProps }: ButtonProps) => {
  return (
    <button className={classNames('button', size)} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
