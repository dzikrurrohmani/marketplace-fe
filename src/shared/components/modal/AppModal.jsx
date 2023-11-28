import './AppModal.css';

const AppModal = ({ children, visible, onHide }) => {
  return (
    <div className={visible ? "mdl-container in" : "mdl-container out"}>
      <div className={visible ? "mdl-content show" : "mdl-content hide"}>
        <div className="x-mark" onClick={onHide}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AppModal;
