This app was created using [NPX](https://nextjs.org/docs) `npx create-next-app --typescript`
Styling has been [styled-components](https://styled-components.com/)
Google fonts was used to do a quick import of [Lato](https://fonts.google.com/specimen/Lato?preview.text=TOMATO%20%26%20LEEK%20VEGAN&preview.text_type=custom#standard-styles) into the global css

The main design of the compoennts was made using atomic design, to create the folder structure.
I started from top down, making the template first, and building down.
That way as I went I knew which components I needed to flesh out more, and break down into smaller sub components.

The main API call is made in the recpie page when someone goes to it.
For this task I was unsure if I should use getStaticProps, and decided to go with useEffect, but that can be quickly changed if the requiremnent was to display a static page.

The state is then passed down into a displayGrid, that then maps out the array of recipies into cards.
To make the cards display as wanted, I simply made the container a flex, and then had each card take 25% width but added a margin so there would never be more than 3 columns before a wrap.

There was some simple media querries made to change the display size of each card as the window size changed.
To grab the sizes of the windows and the colors I added a constants file that had some colors and sizes for max-window size.
For this area, it would have been great to have used material-ui or tailwindscss to speed up this process.

## Rough Steps and thinking:

- created a next.js app with NPX, set up with typescript
  installed @types
- Added in styled components
- Had to run `npm i --save-dev @types/styled-components` to fix an issue with ts
- I did look into material-ui breifly because I was thinking of using it mainly so that I would not have to define my own color palette `https://material-ui.com/customization/color/`, I did not go with it because I wanted to focus on the main work first
- I statrted off building a really simple template component that'll hold what ever is passed to it
- Once the basic component was made, I went to create a card to be held in there
- I also created a page for recipies
- I then decided at the 1 hour mark to take a break for lunch, and push to the repo
- Normally I would create feature branches but that seemed a bit exsessive for this

- Second commit at the two hour mark where the base of the project has been completed
- Clean up of the project
- Writting of the Readme

### TIME TAKEN:

In total waka time recorded 3 hours and 14 mins, but I think for the majority of the actual coding it was 2.5 hours, there was some breaks, and writting of the readme.

## Main Goals

- [x] Larger screens display 2-3 columns
- [x] Smaller screens display only 1 column
- [x] atomic design used for components
- [x] styled compoennts used
- [x] APIS created to fetch data
- [x] Constants created for colors and screen sizes
- [x] export all the TODOs into the readme for future devs

### STEPS TODO NEXT

#### Styling

- Might be a better idea to set text-color globally or break down text into components
- store the fonts locally
- Change from using flex for the columns to using grid
- Text us acting funning during the scale transition (Had a quick look but started taking too much time, have commented out scale for now)

#### APIS

- Add in a check to see where the server is running, grabbing the details for that at runtime rather than being hardcodded to localhost

#### Components

- Break down the Card component into smaller atom components for Image components
  - Display the different images depending on the screen/device being used
  - add a border radius top to the images so they're not so sharp
- Have a loading state applied for the DisplayGrid

#### Pages

Recipies

- Call in the data with CallStaticProps to get it and create a static page
- Call in getStaticPaths to create an output of each page using the recipie urlPartial as the slug
- Create the Display component for displaying a single recipie in a page

### Coding standards going forward

- Create a dev branch
- Create feature branches off the dev branch

### How to run

- git clone the main branch
- npm install
- npm run dev
- open [http://localhost:3000/recipies](http://localhost:3000/recipies) with your browser to see the result.
- API routes [http://localhost:3000/api/recipies](http://localhost:3000/api/recipies) this just returns the json data
