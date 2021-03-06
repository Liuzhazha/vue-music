import * as types from './mutation-types'

const matutaions = {
	[types.SET_SONG](state, song) {
		state.song = song
	},
	[types.SET_PLAYING_STATE](state, flag) {
		state.playing = flag
	},
	[types.SET_FULL_SCREEN](state, flag) {
		state.fullScreen = flag
	},
	[types.SET_PLAYLIST](state, list) {
		state.playList = list
	},
	[types.SET_SEQUENCE_LIST](state, list) {
		state.sequenceList = list
	},
	[types.SET_PLAY_MODE](state, mode) {
		state.mode = mode
	},
	[types.SET_CURRENT_INDEX](state, index) {
		state.currentIndex = index
	},
	[types.SET_LIST_SHOW](state, flag) {
		state.listShow = flag
	},
}
export default matutaions