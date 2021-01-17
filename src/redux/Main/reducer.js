import Immutable from 'seamless-immutable';
import { array } from 'prop-types';
import { actions } from './actions';

const defaultState = {
  posts: [],
};

export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    // case actions.SHOW_MODAL: {
    //   return state.merge({
    //     modalContent: action.payload.modalContent,
    //     isOpen: true,
    //   });
    // }
    case actions.EXAMPLE_ACTION: {
      return { ...state, firstPropAdded: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const propTypes = {
  posts: array,
};
