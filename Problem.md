MLabs Front-End Dev Exercise

#### Goal
Create a simple React app that fetches blog posts from an API and displays them as cards in a
responsive grid.

#### Requirements
1. Project must use TypeScript (you can initialize with `npx create-react-app my-app --template
typescript`)
2. React context, Redux, or similar state management library must be used to store the blog post data
(i.e., UI components should not contain logic for fetching or storing blog posts)
3. Blog post data should be fetched from `https://jsonplaceholder.typicode.com/posts` on page load.
4. The grid must be responsive (i.e., single column on XS screens but multi-column on larger screens).
5. Each blog post must be displayed as a card with the following details:
1. Title
2. Body (limited to 100 character snippet with "..." as the suffix for any snippets shorter than the full body)
6. There is uniform spacing between each card in the grid and padding to the top/left/right sides of the
grid.
7. There is an input field at the top of the page that allows the user to filter the blog posts that are
displayed (based on case-insensitive match of any text in title or body)#### Bonus Points
- Display an image on each card (e.g., using a random image from https://picsum.photos)
- Add additional styling like rounded corners, box shadows, etc.
Please send a link to your private repo to oskar@mlabs.city when done 😊