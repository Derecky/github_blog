import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { ClientData } from "../../models/ClientData";
import { defaultTheme } from "../../styles/themes/theme"
import { ButtonCardContainer, ButtonContainer, PaymentCardContainer, SpanContainer1, SpanContainer2 } from "./styles"

interface PaymentCardProps {
    currentClientData: ClientData
    ChangeClientData: (dataType: string, dataValue: string)=>void;
}

export function PaymentCard({currentClientData, ChangeClientData}: PaymentCardProps) {
    return (
        <PaymentCardContainer>
            <div className='PaymentCardHeader' >
                <CurrencyDollar color = {defaultTheme.purple} size = {'1.375rem'} />
                <div>
                    <SpanContainer1>Pagamento</SpanContainer1>
                    <SpanContainer2>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</SpanContainer2>
                </div>
            </div>

            <ButtonCardContainer>            
                <ButtonContainer onClick={()=>ChangeClientData("paymentType","credit")}>
                    <CreditCard 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} 
                    />
                    <span>CARTÃO DE CRÉDITO</span>
                    </ButtonContainer>

                <ButtonContainer onClick={()=>ChangeClientData("paymentType","debit")}>
                    <Bank 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} />
                   <span>CARTÃO DE DÉBITO</span>
                    </ButtonContainer>

                <ButtonContainer onClick={()=>ChangeClientData("paymentType","money")}>
                    <Money 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} 
                    />
                    <span>DINHEIRO</span>
                    </ButtonContainer>

            </ButtonCardContainer>
        </PaymentCardContainer>
    )  
}