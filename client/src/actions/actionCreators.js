/*
 * action types
 */

export const TARGET_INDUSTRY = 'TARGET_INDUSTRY'
export const TARGET_LOCATION = 'TARGET_LOCATION'
export const TARGET_DEMOGRAPHICS = 'TARGET_DEMOGRAPHICS'

/*
 * action creators
 */

export function targetIndustry(text) {
    return { type: TARGET_INDUSTRY, text }
}

export function targetLocation(text) {
    return { type: TARGET_LOCATION, text }
}

export function targetDemographic(text) {
    return { type: TARGET_DEMOGRAPHICS, text }
}
