import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

test('NumberOfEvents component should contain an element with role "textbox" and default value of 32', () => {
    const { getByRole } = render(<NumberOfEvents />);
    const textboxElement = getByRole('textbox');
    expect(textboxElement).toBeInTheDocument();
    expect(textboxElement.value).toBe('32');
})
test ('NumberOfEvents value should change depending on the value a user types in', async () => {
    const { getByRole } = render(<NumberOfEvents />);
    const textboxElement = getByRole('textbox');
    await userEvent.type(textboxElement, '{backspace}{backspace}10');
    expect(textboxElement).toBeInTheDocument();
    expect(textboxElement.value).toBe('10');

})