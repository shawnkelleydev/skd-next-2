import { useEffect, useReducer } from 'react'

import styles from './styles.module.css'

export default function About({ cursor, step, stepDispatch }) {
  const header = 'about'
  const p1 =
    'Shawn Kelley is a full stack software developer at Compassion International.'
  const p2 =
    'His team uses JavaScript, Dart, and AWS to better connect sponsors with children around the world.'
  const p3 =
    'Shawn lives in the Denver metro area with his wife, two daughters, and English Springer Spaniel.'

  const initialState = { header: '', index: 0, p1: '', p2: '', p3: '' }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'index':
        return { ...state, index: state.index + 1 }
      case 'reset':
        return { ...state, index: 0 }
      case 'header':
        return {
          ...state,
          header: state.header + header[state.index],
          index: state.index + 1,
        }
      case 'p1':
        return {
          ...state,
          p1: state.p1 + p1[state.index],
          index: state.index + 1,
        }
      case 'p2':
        return {
          ...state,
          p2: state.p2 + p2[state.index],
          index: state.index + 1,
        }
      case 'p3':
        return {
          ...state,
          p3: state.p3 + p3[state.index],
          index: state.index + 1,
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function delay(string) {
    if (state.index < 1) return 2000
    if (string[state.index] === ' ') return 200
    return 70
  }

  const runStep = (type, string, index) => {
    const reset = () => {
      stepDispatch({ type: 'next' })
      dispatch({ type: 'reset' })
    }

    if (index === string.length) setTimeout(reset, 2000)
    if (index < string.length)
      setTimeout(() => dispatch({ type }), delay(string))
  }

  useEffect(() => {
    step === 3 && runStep('header', header, state.index)
    step === 4 && runStep('p1', p1, state.index)
    step === 5 && runStep('p2', p2, state.index)
    step === 6 && runStep('p3', p3, state.index)
  }, [step, state])

  return (
    <article
      className={styles.about}
      data-hide-cursor={!cursor}
      data-step={step}
    >
      <h2>{state.header}</h2>
      <p data-step='4'>{state.p1}</p>
      <p data-step='5'>{state.p2}</p>
      <p data-step='6'>{state.p3}</p>
    </article>
  )
}
