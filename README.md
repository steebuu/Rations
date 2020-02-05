Rations is a single page dark mode application that allows users to find recipes from the web with a given list of ingredients. Users can like their favorite recipes and also comment on recipes to express their opinions. Any liked recipes can be found on the favorites page. In addition, comments can be edited and deleted.

### <a href="https://rations.herokuapp.com/"><p font-size='30px'>Live site</p></a>

## Stack/Tech

Rations is built with the MERN ( MongoDB, Express, React, Node ) stack. It also uses the Spoonacular API to fetch recipes.

The team consists of Ryan Monahan, Shree Patel, Steve Liu, and Valerie Whitehouse.

## Features

### Fetching recipes based on ingredients:

Users can input a list of comma separated ingredients, and find an index of recipes that use those ingredients.

```javascript    
     handleSubmit(e){
        e.preventDefault();
        let filter = {
            ingredients: [],
            number: 20
        }
        const ingredientsArray = this.state.search.split(",")
        ingredientsArray.forEach(ingredient => filter.ingredients.push(ingredient))
        this.props.fetchRecipes(filter);
        this.props.history.push(`/searchresults`);
    }
```
Above is the searchbar component's ```handleSubmit```, which takes the comma separated user input (e.g "bacon, egg, cheese") and fires off an axios request (next snippet) to the API, returning an amount of recipes equal to ```number``` that contain the ingredients.

```javascript
    router.post('/', (req, res) => {
        const {filters} = req.body;
        const ingredientsString = filters.ingredients.map(ingredient => ingredient + '%2C');
        const baseUrl = `https://api.spoonacular.com/recipes/findByIngredients?number=${filters.number}&ranking=1&ingredients=`
        const advancedUrl = baseUrl + ingredientsString;
        const perfectUrl = advancedUrl + `&apiKey=${keys.recipeKey}`;
        axios.get(perfectUrl).then(recipes => {
            return res.json(recipes.data);
        });
    });
```

Above is the recipe route for fetching filtered recipes from the Spoonacular API based on given ingredient filters.


### Tracking favorite/liked recipes

Users have a favorites page containing a list of recipes they have liked, allowing them to quickly go to a recipe they have looked at previously.

```javascript
render(){
        const { userLikes } = this.props;
        let userLikesLi = null;
        if (userLikes.data){
            userLikesLi = userLikes.data.map((like, i) => {
                return (<Link to={`/recipes/${like.recipe}`} key={i}>{like.title}</Link>)
            });
        }
        return (
            <div className = "favoritesDiv">
              <p>Your Favorite Recipes</p>
              <ul className = "favoritesUl">
                  {userLikesLi}
              </ul>
            </div>
        )
    }
```

Above is how the favorites page is rendered. A list of links to the recipes is created (```userLikesLi```), allowing the user to quickly navigate to any given recipe show page for a liked recipe. This is in contrast to how our normal recipe index works and looks, which will be expanded upon in the challenges and solutions section of the readme.

## Challenges and Solutions

### API Limits

Spoonacular's free tier of API use only allows for 150 "points" to be spent daily. Fetching random recipes costs 1 point for the search, and 0.01 points per recipe after. However, searching for recipes by ID costs a full point per recipe, so the favorites page would quickly consume our 150 point limit.

We opted on choosing a solution we believe maintains the quality of the UI and user experience, while mitigating this issue. When users like a recipe, the recipe's ID and name are stored.

```javascript
const LikeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  recipe: {
    type: Number
  },
  title: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
```

This allowed us to store the title of the recipe, so users can still see which recipe they will navigate to, but without the additional cost of points associated with fetching all the recipes they have liked. This tradeoff hinders the ability to render the recipe photo, which is present in our other recipe indices, but we found this to be the best solution in allowing our app to remain functional even with the API's search limits.
