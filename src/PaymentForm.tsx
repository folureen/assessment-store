import React from "react";
import useLanguage from "./store/hooks/useLanguage";
import usePayment, { initialPaymentModel } from "./store/hooks/usePayment";

const styles = {
  maxWidth: "300px",
  padding: "10px",
  margin: "0 auto",
  border: "1px solid #000",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
};

const stylesButton = {
  marginTop: "5px",
  width: "100%",
};

const PaymentForm: React.FC = () => {
  const {
    payment,
    controllers: { changePaymentValue, changePaymentData },
  } = usePayment();
  const { lang } = useLanguage();

  React.useEffect(() => {
    console.log(payment, "payment");
  }, [payment]);

  return (
    <form
      style={styles as any}
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(payment));
      }}
    >
      {/* payer */}
      <label>
        {lang === "RU" ? "Плательщик" : "Payer"}
        <input
          type="text"
          name="payer"
          value={payment.payer}
          onChange={(e) => changePaymentValue(e.target.name, e.target.value)}
        />
      </label>

      {/* receiver */}
      <label>
        {lang === "RU" ? "Получатель" : "Receiver"}
        <input
          type="text"
          name="receiver"
          value={payment.receiver}
          onChange={(e) => changePaymentValue(e.target.name, e.target.value)}
        />
      </label>

      {/* amount */}
      <label>
        {lang === "RU" ? "Сумма" : "Amount"}
        <input
          type="text"
          name="amount"
          value={payment.amount}
          onChange={(e) => changePaymentValue(e.target.name, e.target.value)}
        />
      </label>

      {/* comment */}
      <label>
        {lang === "RU" ? "Комментарий" : "Comment"}
        <input
          type="text"
          name="comment"
          value={payment.comment}
          onChange={(e) => changePaymentValue(e.target.name, e.target.value)}
        />
      </label>

      {/* controllers */}
      <input
        style={stylesButton}
        type="submit"
        value={lang === "RU" ? "Отправить" : "Send"}
      />
      <input
        style={stylesButton}
        type="button"
        value={lang === "RU" ? "Сбросить" : "Reset"}
        onClick={() => changePaymentData(initialPaymentModel)}
      />
    </form>
  );
};

export default PaymentForm;
