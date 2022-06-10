# Candidate assignment - Tagging photos
 Client-side app that will show a grid of photos and allow the user to assign each to one or more tags. The tags are defined by the user.

# Project Status
This project is currently in development. Users can assign photos to tags or more ,Users can create a new tag edit and delete,and filter by a specific tag .functionality of search a tag/photo is in progress.

# Project Screen Shots
Assuming there is a login system where each user logs in with a personal username and password after the user successfully logs in this is the first screen he reaches
![image](https://user-images.githubusercontent.com/64200819/172068474-5af6fbdb-b7d5-4668-a95f-a99161107d93.png)



------------------------------------------------------------------------------------------------------------------------------
by clicking on "New tag" button ,this window will open. the user need to fill the label and the color inputs and press on the "add" button .
* by clicking on "?" a new tab will open with this link "https://www.w3schools.com/colors/colors_picker.asp?colorhex=ff0000" to choosing a color code.
![image](https://user-images.githubusercontent.com/64200819/172068536-c4583e45-9bbf-49ac-baee-8d3bddcc4f88.png)


------------------------------------------------------------------------------------------------------------------------------
after pressing on "add" button if the new tag is valid it will show below the available tags
![image](https://user-images.githubusercontent.com/64200819/172069000-0f7ced10-0ea7-4d6e-be0f-f0a96ed8e30f.png)


------------------------------------------------------------------------------------------------------------------------------
for each image the user can press on the tag icon and assign it to the chosen tag
![image](https://user-images.githubusercontent.com/64200819/172069071-1c699dbe-ebed-4f97-b06f-da136ec38bde.png)


-----------------------------------------------------------------------------------------------------------------------------
the user can always see all unassigned images by pressing on "unassigned photos"
![image](https://user-images.githubusercontent.com/64200819/172069211-1b01f131-0e20-4f89-944e-1a88fb937b67.png)


-----------------------------------------------------------------------------------------------------------------------------
by pressing on each tag name a new window with all photos assigned to this tag will pop up , the user can delete photos from tag
![image](https://user-images.githubusercontent.com/64200819/172069310-cca5a380-1b3f-47ff-a958-0a8b899cefe5.png)


-----------------------------------------------------------------------------------------------------------------------------
each tag can be renamed or recolored by clicking on edit icon ,in this example the laptop tag was changed
![image](https://user-images.githubusercontent.com/64200819/172069434-7b42ad7c-30b8-4027-b6e7-80a5721a10ae.png)


-----------------------------------------------------------------------------------------------------------------------------
each tag can be deleted by clicking on delete icon, in this example the sky tag was deleted
![image](https://user-images.githubusercontent.com/64200819/172069470-edd3597c-a933-442c-bf25-3cbf9f7535e9.png)

In fact, each user in addition to his personal details and login details will have a list of tags in which each tag will have a list of images that belong to it


# Tests
* tests that will be needed to login system
   1. empty fields(username/password)
   2. username exist in database
   3. matching password to username

* tests that will be needed to tagging system
   1. tag label is not empty
   2. color is valid hex color
   3. image is already exist in specific tag
   4. tag label and color are already exist for specific user

# Installation and Setup Instructions
Clone down this repository. 

Installation:
npm install

To Start App:
npm start
