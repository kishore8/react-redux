import * as types from './actionTypes';

export function createDish(dish) {
    return { type : types.createDish , dish};
}