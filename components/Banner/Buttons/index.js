import Button from 'components/Button'
import LinkedIn from 'components/LinkedIn'

export default function Buttons() {
  return (
    <span data-hide={state.step < 8}>
      <Button
        disabled={state.step < 8}
        url='https://github.com/shawnkelleydev/skd-next-2'
      >
        see the repo
      </Button>

      <a
        href='https://www.linkedin.com/in/shawnkelleydev/'
        rel='noreferrer'
        target='_blank'
      >
        <LinkedIn />
      </a>
    </span>
  )
}
