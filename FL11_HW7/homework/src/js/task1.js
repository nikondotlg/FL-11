// check login
let userPass = '';
let adminPass= '';
let correctUserPass = 'UserPass';
let correctAdminPass = 'AdminPass';
const minEmailInputLen = 6;
const minPassInputLen = 5;
const correctUserEmail = 'user@gmail.com';
const correctAdminEmail = 'admin@gmail.com';
const userEmailInput = prompt('Please, enter you e-mail.');

if (userEmailInput === null || userEmailInput.length <= 0) {
  alert('Canceled.');
} else if (userEmailInput.length < minEmailInputLen) {
  alert('I dont know any emails having name length less than 6 symbols.');
  // LOGIN PART FOR USER
} else if (userEmailInput === correctUserEmail) {
  userPass = prompt('Please, enter your password.');
  if (userPass === null || userPass === '') {
    alert('Canceled.');
  } else if (userPass === correctUserPass) {
    if (confirm('Do you want to change your password?')) {
      let passCheck = prompt('Enter old password');
      if (passCheck === correctUserPass) {
        userPass = prompt('Enter new password.');
        if (userPass.length < minPassInputLen) {
          alert('It\'s too short password');
        } else if (prompt('Enter new password once more') === userPass) {
          alert('You have succesfully changed your password.')
        } else {
          alert('You wrote the wrong password.')
        }
      } else {
        alert('Canceled.')
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password.')
  }
  // LOGIN PART FOR ADMIN
} else if (userEmailInput === correctAdminEmail) {
  adminPass = prompt('Please, enter your password.');
  if (adminPass === null || adminPass === '') {
    alert('Canceled.');
  } else if (adminPass === correctAdminPass) {
    console.log(adminPass + ' is Correct password.');
    if (confirm('Do you want to change your password?')) {
      let passCheck = prompt('Enter old password');
      if (passCheck === correctAdminPass) {
        adminPass = prompt('Enter new password.');
        if (adminPass.length < minPassInputLen) {
          alert('It\'s too short password');
        } else if (prompt('Enter new password once more') === adminPass) {
          alert('You have succesfully changed your password.')
        } else {
          alert('You wrote the wrong password.')
        }
      } else {
        alert('Canceled.')
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password.')
  }
} else {
  alert('I don\'t know you.');
}
