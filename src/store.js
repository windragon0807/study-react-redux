import { configureStore, createSlice } from "@reduxjs/toolkit";

/* [ createSlice ]
 * 초기 state, reducer 함수의 객체, slice 이름을 받아
 * 1) reducer 및 2) state에 해당하는 action creator와 action type을 자동으로 생성하는 함수이다.
 * 내부적으로는 createAction 및 createReducer를 사용하므로 불변 업데이트를 사용할 수 있다.
 */
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // redux toolkit은 immer 뒤에서 작동하므로 mutate 방식을 지원해준다.
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

/* [ configureStore ]
 * 더 나은 개발 경험을 위해 store 설정에 몇몇 기본 값을 추가한다.
 */
export default configureStore({ reducer: toDos.reducer });
