import { ToggleGroupItemProps } from '@radix-ui/react-toggle-group';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/theme';
import { StyledToggleGroup, StyledToggleGroupItem } from "./styles";

interface ButtonGroupProps {
    paymentType: string,  
    SetPaymentType: (value: string)=>void,
}

export function ButtonGroup ({ paymentType, SetPaymentType }:ButtonGroupProps){
     
    return (
      
            <StyledToggleGroup 
            type="single"
            value={paymentType}
            onMouseUp={(e)=>{
                  e.currentTarget.children[0].className=e.currentTarget.children[0].className.replace(" ToggleGroupItemSelected","");
                  e.currentTarget.children[1].className=e.currentTarget.children[1].className.replace(" ToggleGroupItemSelected","");
                  e.currentTarget.children[2].className=e.currentTarget.children[2].className.replace(" ToggleGroupItemSelected","");
            }}
            onValueChange={(paymentType) => {
            if (paymentType) SetPaymentType(paymentType); 
            }}
            aria-label="Forma de pagamento" 
            >
              <StyledToggleGroupItem 
              value="credit" 
              className='ToggleGroupItemSelected'
              aria-label="Cartão de Crédito" 
              type="button"
              onClick={(e)=>{e.currentTarget.className+=" ToggleGroupItemSelected"}} 
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
              type="button"
              onClick={(e)=>{e.currentTarget.className+=" ToggleGroupItemSelected"}} 
              form="formClientData">
                    <Bank 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} />
                   <span>CARTÃO DE DÉBITO</span>
              </StyledToggleGroupItem>

              <StyledToggleGroupItem 
              value="money" 
              aria-label="Pagamento em dinheiro" 
              type="button"
              onClick={(e)=>{e.currentTarget.className+=" ToggleGroupItemSelected"}}  
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
