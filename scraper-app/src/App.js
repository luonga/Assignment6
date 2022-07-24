import {useState} from 'react';

const App = () => {

  const [err, setErr] = useState('');
  const [recipe, setRecipe] = useState('');
  const [result, setResult] = useState('');


  const handleClick = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.0.5:5000', {
        method: 'POST',
        body: recipe
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    

      const result = await response.json();
      var s = JSON.stringify(result);
      setResult(s);

    } catch (err) {
      setErr(err.message);
    } 
  };
  
  return (
    <div>
      <h2>Please enter a URL from a recipe on https://www.foodnetwork.com/ to see its ingredients.</h2>
      
      {err && <h2>{err}</h2>}

      <form onSubmit={handleClick}>
        <input
          id="recipe"
          name="recipe"
          type="text"
          onChange={event => setRecipe(event.target.value)}
          value={recipe}
        />
        <button type="submit">Submit form</button>
      </form>
      <h2>Ingredients:</h2>

      {result}

    </div>
  );
};

export default App;