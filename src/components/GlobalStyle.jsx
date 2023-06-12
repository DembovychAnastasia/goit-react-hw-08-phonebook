import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'
export const GlobalStyle = createGlobalStyle`

/* :root {
  --primaryTextColor: #212121;
  --secondaryTextColor: #757575;
  --accentColor: #f50057;
  --bgColor: #fff9e7;
  --boxShadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  --timingFn: cubic-bezier(0.4, 0, 0.2, 1);
} */

  body {
    /* color: ${props => (props.whiteColor ? 'white' : 'black')}; */
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* background-color: #d8e9e9; */

    /* color: var(--primaryTextColor); */
    background-image: linear-gradient(
      rgba(255, 249, 231, 0.405),
      rgba(255, 249, 231, 0.492)
    ),
    url(https://img.freepik.com/free-vector/gradient-spheres-background_52683-76367.jpg?w=826&t=st=1686411225~exp=1686411825~hmac=8f36ae2a8463d96fbca98edeef74ec96dcc0c5529e65c7bb34d37d8d9b83f929);
    background-repeat: no-repeat;
    background-size: cover;
 
    
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
img {
	display: block;
	max-width: 100%;
	height: auto;
}
a {
text-decoration: none;
}
`;