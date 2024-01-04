const initialState = {
  headLines: [],
};

export default function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "HEADLINES_DATA":
      return {
        ...state,
        headLines: payload,
      };
    default:
      return state;
  }
}
