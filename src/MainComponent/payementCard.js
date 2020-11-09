import React,{useState} from 'react';
import { PaymentInputsWrapper,usePaymentInputs } from 'react-payment-inputs';
import styled from "styled-components"
import images from 'react-payment-inputs/images';
export default function PaymentInputs() {
  const [cardNumber,setcardNumber]=useState()
  const [expiryDate,setexpiryDate] =useState()
  const [cvc,setCvc] = useState()
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
    <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
    </PaymentInputsWrapper>
  );
}