const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'ely kahn', // ←  Start by adding your name!
    title: 'digIn begin!',
    occupation: 'designer, dev & creative technologist',
    location: 'Little Rock',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'ely@email.com',
    twitter: 'creativ_ely',
    linkedin: 'ely-kahn',
    instagram: 'creativ_ely',
    //facebook: 'your-facebook-name',

    /**
     * Layout
     */
    photographer: 'Snappy Camera',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: arc.static('background.jpg', {stagePath: false})
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
