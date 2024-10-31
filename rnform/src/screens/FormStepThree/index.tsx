import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";

export function FormStepThree(){
    const {control, handleSubmit, formState: {errors}, getValues} = useForm()
    const passwordConfirmationRef = useRef<TextInput>(null)

    function handleNextStep(data: any){
        console.log(data)
    }
    function validationPasswordConfirmation(passwordConfirmation: string){
        const {password} = getValues()
        return password === passwordConfirmation || "As senhas deve ser iguais."
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Criar sua senha
            </Text>
            <Input 
                icon="key"
                error={errors.password?.message}
                formProps={{
                    name: 'password',
                    control,
                    rules:{
                        required: "Senha é obrigatória",
                        minLength: {
                            value: 6,
                            message: "A senha deve conter pelo menos 6 digitos"
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Senha',
                    onSubmitEditing: () => passwordConfirmationRef.current?.focus(),
                    returnKeyType: 'next',
                    secureTextEntry: true
                }}
            />
            <Input 
                ref={passwordConfirmationRef}
                icon="key"
                error={errors.passwordConfirmation?.message}
                formProps={{
                    name: 'passwordConfirmation',
                    control,
                    rules:{
                        required: "Senha é obrigatória",
                        validate: validationPasswordConfirmation
                    }
                }}
                inputProps={{
                    placeholder: 'Confirme sua senha',
                    onSubmitEditing: handleSubmit(handleNextStep),
                    secureTextEntry: true
                }}
            />
            <Button title="Continuar" onPress={handleSubmit(handleNextStep)}/>
        </View>
    )
}