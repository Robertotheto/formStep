import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";

export function FormStepOne(){
    const {control, handleSubmit, formState: {errors}} = useForm()
    const emailRef = useRef<TextInput>(null)

    function handleNextStep(data: any){
        console.log(data)
    }
    return(
        <View style={styles.container}>
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
                            value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
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