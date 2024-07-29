# Login / Registration application

In this exercise you will build a form in which you can simulate login and creation of an account to some web application. The purpose of this exercise is to practise on using different event listeners _( several are needed )_ but also to create a basic application that is comprised of HTML, CSS and JavaScript (including both error handling and localStorage).

The registration form should have to following content and functionlity.

1. Five inputs must be included and they should reside within a `<form>`. `name`and `username` which must be of type text. One input for `email` that is of type email and two inputs for `password` and `confirm password`. They should of course be of type password.

2. One input or button for submitting the form.

3. Every input should be accompanied by a label and they must be connected. That means that if you click on the label, the corresponding input gets selected _( focus )_.

4. All of the inputs must be mandatory, meaning that you shouldn't be able to submit the form if one of the inputs is missing a value.

5. Use error handling to validate user input. If the input fails in validation, an error message is to be displayed to the user.

6. The `password` must be atleast 8 characters long. If the password is not of length, the input should receive appropriate styling to visualize this for the user. When the passwords is long enough the styling returns to normal _(this is optional)_.

7. The `confirm password` must be validated to be identical as the `password`. If that's not the case, the input should receive appropriate styling to visualize this for the user, much like the previous part _(this is optional)_.

8. There must be a submit event in the form. When the form is submitted, and has passed validation, all of the data should be presented in an object like this:

```js
const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};
```

This object is to be pushed to an array of registered users, and written to the console or written in an alert. The values should of course be corresponding to the values that the user have typed. The array of registered users should be stored in localStorage _(note that this is just to simulate the use of a database in this exercise. localStorage should never be used to store passwords etc in a real application!)_.

The login form should have to following content and functionlity.

1. Two inputs must be included and they should reside within a `<form>`. `username` which must be of type text, and `password` which should of course be of type password.

2. One input or button for submitting the form.

3. Every input should be accompanied by a label and they must be connected. That means that if you click on the label, the corresponding input gets selected _( focus )_.

4. All of the inputs must be mandatory, meaning that you shouldn't be able to submit the form if one of the inputs is missing a value.

5. Use error handling to validate user input. If the input fails in validation, an error message is to be displayed to the user.

6. When all input is validated and approved you should store the logged in user in localStorage, hide both forms, and welcome the logged in user on the screen (For example "Welcome Jesper!").

I would like that you also focus on writing clean code and use decent, thought-through, stylings.

<figure style="text-align: center;"><img src="example-img.png">
<figcaption>Example</figcaption></figure>
