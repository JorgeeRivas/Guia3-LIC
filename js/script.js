const botonnumero = document.getElementsByName('numero');
//console.log(botonnumero);
const botonoperacion = document.getElementsByName('operacion');
const botonigual = document.getElementsByName('igual')[0];
const botonborrar = document.getElementsByName('borrar')[0];
const raiz = document.getElementsByName('raizOP')[0];
const inverso = document.getElementsByName('inversoOP')[0];
const cuadrado = document.getElementsByName('cuadradoOP')[0];
var resultado = document.getElementById('resultado');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonnumero.forEach(function(boton){
	boton.addEventListener('click', function(){
		agregarnumero(boton.innerText);
		
	})
});

botonoperacion.forEach(function(boton){
	boton.addEventListener('click', function(){
		selectOperacion(boton.innerText);
		
	})
});

botonigual.addEventListener('click', function(){
	calcular();
	actualizar();
});

botonborrar.addEventListener('click', function(){
	clear();
	actualizar();
});

raiz.addEventListener('click', function(){
	calculoraiz();
	actualizar();
});

inverso.addEventListener('click', function(){
	calculoinverso();
	actualizar();
});

cuadrado.addEventListener('click', function(){
	calculocuadrado();
	actualizar();
});


function agregarnumero(num){
	opeActual = opeActual.toString() + num.toString();
	actualizar();
};

function actualizar(){
	resultado.value = opeActual;
};

function clear(){
	opeActual = '';
	opeAnterior = '';
	operacion = undefined;
}

function selectOperacion(op){
	if(opeActual === '')return;
	if (opeAnterior != ''){
		calcular()
	}
	operacion =op.toString();
	opeAnterior = opeActual;
	opeActual = '';
}


function calculoraiz(){
	const anterior = parseFloat(opeActual);
	opeActual = Math.sqrt(anterior);

}

function calculoinverso(){
	const anterior = parseFloat(opeActual);
	opeActual = anterior * -1;

}

function calculocuadrado(){
	const anterior = parseFloat(opeActual);
	opeActual = Math.pow(anterior, 2)

}


function calcular(){
	var calculo;
	const anterior = parseFloat(opeAnterior);
	const actual = parseFloat(opeActual);
	switch(operacion){
		case '√':
			calculo = anterior + actual;
			break;
		case '-':
			calculo = anterior - actual;
			break;
		case '*':
			calculo = anterior * actual;
			break;
		case '/':
			calculo = anterior / actual;
			break;
		case '%':
			calculo = anterior % actual;
			break;
		default:
			return;
	}
	opeActual = calculo;
	operacion = undefined;
	opeAnterior = '';

}

clear();


















