'use strict'

const signUpSuccess = function () {
  $('#sign-up-message').text('Signed up successfully')
}

const signUpFailure = function () {
  $('#sign-up-message').text('Error occured.')
}

const signInSuccess = function () {
  $('#sign-in-message').text('Signed in successfully')
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
}

const signInFailure = function () {
  $('#sign-in-message').text('Error occured.')
}

const changePasswordSuccess = function () {
  $('#change-pw-message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#change-pw-message').text('Error occured.')
}

const signOutSuccess = function () {
  $('#sign-out-message').text('Signed out successfully')
  $('#sign-in-div').show()
  $('#sign-up-div').show()
}

const signOutFailure = function () {
  $('#sign-out-message').text('Error occured.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
