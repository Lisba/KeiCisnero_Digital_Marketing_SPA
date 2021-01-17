export const actions = {
  EXAMPLE_ACTION: 'EXAMPLE_ACTION',
};

export const setExampleAction = (payload) => {
  return {
    type: actions.EXAMPLE_ACTION,
    payload,
  };
};
