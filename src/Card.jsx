import { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

function Card({ setPopUp, children }) {
  const key = [1, -1];
  const [position, setPosition] = useState({
    x: Math.random() * 250 * key[Math.floor(Math.random() * 2)],
    y: Math.random() * 100 * key[Math.floor(Math.random() * 2)]
  });
  const [lastPosition, setLastPosition] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastPosition) {
      const dx = e.clientX - lastPosition.x;
      const dy = e.clientY - lastPosition.y;
      setPosition({
        x: position.x + dx,
        y: position.y + dy
      });
      setLastPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  }

  function handlePointerUp(e) {
    setLastPosition(null);
  }

  return (
    <>
      <ResizableBox width={150} height={150} minConstraints={[100, 100]} maxConstraints={[500, 500]}
        className='absolute flex justify-center items-center'
        style={{
          transform: `translate(${position.x}px,${position.y}px)`
        }}
      >
        <div className='box size-full bg-gray-200 border border-black rounded-sm px-2 flex flex-col justify-center items-center'>
          <p className='my-auto overflow-hidden text-gray-600 text-sm'>
            {children.slice(0, children.length / 2)}...
          </p>

          <p
            className='text-indigo-600 hover:text-red-500 font-semibold text-sm cursor-pointer'
            onClick={() => setPopUp({
              visible: true,
              text: children
            })}
          >
            show more...
          </p>

          <span
            className='rounded-full bg-pink-500 size-6 my-2 flex justify-center items-center cursor-grab select-none'
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            ✥
          </span>
        </div>
      </ResizableBox>

    </>

  );
}

export default Card;
