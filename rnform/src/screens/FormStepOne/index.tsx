import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";
import {Progress} from "../../components/Progress"
import { useNavigation } from "@react-navigation/native";
import { AccountProps } from "../../contexts/AccountFormContext";
import { useAccountForm } from "../../hooks/useAccountForm";

export function FormStepOne(){
    const {navigate} = useNavigation()
    const {control, handleSubmit, formState: {errors}} = useForm<AccountProps>()
    const {updateFormData} = useAccountForm()
    const emailRef = useRef<TextInput>(null)

    function handleNextStep(data: AccountProps){
        updateFormData(data)
        navigate("formStepTwo")
    }
    return(
        <View style={styles.container}>
            <Progress progress={30} />
            <Text style={styles.title}>
                Criar sua conta
            </Text>
            <Input 
                icon="user"
                error={errors.name?.message}
                formProps={{
                    name: 'name',
                    control,
                    rules:{
                        required: "Nome é obrigatório"
                    }
                }}
                inputProps={{
                    placeholder: 'Nome',
                    onSubmitEditing: () => emailRef.current?.focus(),
                    returnKeyType: 'next'
                }}
            />
            <Input 
                ref={emailRef}
                icon="mail"
                error={errors.email?.message}
                formProps={{
                    name: 'email',
                    control,
                    rules:{
                        required: "E-mail é obrigatório",
                        pattern: {
                            value: /^[a-z0-9.]+@[a-z0-9]+\.(com(\.br)?)$/i,
                            message: 'E-mail inválido.'
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'E-mail',
                    onSubmitEditing: handleSubmit(handleNextStep)
                }}
            />
            <Button title="Continuar" onPress={handleSubmit(handleNextStep)}/>
        </View>
    )
}