import { Text, View } from "react-native";
import { styles } from "./styles";

export function FormStepOne(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Criar sua conta
            </Text>
        </View>
    )
}