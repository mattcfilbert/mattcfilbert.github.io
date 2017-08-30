/* global $ */
$(document).ready(() => {
  $('#projects').on('click', () => {
    $('#proj1').removeClass('hidden')
    $('#goHome').removeClass('hidden')
    $('#home').addClass('hidden')
    $('#proj2').addClass('hidden')
    $('#proj3').addClass('hidden')
    $('#projects').addClass('hidden')
    $('#show').removeClass('hidden')
  })

  $('#goHome').on('click', () => {
    $('#home').removeClass('hidden')
    $('#goHome').addClass('hidden')
    $('#proj1').addClass('hidden')
    $('#proj2').addClass('hidden')
    $('#proj3').addClass('hidden')
    $('#projects').removeClass('hidden')
    $('#show').addClass('hidden')
  })

  $('#one').on('click', () => {
    $('#proj1').removeClass('hidden')
    $('#proj2').addClass('hidden')
    $('#proj3').addClass('hidden')
  })
  $('#two').on('click', () => {
    $('#proj1').addClass('hidden')
    $('#proj2').removeClass('hidden')
    $('#proj3').addClass('hidden')
  })
  $('#three').on('click', () => {
    $('#proj1').addClass('hidden')
    $('#proj2').addClass('hidden')
    $('#proj3').removeClass('hidden')
  })

  function playPsycho () {
    document.getElementById('psycho').play()
  }

  $('.watermark').on('click', playPsycho)
})
