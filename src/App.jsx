import { useState } from 'react';
import Card from './Card';

function App() {
  const [cards, setCards] = useState([
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aliquam necessitatibus unde fugit totam, laborum fuga iusto iure! Necessitatibus corrupti blanditiis assumenda cumque et ipsum voluptatum modi natus illum maiores.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aliquam necessitatibus unde fugit totam, laborum fuga iusto iure! Necessitatibus corrupti blanditiis assumenda cumque et ipsum voluptatum modi natus illum maiores.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aliquam necessitatibus unde fugit totam, laborum fuga iusto iure! Necessitatibus corrupti blanditiis assumenda cumque et ipsum voluptatum modi natus illum maiores.",
  ]);
  const [name, setName] = useState("");
  const [popUp, setPopUp] = useState({
    visible: false,
    text: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, name]);
    setName("");
  }

  return (
    <>
      <div className='relative h-screen w-screen bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 justify-center items-center'>
        <h1 className='text-center pt-2 text-5xl text-white font-bold italic'>CANVAS</h1>

        <form className='w-fit mx-auto mt-2 space-x-4' onSubmit={handleSubmit}>
          <input
            type="text"
            className='px-4 py-2 ring-4'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter message...'
            required
          />
          <button
            type="submit"
            className='bg-red-500 hover:bg-green-500 text-white rounded-lg px-4 py-2'
          >Add!</button>
        </form>

        <div className='relative container max-w-[1024px] mx-auto my-2 h-[80%] overflow-scroll bg-gradient-to-b from-indigo-900 to-blue-500 flex justify-around items-center'>
          {cards.map((card, ind) => (
            <Card key={ind} setPopUp={setPopUp}>
              {card}
            </Card>
          ))}
        </div>

        {popUp.visible && (
          <div className='absolute top-0 left-0 size-full z-10 bg-white bg-opacity-10 flex justify-center items-center'>
            <div className='relative w-[80%] sm:max-w-[640px] md:max-w-[768px] h-1/2 bg-slate-800 text-white text-center rounded shadow-2xl shadow-black px-8 flex justify-center items-center'>
              <span
                className='absolute top-2 right-1 p-1 hover:ring-2 rounded-full cursor-pointer'
                onClick={() => setPopUp({
                  visible: false,
                  text: ""
                })}
              >
                &#10060;
              </span>
              <p>{popUp.text}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App
