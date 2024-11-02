import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
}
export function Button({title, ...rest}: Props){
    return(
        <TouchableOpacity {...rest} className="h-14 w-full bg-[#8257e5] justify-center items-center">
            <Text className="text-white text-lg font-bold">{title}</Text>
        </TouchableOpacity>
    )
}