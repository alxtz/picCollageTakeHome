# specs
1. visitors can type in a search bar to get the correlated movies
2. a list on the page shows the list of movies and search result
3. search happens during visitor is typing
4. when typing, there should be a auto-complete list for user to select
5. be aware of fast-typing scenario *// cancel ongoing api call while typing*
6. think about global visitors, for example, Chinese user might want to search 迷宮 but there’s an intermediate state, 迷ㄍㄨㄥ *// not implemented since omdi & imdb has no chinese movie titles*
7. better user experience when having the same searches. *// recent search list stored in cookies*
8. the states of the website should be clear

## Available Scripts

In the project directory, you can run:

### `npm install` & `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
