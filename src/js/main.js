/*Проверка, работает ли таск scripts*/
/*function divide(first, second){
	return first / second;
}

console.log(divide(20, 2));*/

/*Закрывает блок Active Projects, это для того, 
что бы в дальнейшем можно было добавить верстку стр Messenger*/
function dNone() {
   var element = document.getElementById("search");
   element.classList.toggle("dnone");
}

/*Пример accordion, который можно сделать и на остальных items*/
/*$('.accordion_item>.projects__items__in').hide();*/
$('.accordion_item>.projects__items').click(function() {

	if ($(this).next('.projects__items__in').is (':visible')) {
		$(this).next('.projects__items__in').slideUp()
	}
	else {
		$(this).closest('.accordion').find('.projects__items__in').slideUp();
		$(this).next('.projects__items__in').slideDown();
	}
});