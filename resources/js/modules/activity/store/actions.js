/* ============
 * Actions for the activity module
 * ============
 *
 * The actions that are available on the
 * activity module.
 */

import {
  ACTIVITY_ADD,
  ACTIVITY_UPDATE,
  ACTIVITY_REMOVE,
  ACTIVITY_LIST,
} from './action-types';

export function add(payload) {
  return {
    type: ACTIVITY_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: ACTIVITY_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: ACTIVITY_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: ACTIVITY_LIST,
    payload
  }
}