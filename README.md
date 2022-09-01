Frenzies is a quote gallery that is based on the submissions of users. Users are able to post quotes to the gallery that make them frenzy! 
https://frenzies-deployed-app.herokuapp.com/frenzies

User Stories
<br>
Once the user loads the page they land on the Gallery page which is the index page of the app. They have three options through the navigation bar. The user can choose to stay on the gallery page and click on each individual quote which leads them to the show page. The user can edit, delete, or go back to the gallery page through the show page. If the user decides to instead click on the about page through the navigation bar, they will be lead to the about page which includes a paragraph explaining what FRENZIES is and how you can use it. There is a button at the end of the paragraph that allows the user to navigate back to the home page. Once the user navigates back to the home page they can visit the POST page which allows the user to post their own quotes. Once clicked the new page will load and renders a form. Once the user is finished filling the form they will be able to submit, which redirects them back to the gallery where they will view their submission.

MVP Goals
<br>
Have the app look portfolio ready and professional.
Have the app be able to function properly through all the routes and with the MongoDB.

Stretch Goals 
<br>
Add a comment section to each quote.
Add likes or favorites to each quote so people can like.
Be able to add photos 

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


