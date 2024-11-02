import { Text, TextInput, TextInputProps, View } from "react-native";
import {Feather} from "@expo/vector-icons"
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";
import clsx from "clsx";

type Props = {
    error?: string;
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
}
const Input = forwardRef<TextInput, Props>(({icon, formProps, inputProps, error = ''}, ref) => {
    return(
        <Controller
            render= {({field}) => (
                <View className="w-full">
                <View className="w-full h-14 bg-white flex-row items-center overflow-hidden">
                <View className="h-14 w-14 justify-center items-center overflow-hidden border-r-4 border-r-zinc-100">
                    <Feather 
                        name={icon} 
                        size={24} 
                        color={clsx({
                            ['#dc1637']: error.length > 0,
                            ['#8257e5']: (error.length === 0 && field.value),
                            ['#999']: (!field.value && error.length === 0)
                        })}
                    />
                </View>
                <TextInput 
                    ref={ref}
                    value={field.value}
                    onChangeText={field.onChange}
                    className="flex-1 pl-4 text-lg"
                    {...inputProps}
                />
            </View>
                {error.length > 0 &&
                    <Text className="text-base mt-2 text-red-500">
                    {error}
                </Text>}
            </View>
            )}
            {...formProps}
        />
    )
})
export {Input}