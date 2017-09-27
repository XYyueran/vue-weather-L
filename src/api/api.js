import cityinfo from '../data/cityinfo.json'
let left_zero_4 =(str)=>{
	if (str != null && str != '' && str != 'undefined') {
		if (str.length == 2) {
			return '00' + str;
		}
	}
	return str;
}
let unicode = (str)=>{
	var value='';
	for (var i = 0; i < str.length; i++) {
		value += '\\u' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
	}
	return value;
}


export const reconvert = (str)=>{ 
	str = str.replace(/(\\u)(\w{1,4})/gi,function($0){ 
		return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g,"$2")),16))); 
	}); 
	str = str.replace(/(&#x)(\w{1,4});/gi,function($0){ 
		return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g,"$2"),16)); 
	}); 
	str = str.replace(/(&#)(\d{1,6});/gi,function($0){ 
		return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g,"$2"))); 
	}); 
	return str; 
}
let needcityid=(params,cityinfo)=>{
	console.log("1"+cityinfo)
	if(cityinfo.list){
		for(let i = 0; i < cityinfo.list.length; i++){
			let item =  needcityid(params,cityinfo.list[i]);
			if(item){
				return item;
			}
		}
	}
	else{
		console.log("2"+cityinfo)

		if(cityinfo.name === params){
			console.log(params)
			return cityinfo.city_id;
		}
	}
}
export const getCityCode =params =>{
	console.log(unicode(params))
	return needcityid(params,cityinfo)
	// for(let Ciltem in cityinfo.list){
	// 		for(let niltem in cityinfo.list[Ciltem].list){
	// 			if(cityinfo.list[Ciltem].list[niltem].name === params){
	// 				return cityinfo.list[Ciltem].list[niltem].city_id;
	// 			}
	// 		}
	// }
	// return ""

}
