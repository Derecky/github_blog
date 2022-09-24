import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/theme";
import { FormCardContainer, SpanContainer1, SpanContainer2, FormContainer, InputContainer} from './styles';


export function FormCard () {
    return(
        <FormCardContainer>
            <div className='formCardHeader'>
                <MapPinLine color={defaultTheme.yellowDark} size={22} />
                <div >
                    <SpanContainer1> Endereço de Entrega</SpanContainer1>
                    <SpanContainer2> Informe o endereço onde deseja receber seu pedido</SpanContainer2>
                </div>
            </div>



            <FormContainer>
                <InputContainer
                placeholder = 'CEP' width = {'12.5rem'} />
                <InputContainer placeholder = 'Rua' width = {'35rem'} />
                <InputContainer placeholder = 'Número' width = {'12.5rem'} />
                <div>
                    <InputContainer placeholder = 'Complemento' width = {'21.75rem'}/>
                    <span className='complementLabel' >
                        Opcional
                    </span>
                </div>
                <InputContainer placeholder = 'Bairro' width = {'12.5rem'} />
                <InputContainer placeholder = 'Cidade' width = {'17.25rem'} />
                <InputContainer placeholder = 'UF' width = {'3.75rem'} />
            </FormContainer>    
        

        </FormCardContainer>
    )
}