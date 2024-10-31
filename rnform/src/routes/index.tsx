import {NavigationContainer} from "@react-navigation/native"
import { AccountRoutes } from "./account.route"

export function Routes(){
    return(
        <NavigationContainer>
            <AccountRoutes />
        </NavigationContainer>
    )
}