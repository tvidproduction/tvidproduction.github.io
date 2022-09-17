const burger = document.querySelector( '.burger input' )
const nav = document.querySelector( 'nav ul' )

export const Sidebar = burger.addEventListener( 'click' , () => {
	 nav.classList.toggle( 'slide' )
})