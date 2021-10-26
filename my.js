//**************************************************//
//******************** OTHERS **********************//
//**************************************************//
// Testet ob die Adresszeile beim laden der Webseite ein bestimmtes Wort mit # enthaelt und laedt dann die entsprechende Seite
nav()

// Testet ob sich in der Adresszeile das nach dem # veraendert, z. B. von #dashboard zu #lehrer,
// dann wird die entsprechende Seite geladen
$(window).on('hashchange', function () {
	console.log(window.location.hash)
	nav()
})

function nav() {
	// #index.html
	if (window.location.hash === '#/' || window.location.hash === '#') {
		$('#injected_content').load('./overview.html')

		$('.overview-tab').addClass('router-link-active')
		$('.overview-tab').addClass('router-link-exact-active')

		$('.gallery-tab').removeClass('router-link-active')
		$('.gallery-tab').removeClass('router-link-exact-active')

		$('.laboratory-tab').removeClass('router-link-active')
		$('.laboratory-tab').removeClass('router-link-exact-active')

		$('.mint-tab').removeClass('router-link-active')
		$('.mint-tab').removeClass('router-link-exact-active')

		// #/gallery
	} else if (window.location.hash === '#/gallery') {
		$('#injected_content').load('./gallery.html')

		$('.gallery-tab').addClass('router-link-active')
		$('.gallery-tab').addClass('router-link-exact-active')

		$('.overview-tab').removeClass('router-link-active')
		$('.overview-tab').removeClass('router-link-exact-active')

		$('.laboratory-tab').removeClass('router-link-active')
		$('.laboratory-tab').removeClass('router-link-exact-active')

		$('.mint-tab').removeClass('router-link-active')
		$('.mint-tab').removeClass('router-link-exact-active')

		// #/laboratory
	} else if (window.location.hash === '#/laboratory') {
		$('#injected_content').load('./laboratory.html')

		$('.laboratory-tab').addClass('router-link-active')
		$('.laboratory-tab').addClass('router-link-exact-active')

		$('.gallery-tab').removeClass('router-link-active')
		$('.gallery-tab').removeClass('router-link-exact-active')

		$('.overview-tab').removeClass('router-link-active')
		$('.overview-tab').removeClass('router-link-exact-active')

		$('.mint-tab').removeClass('router-link-active')
		$('.mint-tab').removeClass('router-link-exact-active')

		// #/mint
	} else if (window.location.hash === '#/mint') {
		$('#injected_content').load('./mint.html')

		$('.mint-tab').addClass('router-link-active')
		$('.mint-tab').addClass('router-link-exact-active')

		$('.gallery-tab').removeClass('router-link-active')
		$('.gallery-tab').removeClass('router-link-exact-active')

		$('.laboratory-tab').removeClass('router-link-active')
		$('.laboratory-tab').removeClass('router-link-exact-active')

		$('.overview-tab').removeClass('router-link-active')
		$('.overview-tab').removeClass('router-link-exact-active')

		// else
	} else {
		window.location.hash = '#/'
		$('#injected_content').load('./overview.html')

		$('.overview-tab').addClass('router-link-active')
		$('.overview-tab').addClass('router-link-exact-active')

		$('.gallery-tab').removeClass('router-link-active')
		$('.gallery-tab').removeClass('router-link-exact-active')

		$('.laboratory-tab').removeClass('router-link-active')
		$('.laboratory-tab').removeClass('router-link-exact-active')

		$('.mint-tab').removeClass('router-link-active')
		$('.mint-tab').removeClass('router-link-exact-active')
	}
}
