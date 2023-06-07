import { classNames } from 'shared/lib/classNames/classNames';

describe('className', () => {
    test('Без доп.классов и модификаций', () => {
        expect(classNames('sometimes')).toBe('sometimes');
    });
    test('С дополнительными классами', () => {
        const expected = 'sometimes red';
        expect(classNames('sometimes', {}, ['red'])).toBe(expected);
    });
    test('С модифиациями', () => {
        const expected = 'sometimes blue';
        expect(classNames('sometimes', { red: false, blue: true }, [])).toBe(expected);
    });
    test('C модификациями и доп.классами', () => {
        const expected = 'sometimes hovered red small';
        expect(classNames('sometimes', { hovered: true, scrollable: undefined }, ['red', 'small'])).toBe(expected);
    });
});
