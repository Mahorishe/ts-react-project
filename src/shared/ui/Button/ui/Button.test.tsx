import {render, screen} from '@testing-library/react'
import { Button } from 'shared/ui/Button'
describe('Тест UI Button', () => {
  test('Test', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})