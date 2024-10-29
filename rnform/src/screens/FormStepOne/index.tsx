import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

export function FormStepOne(){
    const {control} = useForm()
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Criar sua conta
            </Text>
            <Input 
                icon="user"
                formProps={{
                    name: 'name',
                    control
                }}
                inputProps={{
                    placeholder: 'Nome'
                }}
            />
        </View>
    )
}