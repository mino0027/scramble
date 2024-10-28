/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */

function shuffle(src) {
    const copy = [...src];
    const length = copy.length;
    for (let i = 0; i < length; i++) {
      const x = copy[i];
      const y = Math.floor(Math.random() * length);
      const z = copy[y];
      copy[i] = z;
      copy[y] = x;
    }
  
    if (typeof src === 'string') {
      return copy.join('');
    }
  
    return copy;
  }
  
  /**********************************************
   * * MY CODE BELOW
  **********************************************/
  const words = ["example", "placeholder", "scramble", "javascript", "coding", "challenge", "function", "mathematics", "constant", "array"]; // 1. an array of words to scramble

  const ScrambleGame = () => {
    const [currentWord, setCurrentWord] = React.useState('');
    const [scrambledWord, setScrambledWord] = React.useState('');
    const [userInput, setUserInput] = React.useState('');
    const [points, setPoints] = React.useState(0);
    const [strikes, setStrikes] = React.useState(0);
    const [passes, setPasses] = React.useState(3);
    const [gameWords, setGameWords] = React.useState([...words]);
  
    React.useEffect(() => {
      const savedState = JSON.parse(localStorage.getItem('scrambleGameState')); // 2. loading the game state from local storage
      if (savedState) {
        setCurrentWord(savedState.currentWord);
        setScrambledWord(savedState.scrambledWord);
        setPoints(savedState.points);
        setStrikes(savedState.strikes);
        setPasses(savedState.passes);
        setGameWords(savedState.gameWords);
      } else {
        startNewGame();
      }
    }, []);
  
    React.useEffect(() => {
      localStorage.setItem('scrambleGameState', JSON.stringify({
        currentWord,
        scrambledWord,
        points,
        strikes,
        passes,
        gameWords
      })); // 2. saving the game state to local storage (allows game saving/reloading)
    }, [currentWord, scrambledWord, points, strikes, passes, gameWords]);
  
    const startNewGame = () => {
      const newWord = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(newWord);
      setScrambledWord(shuffle(newWord));
      setPoints(0);
      setStrikes(0);
      setPasses(3);
      setGameWords([...words]);
    };
  
    const handleGuess = (e) => {
      e.preventDefault(); // 3. preventing a page refresh to keep content
      if (userInput.toLowerCase() === currentWord.toLowerCase()) {
        setPoints(points + 1); // 7. updating the points
        const remainingWords = gameWords.filter(word => word !== currentWord);
        setGameWords(remainingWords);
        if (remainingWords.length === 0) {
          alert('Congratulations! You have guessed all the words.');
          startNewGame();
        } else {
          const newWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
          setCurrentWord(newWord);
          setScrambledWord(shuffle(newWord)); // 4. show a new scrambled word
        }
      } else {
        setStrikes(strikes + 1); // 7. updating the strikes
        if (strikes + 1 >= 3) {
          alert('Game Over! You have reached the max number of strikes.');
          startNewGame();
        }
      }
      setUserInput(''); // 3. clear the textboxes
    };
  
    const handlePass = () => {
      if (passes > 0) {
        setPasses(passes - 1); // 8. update the passes
        const remainingWords = gameWords.filter(word => word !== currentWord);
        setGameWords(remainingWords);
        if (remainingWords.length === 0) {
          alert('Congratulations! You have guessed all the words.');
          startNewGame();
        } else {
          const newWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
          setCurrentWord(newWord);
          setScrambledWord(shuffle(newWord)); // 8. show new scrambled words
        }
      }
    };
  
    const handleInputChange = (e) => {
      setUserInput(e.target.value);
    };
  
    return (
      <div>
        <h1>Scramble Test Game</h1>
        <p>Scrambled Word: {scrambledWord}</p>
        <form onSubmit={handleGuess}>
          <input type="text" value={userInput} onChange={handleInputChange} />
          <button type="submit">Guess Here</button>
        </form>
        <button onClick={handlePass} disabled={passes === 0}>Pass</button>
        <p>Points: {points}</p>
        <p>Strikes: {strikes}</p>
        <p>Passes: {passes}</p>
        {strikes >= 3 && <p>Game Over, try again! <button onClick={startNewGame}>Play Again</button></p>} {/* 9./10. game over and play again */}
      </div>
    );
  };
  
  ReactDOM.render(<ScrambleGame />, document.getElementById('root'));