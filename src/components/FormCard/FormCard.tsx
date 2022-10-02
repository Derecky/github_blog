import { useState } from 'react';
import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/theme";
import { FormCardContainer, SpanContainer1, SpanContainer2, FormContainer, InputContainer} from './styles';
import { ClientData } from '../../models/ClientData';

interface FormCardProps {
    currentClientData: ClientData;
    ChangeClientData: (dataType: string, dataValue: string)=>void;
}

export function FormCard ({currentClientData, ChangeClientData}: FormCardProps) {
    //const [postalCode, setPostalCode] = useState<string>();
    //const [street, setStreet] = useState<string>();
    //const [houseNumber, setHouseNumber] = useState<string>();
    //const [complement, setComplement] = useState<string>();
    //const [district, setDistrict] = useState<string>();
    //const [city, setCity] = useState<string>();
    //const [stateAbbreviation, setStateAbbreviation] = useState<string>();

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
                value={currentClientData.postalCode}
                onChange={(e) => {ChangeClientData('postalCode',e.target.value)}}
                />

                <InputContainer 
                placeholder = 'Rua' 
                width = {'35rem'}
                value = {currentClientData.street}
                onChange={(e) => ChangeClientData('street',e.target.value)}
                />

                <InputContainer 
                placeholder = 'Número' 
                width = {'12.5rem'} 
                value = {currentClientData.houseNumber}
                onChange={(e) => ChangeClientData('houseNumber',e.target.value)}
                />

                <div>
                    <InputContainer
                        placeholder = 'Complemento'
                        width = {'21.75rem'}
                        value = {currentClientData.complement}
                        onChange={(e) => ChangeClientData('complement',e.target.value)}
                        />
                    <span className='complementLabel' >
                        Opcional
                    </span>
                </div>

                <InputContainer 
                placeholder = 'Bairro' 
                width = {'12.5rem'} 
                value = {currentClientData.district}
                onChange={(e) => ChangeClientData('district',e.target.value)}
                />

                <InputContainer 
                placeholder = 'Cidade' 
                width = {'17.25rem'} 
                value = {currentClientData.city}
                onChange={(e) => ChangeClientData('city',e.target.value)}
                />

                <InputContainer 
                placeholder = 'UF' 
                width = {'3.75rem'}
                value = {currentClientData.stateAbbreviation}
                onChange={(e) => ChangeClientData('stateAbbreviation',e.target.value)}
                />
            </FormContainer>    
        </FormCardContainer>
    )
}
