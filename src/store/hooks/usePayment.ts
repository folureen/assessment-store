import React from "react";
import { useSyncExternalStore } from "react";
import createStore from "..";


export interface Payment {
    amount: string;
    payer: string;
    receiver: string;
    comment: string;
}

export const initialPaymentModel: Payment = {
    amount: '',
    payer: '',
    receiver: '',
    comment: ''
}

const paymentModel = createStore<Payment>(initialPaymentModel)




const usePayment = () => {
    const payment = useSyncExternalStore(paymentModel.subscribe, paymentModel.getState)

    return React.useMemo(() => ({
        payment,
        controllers: {
            changePaymentValue: <T>(key: string, value: T) => paymentModel.setState<Payment>({ ...payment, [key]: value }),
            changePaymentData: (payment: Payment) => paymentModel.setState<Payment>(payment)
        }
    }), [payment])
}

export default usePayment