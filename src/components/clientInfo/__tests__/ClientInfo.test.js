import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import ClientInfo from "../ClientInfo";

describe('ClientInfo', () => {
    test('matches snapshot', async () => {
        const clientInfo = render(
            <MemoryRouter initialEntries={["/client-info/1402110922112412"]}>
                <ClientInfo/>
            </MemoryRouter>
        );
        expect(clientInfo).toMatchSnapshot();
    });
});