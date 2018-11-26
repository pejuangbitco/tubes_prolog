const name = ['x','y','toni','riko','rani','irfan']
const behaviors = ['ayahnya', 'pacarnya', 'kakeknya']

let term = `format input harus 3 kata, yaitu [subject behavior subject] <br>subject yang ada: ${name}
			<br>behavior yang ada: ${behaviors}`
let kata=''

document.getElementById("term").innerHTML=term;			

const jalan = () => {
	let input = document.getElementById("inputan").value	
	
	input = input.split(" ")	
	
	if(input.length < 3 || input.length > 3) {
		document.getElementById("hasil").innerHTML = 'format inputan salah'
		return
	}

	let name1 = ''
	let behavior = ''
	let name2 = ''

	for (let i = 0; i < input.length; i++) {
		if(i==0) {
			name.forEach( element => {
				if(element==input[i]) {
					name1=element
				}
			})
		} else if (i==1) {
			behaviors.forEach( element => {
				if(element==input[i]) {
					behavior=element
				}
			})
		} else if(i==2) {
			name.forEach( element => {
				if(element==input[i]) {
					name2=element
				}
			})
		}
	}

	if(name1=='' || behavior=='' || name2=='') {
		document.getElementById("hasil").innerHTML = 'format inputan salah'
		return;
	} else {		

		if(behavior=='ayahnya') {
			ayah(name1,name2)						
		} else if (behavior=='pacarnya') {
			pacar(name1,name2)
		} else if (behavior=='kakeknya') {
			kakek(name1,name2)
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
	
	if(x=='x' || y=='y') {
		if (x=='x' && y=='rani')
			kata='x= irfan'
		else if (x=='irfan' && y=='y')
			kata=' y= rani'
		else
			kata='x= irfan, y= rani'
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