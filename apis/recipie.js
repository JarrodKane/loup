// This will go out to the API and grab the recipes
// It has been exported here so that the logic to grab a recipie can be shared and reused within other components

// TODO: Change it from being set to localhost
// You could set enviroment variables for it to pick up and find out what stage it is deployed in, and thus it will change where it's grabbing its data
// For this excersice I have just left this as hard codded for now

export const getRecipies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/recipies");

    const dataJson = await response.json();

    return dataJson.contents;
  } catch (error) {
    console.log(`An error is being thrown: ${error}`);
  }
};
