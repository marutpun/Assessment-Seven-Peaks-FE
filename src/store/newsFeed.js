import { create } from 'zustand';
import axios from 'axios';

const netlifyFuncUri = `/.netlify/functions/guardian`;

export const useNewsFeed = create((set, get) => ({
  results: [],
  bookmark: [],
  isLoading: false,
  isError: false,

  fetchInit: () => set({ isLoading: true }),
  fetchSuccess: (payload) => set({ results: payload, isLoading: false }),
  fetchError: () => set({ results: [], isLoading: false, isError: true }),

  getNews: async () => {
    try {
      get().fetchInit();
      const { data } = await axios.get(netlifyFuncUri);
      get().fetchSuccess(data.response.results);
    } catch (error) {
      get().fetchError();
    }
  },
}));

// // ========== constants ==========
// export const FETCH_INIT = 'FETCH_INIT';
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_ERROR = 'FETCH_ERROR';
// export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK';

// // ========== initialState ==========
// const initialState = {
//   newsFeed: [],
//   bookmark: [],
//   isLoading: false,
//   isError: null,
// };

// // ========== create store ==========
// export const store = createStore(newsFeedReducer, composeWithDevTools(applyMiddleware(thunk)));

// // ========== reducer function ==========
// export default function newsFeedReducer(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_INIT:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case FETCH_SUCCESS:
//       return { ...state, newsFeed: action.payload, isLoading: false };

//     case FETCH_ERROR:
//       return {
//         ...state,
//         isLoading: false,
//         isError: action.payload.error,
//         newsFeed: [],
//       };
//     /**
//      * Add to favorite check duplicate with Array.some()
//      * https://stackoverflow.com/questions/57922307/react-add-user-to-list-of-favorites
//      */
//     case TOGGLE_BOOKMARK:
//       if (!state.bookmark.some((alreadyFavorite) => alreadyFavorite == action.payload)) {
//         return { ...state, bookmark: [...state.bookmark, action.payload] };
//       } else {
//         return {
//           ...state,
//           bookmark: state.bookmark.filter((bookmarkId) => bookmarkId !== action.payload),
//         };
//       }
//     default:
//       return state;
//   }
// }

// // ========== action creators  ==========
// export function fetchInit() {
//   return { type: FETCH_INIT };
// }

// export function fetchSuccess(news) {
//   return { type: FETCH_SUCCESS, payload: news };
// }

// export function fetchError(err) {
//   return { type: FETCH_ERROR, payload: err };
// }

// // ========== action creators middleware ==========
// export function getNews() {
//   return async function (dispatch) {
//     try {
//       dispatch(fetchInit());
//       const { data } = await axios.get(apiUri + process.env.GUARDIAN_API_KEY);
//       dispatch(fetchSuccess(data.response.results));
//     } catch (error) {
//       dispatch(fetchError(error));
//     }
//   };
// }

// export function toggleBookmark(newsId) {
//   return {
//     type: TOGGLE_BOOKMARK,
//     payload: newsId,
//   };
// }
