import { View } from "react-native";

type Props = {
    progress: number;
}
export function Progress({progress}: Props){
    return(
        <View className="w-full h-1 bg-[#DEDEDE]">
            <View 
                className="h-1 bg-[#8257e5]"
                style={{width: `${progress}%`}}
            />
        </View>
    )
}