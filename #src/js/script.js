function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

//Slick slider
@@include('slick.js');
@@include('slickrequest.js');

//JQUERY PRACTICE
// $(document).ready(function(){
// 	$('#id');
// });

// $(function(){});






$(document).ready(function(){

//Increase logo size manualy
	$('.logo__img').mouseenter(function(){
		$(this).animate({'width':'60px'}, 200)
	});
	$('.logo__img').mouseleave(function(){
		$(this).animate({'width':'50px'}, 200)
	});


//Highlighting header menu items
	$('.menu__link').mouseenter(function(){
		$(this).toggleClass('menu__link_active')
	});
	$('.menu__link').mouseleave(function(){
		$(this).toggleClass('menu__link_active')
	});


//Show header "Boost up your Local business"

	$('.request__top').hide().delay(3000).show(1000)


//Slide down for inputs and button

	$('input:first').hide().delay(4000).slideDown(1000)
	$('input:eq(1)').hide().delay(5000).slideDown(1000)
	$('input:eq(2)').hide().delay(6000).slideDown(1000)

	$('.request__form').find('button').hide().delay(7000).slideDown(1000)

//Increase logo size animation
	$('.logo__img').delay(8000).animate({'width':'60px'} ,300).animate({'width':'50px'}, 300)


//Swithing active tab of plan.

	$('.price__item').mouseenter(function(){
		$(this).toggleClass('price__item_active')
		$('.price__item-title').toggleClass('price__item-title_active')
		$('.price__cost-value').toggleClass('price__cost-value_active')
		$('.price__cost-period').toggleClass('price__cost-period_active')
		$('.price__feature').toggleClass('price__feature_active')

	});
	$('.price__item').mouseleave(function(){
		$(this).toggleClass('price__item_active')
		$('.price__item-title').toggleClass('price__item-title_active')
		$('.price__cost-value').toggleClass('price__cost-value_active')
		$('.price__cost-period').toggleClass('price__cost-period_active')
		$('.price__feature').toggleClass('price__feature_active')
	});
});


