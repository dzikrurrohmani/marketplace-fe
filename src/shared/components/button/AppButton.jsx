import React from 'react';

const AppButton = ({
  children,
  className = 'btn btn-primary',
  onClick,
  disabled,
}) => {
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default AppButton;
