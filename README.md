##  TITLE-    Express-Note-Taker   

## Table of contents:
  - [Description](#description)
  - [license](# License)
  - [screenshot] (#screenshot) 
  - [Contribution](#Contribution)
  - [Question](#question)

## Describtion;
Created an Application with node and Express(back-end), which connected with front-end(which one  was given as a starter code) and  entire deployed  to  Heroku. that can be use for write data, save data and delete data.Utilizing JSON.file  for data storage.


## User Story;
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Screenshot;

![Alt text](image-4.png)
![Alt text](image-3.png)


On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## License;
MIT

## Contribution;
N/A

##Question;

Github Username:  phvania
Email:  vaniapriti@gmail.com


