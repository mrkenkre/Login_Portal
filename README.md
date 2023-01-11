*******************************************************************

* The entry point of this project is App.js which in turn renders the first page which is the Login Page.
* Once username and password is entered, it will call the /validate api and confirm if the username and password matches.
* If it matches, it will open the Home page if it does not, it will show an error in the alert box.
* Various components such as cards and navbar are segregates into their own directories.
* With the help of navbar the user can navigate to any page when required and only specific components will get rendered as    per requirement.
* On the home page, react map is implemented which fetches all the listed users from the mongodb and displays the list on the page.
* Each component directory also comprises of repective css files for necessary styling.
