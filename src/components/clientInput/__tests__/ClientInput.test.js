import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import ClientInput from "../ClientInput";

describe('ClientInput', () => {
    test('matches snapshot when launching widget', () => {
        const clientInput = render(
            <MemoryRouter>
                <ClientInput launchWidget={true} />
            </MemoryRouter>
        );
        expect(clientInput).toMatchSnapshot();
    });

    test('matches snapshot when not launching widget', () => {
        const clientInput = render(
            <MemoryRouter>
                <ClientInput launchWidget={false} />
            </MemoryRouter>
        );
        expect(clientInput).toMatchSnapshot();
    });
});
