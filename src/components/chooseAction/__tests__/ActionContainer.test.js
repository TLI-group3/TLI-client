import React from 'react';
import {render} from '@testing-library/react';
import {ActionContainer} from "../ActionContainer";
import {MemoryRouter} from "react-router-dom";

describe('ActionContainer', () => {
    test('matches snapshot', () => {
        const actionContainer = render(
            <MemoryRouter>
                <ActionContainer />
            </MemoryRouter>
        );
        expect(actionContainer).toMatchSnapshot();
    });
});
