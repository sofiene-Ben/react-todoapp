import { createStore } from 'redux';

// {
//     id: string(unique),
//     content: string,
//     done: boolean
//   }

const todosReducer = (state = [], action) => { 
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'SET_DONE':
            const item = state.find((todo) => todo.id === action.payload);
            return [
                { ...item, done: true },
                ...state.filter((todo) => todo.id !== action.payload)
            ];
        case 'RESET_TODO':
            return [];
        default:
            return state;
    };
 };

 const store = createStore(todosReducer);







// const songsReducer = (state = data, action) => {
//     switch(action.type) {
//         case 'PLAY_SONG':
//           const targetSong = state.find((song) => song.id === action.payload.id);
//           return [
//               ...state.filter((song) => song.id !== action.payload.id),
//               {...targetSong, played: targetSong.played + 1}
//           ];
//         default:
//           return state;
//       };
// };
// const playlistsReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'MAKE_PLAYLIST':
//             return [
//                 ...state,
//                 {
//                     id: Math.random(),
//                     name: action.payload.name,
//                     songs: []
//                 }
//             ];
//         case 'ADD_SONG_TO_PLAYLIST':
//             const targetPlaylist = state.find((playlist) => playlist.id === action.payload.playlistId);
//             return [
//                 ...state.filter((playlist) => playlist.id !== action.payload.playlistId),
//                 {
//                     ...targetPlaylist,
//                     songs :[
//                         ...targetPlaylist.songs,
//                         action.payload.song
//                     ]
//                 }
//             ];
//         case 'DELETE_PLAYLIST':
//             return [...state.filter((playlist) => playlist.id !== action.payload.id)];
//         default:
//             return state;
//     }
// };

// const rootReducer = combineReducers({
//     songs: songsReducer,
//     playlist: playlistsReducer
// });

// const store = createStore(rootReducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: 'PLAY_SONG', payload: { id: 1 } });

// store.dispatch({ type: 'MAKE_PLAYLIST', payload: { name: 'Coolest songs' } });

// const playlistId = store.getState()?.id;

// if (playlistId) {
//     store.dispatch({ Type: 'ADD_SONG_TO_PLAYLIST',
//     payload: { 
//         playlistId,
//         song: {
//             id: Math.random(),
//             title: "Born in winter",
//             artist: "Gojira",
//             played: 0
//         }
//     }
// })

// store.dispatch({
//     type: 'DELET_PLAYLIST',
//     payload: { id: playlistId }
// })

// }

export default store;