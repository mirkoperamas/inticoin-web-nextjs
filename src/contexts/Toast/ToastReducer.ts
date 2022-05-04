type tAction = { type: "add"; payload: any } | { type: "remove"; payload: any };

export const ToastReducer = (state: any, action: tAction) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        ...action.payload,
      };
    case "remove":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          status: false,
        },
      };
    default:
      return state;
  }
};
