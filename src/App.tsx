import BlogList from './components/BlogList';

function App() {
  return (
    <div className="App">
      <header className="p-strip--light">
        <div className="row">
          <h1 className="p-heading--1">Take Home Test</h1>
        </div>
      </header>
      <main>
        <div className="p-strip">
          <BlogList />
        </div>
      </main>
    </div>
  );
}

export default App;
