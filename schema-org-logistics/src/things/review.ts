// https://schema.org/Review
import { Thing } from "./thing"

export interface ReviewThing extends Thing<"Review"> {

}

export interface ReviewProperties {

}

export interface Review extends ReviewThing, ReviewProperties {

}

export type ReviewReference = ReviewThing | Review

