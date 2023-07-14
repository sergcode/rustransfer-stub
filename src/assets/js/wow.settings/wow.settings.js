import WOW from '../../../../node_modules/wow.js/dist/wow.min'

// Initialize fading
if (window.innerWidth > 768) { //Disable at resolution less than 768
  new WOW().init()
}


