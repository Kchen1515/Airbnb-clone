
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data'

function App() {
  const eachCard = data.map(experience => {
    return <Card 
      key={experience.id}
      {...experience}
    />
    
})
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="entire-card-div">
        {eachCard}
      </div>
      
    </div>
  );
}

export default App;
