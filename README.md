Rough Steps and thinking:

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

## Main Goals

- [ ] Larger screens display 2-3 columns
- [ ] Smaller screens display only 1 column
- [x] atomic design used for components
- [x] styled compoennts used
- [x] APIS created to fetch data
- [x] Constants created for colors and screen sizes
- [ ] export all the TODOs into the readme for future devs

### Coding standards going forward/ THINGS TO DO

- Create a dev branch
- Create feature branches off the dev branch

### How to run

- git clone the main branch
- npm install
- npm run dev

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
