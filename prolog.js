const name = ['x','y','toni','riko','rani','irfan']
const behaviors = ['ayahnya', 'pacarnya', 'kakeknya']

let term = `format input harus 3 kata, yaitu [subject behavior subject] <br>subject yang ada: ${name}
			<br>behavior yang ada: ${behaviors}`
let kata=''
let warning='format inputan salah'

document.getElementById("term").innerHTML=term;			

const jalan = () => {
	let input = document.getElementById("inputan").value	
	
	input = input.split(" ")	
	
	if(input.length < 3 || input.length > 3) {
		document.getElementById("hasil").innerHTML = warning
		return
	}

	let string = {
		name1 : '',
		behavior : '',
		name2 : ''
	}


	name.forEach( element => {
		if(element==input[0]) {
			if(input[0]=='y') {
				kata=warning
				return;
			}
			string.name1=element			
		}
	})

	behaviors.forEach( element => {
		if(element==input[1]) {
			string.behavior=element
		}
	})

	name.forEach( element => {
		if(element==input[2]) {
			if(input[2]=='x') {
				kata=warning
				return;
			}
			string.name2=element			
		}
	})
		

	if(string.name1=='' || string.behavior=='' || string.name2=='') {
		document.getElementById("hasil").innerHTML = warning
		return;
	} else {		

		if(string.behavior=='ayahnya') {
			ayah(string.name1,string.name2)						
		} else if (string.behavior=='pacarnya') {
			pacar(string.name1,string.name2)
		} else if (string.behavior=='kakeknya') {
			kakek(string.name1,string.name2)
		}

		document.getElementById("hasil").innerHTML = kata
	}
}

const ayah = (x='x', y='y') => {
	
	if(x=='x' && y=='y') {
		kata='x= toni && y=riko <br>x= riko && y=irfan'
	} else if(x=='x') {
		if(ayah('toni', y))
			kata='x= toni'
		if(ayah('riko', y))
			kata='x= riko'
	} else if(y=='y') {
		if(ayah(x, 'riko'))
			kata='y=riko'
		if(ayah(x, 'irfan'))
			kata='y= irfan'
	} else if(x=='toni' && y=='riko') {
		kata='true'
		return true
	} else if(x=='riko' && y=='irfan') {
		kata='true'
		return true
	} else {
		return false
	}

}

const pacar = (x, y) => {	
	
	if(x=='x' && y=='y')
		kata='x= irfan, y= rani'
	else if(x=='x') {
		switch(y) {
			case 'rani': kata='x= irfan'
				break;
			case 'irfan': kata='x= rani'
				break;
			default: kata='false'
		}
	} else if(y=='y') {
		switch(x) {
			case 'rani': kata='y= irfan'
				break;
			case 'irfan': kata='y= rani'
				break;
			default: kata='false'
		}
	} else {
		if(x=='irfan' && y=='rani' || x=='rani' && y=='irfan') {
			kata='true'
		} else {
			kata='false'
		}
	}
}

const kakek = (x, y) => {	

	if(ayah(x,'riko') && ayah('riko', y))
		kata='true'
	else if (x=='x' && y=='irfan')
		kata='x= toni'
	else if (x=='toni' && y=='y')
		kata='y= irfan'
	else if (x=='x' && y=='y')
		kata='x= toni, y= irfan'
	else
		kata='false'

}