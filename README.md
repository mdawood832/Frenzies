<h1> FRENZIES</h1>
FRENZIES is a quote gallery that is based on the submissions of users. Users are able to post quotes to the gallery that make them frenzy! 

<br>
<br>
FRENZIES is a full stack application built with Node.js, Mongoose, MongoDB Atlas, Express, and EJS. I adhered to the MVC file structure and created 7
RESTful routes with full CRUD. I deployed the app usina Heroku. 


<h3> Depolyed App </h3>
https://frenzies-deployed-app.herokuapp.com/frenzies
<br>
<br>



<h1> Gallery/Index Page </h1>
https://frenzies-deployed-app.herokuapp.com/frenzies
<h3> Before </h3> 
<h3> After </h3>
<p float="left">
<img height="300" width="500" alt="Screen Shot 2022-08-20 at 9 30 54 AM" src="https://user-images.githubusercontent.com/101743220/187830988-4fedcdb8-80f7-4f8f-8f53-a5c54f9952e2.png">
<img height="300" width="500" alt="Screen Shot 2022-08-31 at 11 29 18 PM" src="https://user-images.githubusercontent.com/101743220/187831774-8a49f4a8-2371-4d2b-b60f-16d78bf3a585.png">
</p>


<h1> Post Page  </h1>
https://frenzies-deployed-app.herokuapp.com/frenzies/new
<p float="left">
<img height="300" width="500" alt="Screen Shot 2022-08-20 at 2 24 22 PM" src="https://user-images.githubusercontent.com/101743220/187830953-0b8f0290-4175-4331-9a79-360131748482.png"> 
<img height="300" width="500" alt="Screen Shot 2022-08-31 at 11 29 58 PM" src="https://user-images.githubusercontent.com/101743220/187831899-91a66f52-269c-4786-b1b8-eba6cc628065.png">
</p>

<h1> Show Page  </h1>
https://frenzies-deployed-app.herokuapp.com/frenzies/630eab09981cf4cbc3da9fa4
<p float="left">
<img height="300" width="500" alt="Screen Shot 2022-08-31 at 11 27 49 PM" src="https://user-images.githubusercontent.com/101743220/187831581-1503e2e2-d99d-4c1c-8308-f2d5557a659b.png">
<img height="300" width="500" alt="Screen Shot 2022-08-31 at 11 29 35 PM" src="https://user-images.githubusercontent.com/101743220/187831953-47c98765-65f1-4081-bde3-351e64fe5963.png">
 </p>


<h1> About Page  </h1>
https://frenzies-deployed-app.herokuapp.com/frenzies/about
<p float="left">
<img height="300" width="500" alt="Screen Shot 2022-08-31 at 11 27 59 PM" src="https://user-images.githubusercontent.com/101743220/187831596-0fb681c8-ae55-421d-99a2-c545b3b9a2f8.png">
<img height="300" width="500" alt="Screen Shot 2022-08-31 at 11 29 46 PM" src="https://user-images.githubusercontent.com/101743220/187832029-0386acf0-64bd-4249-8832-23ae552e3aa7.png">
</p>

<h1> RESTful Routes </h1>
<table>
  <tr>
    <th>Action</th>
    <th>URL</th>
    <th>HTTP Verb</th>
    <th>EJS view filename</th>
  </tr>
  
  <tr>
    <td>Index</td>
    <td>/frenzies/</td>
    <td>GET</td>
    <td>index.ejs</td>
  </tr>
  
  <tr>
    <td>Show</td>
    <td>/frenzies/:index</td>
    <td>GET</td>
    <td>show.ejs</td>
  </tr>
  
  <tr>
    <td>New</td>
    <td>/frenzies/new</td>
    <td>GET</td>
    <td>new.ejs</td>
  </tr>
  
  <tr>
    <td>Create</td>
    <td>/frenzies/</td>
    <td>POST</td>
    <td>none</td>
  </tr>
  
  <tr>
    <td>Edit</td>
    <td>/frenzies/:index/edit</td>
    <td>GET</td>
    <td>edit.ejs</td>
  </tr>
  
  <tr>
    <td>Update</td>
    <td>/frenzies/:index</td>
    <td>PUT</td>
    <td>none</td>
  </tr>
  
  <tr>
    <td>Destroy</td>
    <td>/frenzies/:index</td>
    <td>DELETE</td>
    <td>none</td>
  </tr>
  
</table>



<h1> User Stories </h1>
<br>
Once the user loads the page they land on the Gallery page which is the index page of the app. They have three options through the navigation bar. The user can choose to stay on the gallery page and click on each individual quote which leads them to the show page. The user can edit, delete, or go back to the gallery page through the show page. If the user decides to instead click on the about page through the navigation bar, they will be lead to the about page which includes a paragraph explaining what FRENZIES is and how you can use it. There is a button at the end of the paragraph that allows the user to navigate back to the home page. Once the user navigates back to the home page they can visit the POST page which allows the user to post their own quotes. Once clicked the new page will load and renders a form. Once the user is finished filling the form they will be able to submit, which redirects them back to the gallery where they will view their submission.

<h1> MVP Goals </h1>
<br>
🌸 Have the app look portfolio ready and professional.
<br>
🌸 Have the app be able to function properly through all the routes and with the MongoDB.

<h1> Stretch Goals</h1>
<br>
🌸 Add a comment section to each quote.
<br>
🌸 Add likes or favorites to each quote so people can like.
<br>
🌸 Be able to add photos 

  



