// https://schema.org/QuantitativeValue
import { Thing } from "./thing"

export interface QuantitativeValueThing extends Thing<"QuantitativeValue"> {

}

export interface QuantitativeValueProperties {

}

export interface QuantitativeValue extends QuantitativeValueThing, QuantitativeValueProperties {

}

export type QuantitativeValueReference = QuantitativeValueThing | QuantitativeValue

