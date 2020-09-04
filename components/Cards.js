// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        const articleElement = document.querySelector('.cards-container')
        const bootstrap = response.data.articles.bootstrap
        const javascript = response.data.articles.javascript
        const jquery = response.data.articles.jquery
        const node = response.data.articles.node
        const technology = response.data.articles.technology

        bootstrap.forEach(article => {
            articleElement.append(Article(article))
        })
        javascript.forEach(article => {
            articleElement.append(Article(article))
        })
        jquery.forEach(article => {
            articleElement.append(Article(article))
        })
        node.forEach(article => {
            articleElement.append(Article(article))
        })
        technology.forEach(article => {
            articleElement.append(Article(article))
        })
    })
    .catch(err => {
        const errorsContainer = document.querySelector('.errors-container')
        errorsContainer.append(err)
    })

function Article(data) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorName = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(authorImg)
    author.appendChild(authorName)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    
    headline.textContent = `${data.headline}`
    authorImg.src = data.authorPhoto
    authorName.textContent = `By ${data.authorName}`

    headline.addEventListener('click', event => {
        console.log(headline.textContent)
    })

    return card
}
