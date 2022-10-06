import { CurrencyDollar } from "phosphor-react"
import { ClientData } from "../../models/ClientData";
import { defaultTheme } from "../../styles/themes/theme"
import { PaymentCardContainer, SpanContainer1, SpanContainer2 } from "./styles"
import { ButtonGroup } from "../RadixToggleGroup/RadixToggleGroup";

interface PaymentCardProps {
    currentClientData: ClientData
    ChangeClientData: (dataType: string, dataValue: string)=>void;
}

export function PaymentCard({ChangeClientData}: PaymentCardProps) {
    return (
        <PaymentCardContainer>
            <div className='PaymentCardHeader' >
                <CurrencyDollar color = {defaultTheme.purple} size = {'1.375rem'} />
                <div>
                    <SpanContainer1>Pagamento</SpanContainer1>
                    <SpanContainer2>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</SpanContainer2>
                </div>
            </div>
            <ButtonGroup Activate= {ChangeClientData} />
        </PaymentCardContainer>
    )  
}