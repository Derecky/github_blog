import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/theme';
import { StyledToggleGroup, StyledToggleGroupItem } from "./styles";

interface ButtonGroupProps {
    Activate: (dataType: string, dataValue: string)=>void,
}

export function ButtonGroup ({ Activate }:ButtonGroupProps){
    return (        
            <StyledToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
              <StyledToggleGroupItem value="left" aria-label="Left aligned" onClick={()=>Activate("paymentType","credit")}>
                    <CreditCard 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} 
                    />
                    <span>CARTÃO DE CRÉDITO</span>
              </StyledToggleGroupItem>

              <StyledToggleGroupItem 
              value="center" 
              aria-label="Center aligned" 
              onClick={()=>Activate("paymentType","debit")}>
                    <Bank 
                    color = {defaultTheme.purple} 
                    size = {'1rem'} />
                   <span>CARTÃO DE DÉBITO</span>
              </StyledToggleGroupItem>

              <StyledToggleGroupItem value="right" aria-label="Right aligned" onClick={()=>Activate("paymentType","money")}>
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
