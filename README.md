# ng2-base
Setup for Angular 2.0.1, configured to use JSPM and SystemJS.
The application is configured with live reload (systemjs-hot-reloader), live reload is supported for typescript, html, and sass files.
Typechecking is also performed during live reload, errors returned from the TS compiler are shown in the browser console.
## To get started
Install jspm and typings globally:
<pre>
    npm install -g jspm
    npm install -g typings
</pre>
Then run the setup:
<pre>
    npm run setup
</pre>
Now start the local web server by:
<pre>
    npm start
</pre>
You can build the application by running:
<pre>
    npm run build
</pre>
This creates a build.js in the build directory, which is not dependent of SystemJS.
An index.html is present in the build directory, if you start a web server in the build directory you can access the application in standalone mode.