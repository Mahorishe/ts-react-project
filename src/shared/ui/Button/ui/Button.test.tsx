import {render, screen} from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button'
describe('Тест UI Button', () => {
  test('Test', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('Test with Theme', () => {
    render(<Button className={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})