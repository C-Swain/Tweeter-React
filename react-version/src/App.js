import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <body>
       <Navigation/>
        <Profile />
        <main className="container">
          <section class="newtweet">
        <TweetForm />

        </section>
        <section className="tweets">
        <TweetList />
        </section>
        </main>
      </body>
    </div>
  );
}

export default App;
