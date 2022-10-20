This is a Demo API created to handle Match object and some of its associated basic functionalities.

1. The code is developer in spring boot as a REST API which is exposing its API's at "http://localhost:8080/api".
2. Swagger API helps to display the API and quickly test them in an ongoing basis. The swagger UI can be accessed at "http://localhost:8080/swagger-ui/".
3. This code is using H2 in memory database for quick integration with logger functionalities.
4. Individual Controller, Entity, Services have been created to maintain separation of durties and to keep the exposed code in a separate class.
5. Proper placeholders are in place for providing documentation of each method and exposed entities. Due to time limit could not put comments on each and every method but having those provides clear idea to the reader about what the function does. Though for this code, the method names and class names are self explaining.
6. Unit tests have been written using Junit for each of the method exposed in the service.

This code does not cover following things, which should have been in any code.
1. The authentication and authorization part as its a basic code.
2. Data validations, null pointer validations, security aspects

This code assumes that the api caller is a trusted inside entity and would have allready passed the authentication and is authorized to use this api.

FOllowing are some screen captures of the application.

Run the project
![image](https://user-images.githubusercontent.com/115825104/196259232-17334e4f-3888-4d26-a4b6-88022e5bf4e6.png)

Swagger UI
![image](https://user-images.githubusercontent.com/115825104/196259472-f5ac6da1-af48-4a47-b081-c064e03dac1a.png)


Home Page
![image](https://user-images.githubusercontent.com/115825104/196257735-92bbda53-7767-47c7-8bea-092392f7e8a4.png)

Matches Added
![image](https://user-images.githubusercontent.com/115825104/196258053-548eceb6-2f06-4de4-9fcc-3e81bfae605c.png)

Scores Updated
![image](https://user-images.githubusercontent.com/115825104/196258344-72c3322e-781b-46c2-8008-4e1f450e0aa5.png)

Live Score page
![image](https://user-images.githubusercontent.com/115825104/196258895-63c78f22-d51e-40fd-be05-7571c3e63e33.png)

Finished Matches for admin
![image](https://user-images.githubusercontent.com/115825104/196258439-50cde923-fb82-4eec-8883-7255ba050ed9.png)

Summary Page
![image](https://user-images.githubusercontent.com/115825104/196258533-431987e4-f935-48d7-89b6-4a1ebc89f618.png)


