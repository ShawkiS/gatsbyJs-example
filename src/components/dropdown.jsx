import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"

function TuiTransition({ show, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, children }) {
  const enterClasses = enter.split(' ');
  const enterFromClasses = enterFrom.split(' ');
  const enterToClasses = enterTo.split(' ');
  const leaveClasses = leave.split(' ');
  const leaveFromClasses = leaveFrom.split(' ');
  const leaveToClasses = leaveTo.split(' ');

  return (
      <CSSTransition
          unmountOnExit
          appear={true}
          in={show}
          addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
          }}
          onEnter={node => {
              node.classList.add(...enterClasses, ...enterFromClasses);
          }}
          onEntering={node => {
              node.classList.remove(...enterFromClasses);
              node.classList.add(...enterToClasses);
          }}
          onEntered={node => {
              node.classList.remove(...enterToClasses, ...enterClasses);
          }}
          onExit={node => {
              node.classList.add(...leaveClasses, ...leaveFromClasses);
          }}
          onExiting={node => {
              node.classList.remove(...leaveFromClasses);
              node.classList.add(...leaveToClasses);
          }}
          onExited={node => {
              node.classList.remove(...leaveToClasses, ...leaveClasses);
          }}
      >
          {children}
      </CSSTransition>
  );
}


function Dropdown () {
  let [toogle, setToogle] = useState(true)

  return (
    <div className='m-40 relative inline-block text-left'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            onClick={() => {
              toogle = setToogle(!toogle)
            }}
            type='button'
            className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
          >
            Options
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
      </div>
      <CSSTransition
      in={toogle}

      >
                <TuiTransition
                    show={toogle}
                    enter="transition ease-out duration-1000"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
        <div
          Style={`${toogle ? "" : "display: none;"} `}
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg'
        >
          <div className='rounded-md bg-white shadow-xs'>
            <div className='py-1'>
              <a
                href='/'
                className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
              >
                Account settings
              </a>
              <a
                href='/'
                className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
              >
                Support
              </a>
              <a
                href='/'
                className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
              >
                License
              </a>
              <form method='POST' action='#'>
                <button
                  type='submit'
                  className='block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
        </TuiTransition>
      </CSSTransition>
    </div>
  )
}

export default Dropdown
