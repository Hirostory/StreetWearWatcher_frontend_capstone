# Street Wear Watcher 

## Live Link 

https://tiny-capybara-1ff3f6.netlify.app/

StreetWearWatcher allows users to upload or share pictures of outfits worn by celebrities or individuals and then provides links or suggestions for similar clothing items that are more affordable or accessible. It's a handy tool for finding alternatives to expensive or designer clothing seen on famous personalities.


## Technologies used 

**Frontend Technologies**

> JavaScript, CSS, Vue.js

**Backend Technolofies** 

> JavaScript, Express, Mongoose, MongoDB atlas

## To Run Locally 
Make you have Vue installed 
```
npm install -g @vue/cli
```
Git Clone this repository  
These are the Dependencies that i use for my app
```
npm install vue-router@4 milligram
```
Then run the app
```
npm run serve
```
Go to localhost:8080

## User Story

As a user, I want to upload celebrity outfit pictures to find similar, more affordable options, so that I can replicate the style within my budget.

As a user on a budget, I want to search for specific clothing items worn by celebrities, so that I can purchase similar but less expensive alternatives.

As a user interested in fashion trends, I want to explore different outfit ideas from various celebrities, so that I can get inspiration for my own wardrobe without breaking the bank.

As a user looking for specific clothing pieces, I want the app to provide links or suggestions for where to buy similar items online, so that I can easily access and purchase them.

As a user interested in certain brands or designers, I want the app to recommend more affordable options from different brands that match the style, so that I can explore alternatives that fit my preferences.

As a user, I want the app to offer a wide range of clothing categories (like dresses, shoes, accessories), so that I can find alternatives for various fashion items.

As a user exploring fashion trends, I want the app to showcase not just celebrity outfits but also street style looks, so that I can stay updated on diverse fashion inspirations.

As a user concerned about sustainability, I want the app to suggest eco-friendly or sustainable alternatives to the clothing items featured, so that I can make more environmentally conscious purchasing decisions.

## WireFrames
![wireframe-project4](https://media.git.generalassemb.ly/user/49529/files/0e4a0db3-fa23-4711-b135-32f30f34e341)

## My Plan for this app

I will be using Mongoose, Express, and Nodejs as my backend and Vue as my Frontend   />
> 

1. StyleTarget

  - Image: String 
  - description: String 
  - Item1: mongoose.Type.Object
  - Item2: mongoose.Type.Object
  - Item3: mongoose.Type.Object
  - Item4: mongoose.Type.Object
  - Item5: mongoose.Type.Object
  - Item6: mongoose.Type.Object

2. Item1 

- Image: Sting 
- Link: String 
- Price: Num
- Name: String 
- Comment: String 

3. Item2 

- Image: Sting 
- Link: String 
- Price: Num
- Name: String 
- Comment: String 

4. Item3 

- Image: Sting 
- Link: String 
- Price: Num
- Name: String 
- Comment: String 

5. Item4 

- Image: Sting 
- Link: String 
- Price: Num
- Name: String 
- Comment: String 

6. Item5 

 - Image: Sting 
- Link: String 
- Price: Num
- Name: String 
- Comment: String 

7. Item6 

- Image: Sting 
- Link: String 
- Price: Num
- Name: String 
- Comment: String 

<br />
> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)

- **GET /app/**
  - Description: Get List of Styles

- **PUT /app/:id**
  - Description: Create a style target

- **GET /app/:id**
  - Description: Get specific style target with all the items on it

- **DELETE /app/:id**
  - Description: Delete a style target

- **POST /items1**
  - Description: Create a new item

- **POST /items2**
  - Description: Create a new item

- **POST /items3**
  - Description: Create a new item

- **POST /items4**
  - Description: Create a new item

- **POST /items5**
  - Description: Create a new item

- **POST /items6**
  - Description: Create a new item

- **GET /item1/:id**
  - Description: Get a specific item

- **GET /item2/:id**
  - Description: Get a specific item

- **GET /item3/:id**
  - Description: Get a specific item

- **GET /item4/:id**
  - Description: Get a specific item

- **GET /item5/:id**
  - Description: Get a specific item

- **GET /item6/:id**
  - Description: Get a specific item

- **PUT /item(1-6)/:id**
  - Description: Update an item

- **DELETE /item/:id**
  - Description: Delete an item

<br />

## Unsolved Problems and Future features

**Unsolved Problem**

1. There are some design issues that i will go back and fix casue it i change the issue now ill be affecting the scale of some of my image and also the effect i added.
2. There are some routes i need to fix to make the app more efficient
3. i need to figure out one of the fetching call's issie where the created post have some delays to the point where i ahve refresh teh page.

**Future Features**

1. still want to refactor this app into Typescrip
2. i will add animations
3. find better images

