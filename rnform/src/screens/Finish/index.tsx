import { Text, View } from "react-native";
import { useAccountForm } from "../../hooks/useAccountForm";
import {Confetti} from "react-native-fast-confetti"

export function Finish(){
    const {accountFormData}  = useAccountForm()
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Confetti />
            <Text>
                {accountFormData.name}
            </Text>
            <Text>
                {accountFormData.email}
            </Text>
            <Text>
                {accountFormData.birth}
            </Text>
            <Text>
                {accountFormData.phone}
            </Text>
            <Text>
                {accountFormData.password}
            </Text>
            <Text>
                {accountFormData.passwordConfirmation}
            </Text>
        </View>
    )
}