# instagramlatest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


First you have to create an instagram api Account and then go to https://www.instagram.com/developer/authentication/ and get the url of the second method. You fill your client id and your site redirect and you get accessToken.
Then you can make the requests.

In order to work you have to put accessToken and userid into your index.html file.

then run "npm install", and then you can run  "npm run dev" to check if everything goes fine and the you can run build

This gets the latest 4 instagram photos of your user and puts them in a row
you can change and get 20 instagram photos of your userdid entered in index html if you change in Images.vue the count=4 to whatever number you want.
