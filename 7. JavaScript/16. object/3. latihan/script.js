// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas, tarif) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;
	this.tarif = tarif;

	this.penumpangNaik = function(namaPenumpang) {
		if( this.penumpang.length == 0 ) {
			this.penumpang.push(namaPenumpang)
			return this.penumpang;
		} else {
			for( var i = 0; i < this.penumpang.length; i++) {
				// jika ada kursi yang kosong
				if( this.penumpang[i] == undefined ) {
					this.penumpang[i] = namaPenumpang;
					return this.penumpang;
				}
				// jika ada nama yang sama
				else if( this.penumpang[i] == namaPenumpang) {
					console.log(namaPenumpang + ' sudah ada di dalam Angkot!');
					return this.penumpang;
				}
				// jika seluruh kursi terisi
				else if( i == this.penumpang.length - 1 ) {
					this.penumpang.push(namaPenumpang);
					return this.penumpang;
				}
			}
		}
	}

	this.penumpangTurun = function(namaPenumpang, bayar) {
		if( this.penumpang.length == 0 ) {
			return alert("Angkot masih kosong!");
		} else if( this.penumpang.every(item => item === undefined) ) {
			console.log("Angkot tidak ada penumpang!");
			return this.penumpang = [];
		} else {
			for( var i = 0; i < this.penumpang.length; i++ ) {
				if( this.penumpang[i] == namaPenumpang) {
					this.penumpang[i] = undefined;
					if( bayar == this.tarif ) {
						this.kas += this.tarif;
						return this.penumpang;		
					} else if ( bayar > this.tarif ) {
						var kembali = bayar - this.tarif;
						this.kas += this.tarif;
						console.log(namaPenumpang + ' membayar ' + bayar + '\nkembaliannya ' + kembali);
						return penumpang
					}
				}
				// jika tidak ada nama penumpang
				else if( i == this.penumpang.length -1 ) {
					console.log(namaPenumpang + ' tidak ada di dalam Angkot!');
					return this.penumpang;
				}
			}
		}
	}
}

var angkot1 = new Angkot("Alfian Yulianto", ["pajang", "kerten"], [], 0, 2500);
var angkot2 = new Angkot("Sandhika Galih", ["manahan", "jajar"], [], 0, 2500);