import errorMessages from "./messagesEnum"

const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  export default renderErrorMessage;
