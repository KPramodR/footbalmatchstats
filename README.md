This code has been developed as a demo of skills.

This code integrates with REST api developed in Spring boot at "http://localhost:8080/api" when running on local. Following functionalities are supported by this frontend at this moment.

1. Addition of new Match
2. Updating score of a running match
3. Updating status of a running match
4. Display of all the running matches
5. Display of all the finished matches based on the total score and their start time.
6. Deletion of a finished match (if required)

This application does not perform any content validation or perform any security check. The same can be applied within enough time. In the ideal scenarion, the admin page where addition, updating of score, and changing match status will be controlled by the administrator account and two separate pages live matches and match summary will be available to general public who wants those details. 

Uses of the platform:

1. Once the code is copied to the local start the application using 'ng serve', if required you might need to run command 'npm install' to copy needful libraries to local.
2. Download the code from the api for this project available at git "https://github.com/KPramodR/statsapi.git" and using command "mvn spring-boot:run", run it as a api server.
3. The Match Admin page will allow for addition of matches one at a time. You can add any number of matches you want.
4. Live matches can be displayed in the Live matches tab, from where the match scores can be updated and the match status can be changed to Finished.
5. The summary tab in the admin page can be used to view the finished matches also to delete the records if wanted.
6. The other two pages Live score and Match summary respectively shows the Live match scores and Match summary which are also available on admin page with extra actions.

There should not be any other blockes in running these apps. please reach out to pkininge@yahoo.co.in if any help required.


 
