import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";

// export const fetchTodos = createAsyncThunk(
//   "todos/fetchTodos",
//   async function () {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/users");

//     const dataFetch = await responce.json();
//     return dataFetch;
//   }
// );

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    checked: true,
    status: null,
    error: null,
    todos: [
      {
        id: 1,
        uri: "https://flowers.ua/images/Flowers/315.jpg",
        title: "flower",
      },
      {
        id: 2,
        uri: "https://flowers.ua/images/Flowers/315.jpg",
        title: "flower",
      },
      {
        id: 3,
        uri: "https://flowers.ua/images/Flowers/315.jpg",
        title: "flower",
      },
      {
        id: 4,
        uri: "https://flowers.ua/images/Flowers/315.jpg",
        title: "flower",
      },
      {
        id: 5,
        uri: "https://flowers.ua/images/Flowers/315.jpg",
        title: "flower",
      },
      {
        id: 6,
        uri: "https://flowers.ua/images/Flowers/315.jpg",
        title: "flower",
      },
      {
        id: 7,
        uri: "https://flowers.ua/images/Flowers/315.jpg",
        title: "flower",
      },
    ],
  },
  reducers: {
    checkeds(state, action) {
      state.checked = !state.checked;
    },
    deleteCard(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    desabledCard(state, action) {
      state.todos = state.todos.filter((item) => {
        if (item.id === action.payload) {
          item.disable = !item.disable;
        }
        return item;
      });
    },
  },
  // extraReducers: {
  //   [fetchTodos.pending]: (state, action) => {
  //     state.status = "pending";
  //     state.error = null;
  //   },
  //   [fetchTodos.fulfilled]: (state, action) => {
  //     state.status = "resolved";
  //     state.todos = action.payload;
  //   },
  //   [fetchTodos.rejected]: (state, action) => {
  //     state.status = "";
  //   },
  // },
});

export default toolkitSlice.reducer;
export const { deleteCard, desabledCard, checkeds } = toolkitSlice.actions;
