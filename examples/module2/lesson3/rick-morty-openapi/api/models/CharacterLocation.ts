/* tslint:disable */
/* eslint-disable */
/**
 * Rick and Morty API
 * Access information about characters from Rick and Morty.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CharacterLocation
 */
export interface CharacterLocation {
    /**
     * The name of the character's last known location.
     * @type {string}
     * @memberof CharacterLocation
     */
    name?: string;
    /**
     * Link to the character's last known location.
     * @type {string}
     * @memberof CharacterLocation
     */
    url?: string;
}

/**
 * Check if a given object implements the CharacterLocation interface.
 */
export function instanceOfCharacterLocation(value: object): value is CharacterLocation {
    return true;
}

export function CharacterLocationFromJSON(json: any): CharacterLocation {
    return CharacterLocationFromJSONTyped(json, false);
}

export function CharacterLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterLocation {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function CharacterLocationToJSON(json: any): CharacterLocation {
    return CharacterLocationToJSONTyped(json, false);
}

export function CharacterLocationToJSONTyped(value?: CharacterLocation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'url': value['url'],
    };
}

