// https://schema.org/PaymentMethod
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface PaymentMethodThing extends Thing<"PaymentMethod"> {

}

export interface PaymentMethod extends PaymentMethodThing {

}

declare global {

    interface EnvironmentThings {
        PaymentMethod: URL | PaymentMethodThing | PaymentMethod
    }

}