import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useAccountForm } from "../../hooks/useAccountForm";
import { AccountProps } from "../../contexts/AccountFormContext";

export function FormStepTwo(){
    const {navigate} = useNavigation()
    const {control, handleSubmit, formState: {errors}} = useForm<AccountProps>()
    const {updateFormData} = useAccountForm()
    const phoneRef = useRef<TextInput>(null)

    function handleNextStep(data: AccountProps){
        updateFormData(data)
        navigate("formStepThree")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Suas informações
            </Text>
            <Input 
                icon="calendar"
                error={errors.birth?.message}
                formProps={{
                    name: 'birth',
                    control,
                    rules:{
                        required: "Data de nascimento é obrigatória",
                        pattern: {
                            value: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                            message: "Data de nascimento inválida"
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Data de nascimento',
                    onSubmitEditing: () => phoneRef.current?.focus(),
                    returnKeyType: 'next'
                }}
            />
            <Input 
                ref={phoneRef}
                icon="phone"
                error={errors.phone?.message}
                formProps={{
                    name: 'phone',
                    control,
                    rules:{
                        required: "Telefone é obrigatório",
                        pattern:{
                            value: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{5}))$/,
                            message: "Telefone inválido"
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Telefone',
                    onSubmitEditing: handleSubmit(handleNextStep)
                }}
            />
            <Button title="Continuar" onPress={handleSubmit(handleNextStep)}/>
        </View>
    )
}