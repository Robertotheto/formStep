import { Text, TextInput, View } from "react-native";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { useAccountForm } from "../../hooks/useAccountForm";
import { AccountProps } from "../../contexts/AccountFormContext";
import { useNavigation } from "@react-navigation/native";
import { Progress } from "../../components/Progress";

export function FormStepThree(){
    const {navigate} = useNavigation()
    const {control, handleSubmit, formState: {errors}, getValues} = useForm<AccountProps>()
    const {updateFormData} = useAccountForm()
    const passwordConfirmationRef = useRef<TextInput>(null)

    function handleNextStep(data: AccountProps){
        updateFormData(data)
        navigate('finish')
    }
    function validationPasswordConfirmation(passwordConfirmation: string){
        const {password} = getValues()
        return password === passwordConfirmation || "As senhas deve ser iguais."
    }
    return(
        <View className="flex-1 bg-zinc-100 justify-center items-center p-6 gap-4">
            <Progress progress={90} />
            <Text className="text-2xl font-bold mb-8">
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