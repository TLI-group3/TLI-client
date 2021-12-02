import {render, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import ClientInput from "../ClientInput";
import React from "react";
import {InputForm} from "../InputForm";
import userEvent from "@testing-library/user-event";

const renderForm = (data, handleSubmit) => {
    return render(
        <MemoryRouter>
            <InputForm
                launchWidget={true}
                inputData={{clientIDs: "", generateEmail: false, generateWidget: true,}}
                inputRows="4"
                placeholderText="Type IDs"
                handleInsertID={jest.fn().mockImplementation((e) => data.push(e.target.value))}
                readFile={jest.fn()}
                handleSelectAction={jest.fn().mockImplementation((e) => data.push(e.target.value))}
                handleSubmit={handleSubmit}
            />
        </MemoryRouter>
    );
}

const renderClientInput = () => {
    return render(
        <MemoryRouter>
            <ClientInput launchWidget={true} />
        </MemoryRouter>
    );
}

describe('InputForm', () => {
    test('submits form when GO button clicked', () => {
        const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault());
        const form = renderForm([], handleSubmit);
        userEvent.click(form.getByRole('button', {name: /GO/i}));
        expect(handleSubmit).toBeCalledTimes(1);
    });

    test('registers a change in the text input field', () => {
        let result = [];
        const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault());
        const form = renderForm(result, handleSubmit);
        const textField = form.getByRole('textbox');
        userEvent.paste(textField, 'some input');
        expect(result).toStrictEqual(['some input']);
    });

    test('correctly reads an uploaded file', async () => {
        const clientInput = renderClientInput();
        const FileInput = clientInput.getByLabelText('Or, upload as a .txt file:');
        userEvent.upload(FileInput, new File(['1\r\n2\r\n3'], 'test.txt', {type: "text/plain"}));
        await new Promise((r) => setTimeout(r, 2000));
        expect(clientInput.getByText('1 2 3')).toBeInTheDocument();
    });
});