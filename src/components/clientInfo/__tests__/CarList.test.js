import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import CarList from "../CarList";

describe('CarList', () => {
    test('contains list of recommended cars', async () => {
        const carlist = render(<CarList clientId="1402110922112412"/>);
        // TODO: fix this test so that it actually receives the cars
        await waitFor(() => carlist.queryByRole("button") !== null);
        expect(carlist.getByRole("button")).toBeInTheDocument();
    });

    test('when car is selected, details card for that car opens', () => {
        // TODO: write this test once the previous is fixed
    });
});