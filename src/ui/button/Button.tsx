import React, { FC } from 'react';
import styles from './Button.module.css';

export interface IButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: FC<IButton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
}) => {

  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={buttonHtmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;