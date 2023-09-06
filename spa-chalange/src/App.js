import './App.css';
import { useRoutes } from 'react-router-dom';
import router from './routes';

const articles = [
  {
    id: 1,
    title: 'Article 1',
    content: 'This is the content of Article 1.',
    imageUrl: 'https://example.com/article1.jpg',
  },
  {
    id: 2,
    title: 'Article 2',
    content: 'This is the content of Article 2.',
    imageUrl: 'https://example.com/article2.jpg',
  },
  // Add more articles as needed
];
// Functional component for the header
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Your Website Name</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Functional component for the main content
function Main() {
  return (
    <main>
      <section>
        <h2>Welcome to Your Website</h2>
        <p>This is the main content area of your website.</p>
      </section>
    </main>
  );
}

// Functional component for the footer
function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Website Name</p>
    </footer>
  );
}

// Functional component for the entire site
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

    // <>
    //   {routers}
    // </>

export default App;