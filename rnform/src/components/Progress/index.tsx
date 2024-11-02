import { View } from "react-native";

type Props = {
    progress: number;
}
export function Progress({progress}: Props){
    return(
        <View className="w-full h-1 bg-zinc-200">
            <View 
                className="h-1 bg-purple-500"
                style={{width: `${progress}%`}}
            />
        </View>
    )
}