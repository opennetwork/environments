// https://schema.org/Demand
import { Thing } from "./thing"
import { OfferProperties } from "./offer"

export interface DemandThing extends Thing<"Demand"> {

}

export interface DemandProperties extends OfferProperties {

}

export interface Demand extends DemandThing, DemandProperties {

}

export type DemandReference = DemandThing | Demand
