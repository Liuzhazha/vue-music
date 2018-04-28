import axios from 'axios'
export function getLayrics(id) {
	return axios.get('http://39.106.114.207:443/lyric', {
		params: {
			id: id
		}
	}).then((res) => {
		if(res.data.lrc == undefined) {
			return Promise.reject()
		} else {
			return Promise.resolve(res.data)
		}
	})
}

	
 export function getHintVal(val){
console.log(val)
 	
		return axios.get('http://39.106.114.207:443/search/suggest',{
			params:{
				keywords:val,
				limit:10,
				offset:0,
			}
		}).then((res)=>{
			console.log(res)
		})


	}