import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/theme";
import { FormCardContainer, SpanContainer1, SpanContainer2, FormContainer, InputContainer} from './styles';
import { useRouter } from 'next/router';
import { FieldValues, useForm } from "react-hook-form";
import { ClientData } from '../../models/ClientData';

interface FormCardProps {
    currentClientData: ClientData
}

export function FormCard ({currentClientData}: FormCardProps) {
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    function FormCardSubmit(data: FieldValues)
        {   
            router.push({pathname: '/success',query: {...data,paymentType:currentClientData.paymentType}, }, '/success');
        }
     
    return(
        <FormCardContainer>
            <div className='formCardHeader'>
                <MapPinLine color={defaultTheme.yellowDark} size={'1.375rem'} />
                <div >
                    <SpanContainer1> Endereço de Entrega</SpanContainer1>
                    <SpanContainer2> Informe o endereço onde deseja receber seu pedido</SpanContainer2>
                </div>
            </div>

            <FormContainer id='formClientData' method="POST" onSubmit={handleSubmit((data)=>{FormCardSubmit(data);})}>
                <InputContainer
                pattern="[0-9]{5}-[0-9]{3}$"
                {...register("CEP", { required: true })} 
                type="text"
                placeholder = 'CEP'
                width = {'12.5rem'}
                />

                <InputContainer 
                type="text"
                {...register("street", { required: true })} 
                placeholder = 'Rua' 
                width = {'35rem'}
                />

                <InputContainer 
                type="number"
                placeholder = 'Número' 
                {...register("houseNumber", { required: true })} 
                width = {'12.5rem'} 
                />

                <div>
                    <InputContainer
                        placeholder = 'complement'
                        type="text"
                        {...register("Complemento", { required: false })} 
                        width = {'21.75rem'}
                        />
                    <span className='complementLabel' >
                        Opcional
                    </span>
                </div>

                <InputContainer 
                placeholder = 'Bairro' 
                {...register("district", { required: true })} 
                type="text"
                width = {'12.5rem'} 
                />

                <InputContainer 
                placeholder = 'Cidade' 
                {...register("city", { required: true })} 
                type="text"
                width = {'17.25rem'} 
                />

                <InputContainer 
                placeholder = 'UF' 
                {...register("stateAbbreviation", { required: true })} 
                pattern="[a-zA-Z]{2}$"
                type="text"
                width = {'3.75rem'}
                />
            </FormContainer>    
        </FormCardContainer>
    )
}
