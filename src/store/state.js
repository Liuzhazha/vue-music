import { playMode } from 'common/js/config'

const state = {
	song: {},
	playing: false,
	fullScreen: false,
	playList: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentIndex: -1
}
export default state