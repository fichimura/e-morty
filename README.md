<h1>EMorty</h1>
<section>
  <h2>About the project</h2>
  <p> 
      E-Morty is a Rick and Morty wiki based in three main subjects that you can search for more informations.
      The first main subject is the Characters, in which the user has the possibility to search for a specific 
      character. With that you can know the name, species, if the searched person is alive, which species it belongs, gender and 
      many other features about it.
  </p>
  <p>
      The second it is based in Location. This category provides the name, type,
          dimension and residents of the searched place.
  </p>
  <p>
      And the last one is the Episode category, that will provide for you infos 
      like name, air data, the characters in it.
      Wubba Lubba Dub Dub! And have a good time with this catalog.
  </p>
</section>
<section>
  <h2>How to use the project</h2>
  <h3>By accessing the hosted app</h3>
  <p>you can access it in the link: https://e-morty.web.app/</p>

  <h3>By installing it locally</h3>
  <p>To install it locally you will have to follow the next steps:</p>
  <ul>
      <li>
        <p>Go to your terminal and then clone the repository:</p>
        <code> git clone https://github.com/fichimura/e-morty.git </code>
      </li>
      <li>
        <p>Then, in the project install the dependencies: </p>
        <code> npm i </code>
      </li>
      <li>
        <p>This project uses firebase for authentication purposes, so you must configure it</p>
        <ol> 
          <li>
            <p>Navigate to https://firebase.google.com and create an account. Once you create an account, in the top of your page click in <strong>Go to console</strong>.</p>
          </li>
          <li>
            <p>You will be redirected to a page with your projects. In that page choose <strong>Add project</strong>. Enter a name and create it.</p>  
          </li>
          <li>
            <p>In the main page, go to <strong>Cloud Firestore</strong>. Then, click on <strong>Create database</strong>. Set a location for your database, preferably next to your location. And the choose between <strong>production mode</strong> and <strong>test mode</strong>.</p>  
          </li>
          <li>
            <p>In the main page, go to <strong>Cloud Firestore</strong>. Then, click on <strong>Create database</strong>. Set a location for your database, preferably next to your location. And the choose between <strong>production mode</strong> and <strong>test mode</strong>.</p>  
          </li>
          <li>
            <p>When the process to create the database finishes, you can go to your <strong>Firebase Database</strong> and see the database created. In that context, click on <strong>Start collection</strong> and create a collection by providing the name 'users' to it, because the app is configured to get a collection with this name. The name of the document can be filled with anything, just to create the collection successfully.</p>  
          </li>
        </ol>
      </li>
  </ul>
</section>
