import { useState } from 'react';
import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/theme";
import { FormCardContainer, SpanContainer1, SpanContainer2, FormContainer, InputContainer} from './styles';

export function FormCard () {
    const [postalCode, setPostalCode] = useState<string>();
    const [street, setStreet] = useState<string>();
    const [houseNumber, setHouseNumber] = useState<string>();
    const [complement, setComplement] = useState<string>();
    const [district, setDistrict] = useState<string>();
    const [city, setCity] = useState<string>();
    const [stateAbbreviation, setStateAbbreviation] = useState<string>();

    return(
        <FormCardContainer>
            <div className='formCardHeader'>
                <MapPinLine color={defaultTheme.yellowDark} size={'1.375rem'} />
                <div >
                    <SpanContainer1> Endereço de Entrega</SpanContainer1>
                    <SpanContainer2> Informe o endereço onde deseja receber seu pedido</SpanContainer2>
                </div>
            </div>

            <FormContainer>
                <InputContainer
                placeholder = 'CEP'
                width = {'12.5rem'}
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                />

                <InputContainer 
                placeholder = 'Rua' 
                width = {'35rem'}
                value = {street}
                onChange={(e) => setStreet(e.target.value)}
                />

                <InputContainer 
                placeholder = 'Número' 
                width = {'12.5rem'} 
                value = {houseNumber}
                onChange = {(e) => setHouseNumber(e.target.value)}
                />

                <div>
                    <InputContainer
                        placeholder = 'Complemento'
                        width = {'21.75rem'}
                        value = {complement}
                        onChange = {(e) => setComplement(e.target.value)}
                        />
                    <span className='complementLabel' >
                        Opcional
                    </span>
                </div>

                <InputContainer 
                placeholder = 'Bairro' 
                width = {'12.5rem'} 
                value = {district}
                onChange = {(e) => setDistrict(e.target.value)}
                />

                <InputContainer 
                placeholder = 'Cidade' 
                width = {'17.25rem'} 
                value = {city}
                onChange = {(e) => setCity(e.target.value)}
                />

                <InputContainer 
                placeholder = 'UF' 
                width = {'3.75rem'}
                value = {stateAbbreviation}
                onChange = {(e) => setStateAbbreviation(e.target.value)}
                />
            </FormContainer>    
        </FormCardContainer>
    )
}
