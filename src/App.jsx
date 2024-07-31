import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [range, setRange] = useState(10);
  const [numbers, setNumbers] = useState(true);
  const [characters, setCharacters] = useState(true);
  const [buttonText, setButtonText] = useState('copy');
  const btn = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numeric = '0123456789';
  const specialCharacter = '!@#$%^&*()_+{}|?>":<';

  const getPass = () => {
    let pass = '';
    let characterSet = letters;

    if (numbers) {
      characterSet += numeric;
    }
    if (characters) {
      characterSet += specialCharacter;
    }

    for (let index = 0; index < range; index++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      pass += characterSet.charAt(randomIndex);
    }

    setPassword(pass);
  };

  const copyPass = () => {
    window.navigator.clipboard
      .writeText(password)
      .then(() => {
        setButtonText('Copied');
        setTimeout(() => {
          setButtonText('Copy');
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy password: ', err);
      });
  };
  useEffect(() => {
    getPass();
  }, [range, numbers, characters]);

  return (
    <div className="max-w-xl bg-slate-600 mx-auto mt-16 p-6 rounded-lg">
      <h1 className="mb-6 text-2xl text-center">Password Generator App</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 px-6 py-2 rounded-l-md text-black text-lg outline-none"
          />
          <button
            className="bg-purple-500 font-bold px-6 py-2 rounded-r-md text-lg"
            ref={btn}
            onClick={copyPass}
          >
            {buttonText}
          </button>
        </div>
        <div className="flex gap-4 mt-8">
          <input
            type="range"
            name="range"
            id="range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
          <label htmlFor="range">Length : {range}</label>

          <div className="space-x-2">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              onChange={(e) => setNumbers(e.target.checked)}
              checked={numbers}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="space-x-2">
            <input
              type="checkbox"
              name="characters"
              id="characters"
              onChange={(e) => setCharacters(e.target.checked)}
              checked={characters}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
