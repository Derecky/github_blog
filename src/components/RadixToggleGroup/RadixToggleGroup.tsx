import { Bank, CreditCard, Money } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/theme';
import { StyledToggleGroup, StyledToggleGroupItem } from "./styles";

interface ButtonGroupProps {
    Activate: (dataType: string, dataValue: string)=>void,
}

export function ButtonGroup ({ Activate }:ButtonGroupProps){
     
    return (        
            <StyledToggleGroup 
            type="single" 
            value="credit" 
            defaultValue="credit"
            aria-label="Forma de pagamento" 
            >
              <StyledToggleGroupItem 
              value="credit" 
              aria-label="Cartão de Crédito" 
              onClick={()=>{Activate("paymentType","credit");}} 
              form="formClientData">
                    <CreditCard 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} 
                    />
                    <span>CARTÃO DE CRÉDITO</span>
              </StyledToggleGroupItem>

              <StyledToggleGroupItem 
              value="debit" 
              aria-label="Cartão de débito" 
              onClick={()=>Activate("paymentType","debit")}
              form="formClientData">
                    <Bank 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} />
                   <span>CARTÃO DE DÉBITO</span>
              </StyledToggleGroupItem>

              <StyledToggleGroupItem 
              value="money" 
              aria-label="Pagamento em dinheiro" 
              onClick={()=>Activate("paymentType","money")}
              form="formClientData">
                    <Money 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} 
                    />
                    <span>DINHEIRO</span>
              </StyledToggleGroupItem>
            </StyledToggleGroup> 
            )
};

export const ToggleGroup = StyledToggleGroup
export const ToggleGroupItem = StyledToggleGroupItem
