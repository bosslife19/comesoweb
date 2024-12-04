import { render, fireEvent } from '@testing-library/react';
import Table from '../components/Table';
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../../../store';


const testData = [
    {
        _id: '1',
        name: 'Item 1',
        status: 'true',
    },
    {
        _id: '2',
        name: 'Item 2',
        status: 'false',
    },
];

describe('Table Component', () => {
    it('renders table with correct data and headers', () => {
        const columns = [
            { value: 'name', text: 'Name' },
            { value: 'active', text: 'Status' },
        ];

        const { getByText, getAllByRole } = render(
            <Provider store={store}>
            <MemoryRouter>
                <Table
                    data={testData}
                    columns={columns}
                    itemsPerPage={10}
                        loading={false} searchQuery={''} openEditModal={() => { }}
                        openDeleteModal={() => { }}   />
            </MemoryRouter>
            </Provider>
        );


        columns.forEach(column => {
            const header = getByText(column.text);
            expect(header).toBeInTheDocument();
        });

        testData.forEach(item => {
            const row = getAllByRole('row').find(row => row.textContent?.includes(item.name));
            expect(row).toBeInTheDocument();
        });
    });

    it('allows selecting and deselecting items', () => {
        const columns = [
            { value: 'name', text: 'Name' },
            { value: 'status', text: 'Status' },
        ];

        const { getByTestId } = render(
            <Provider store={store}>
            <MemoryRouter>
                <Table
                    data={testData}
                    columns={columns}
                    itemsPerPage={10}
                    loading={false}
                        showCheckbox={true} searchQuery={''} openEditModal={() => { }}
                        openDeleteModal={() => { }}        />
            </MemoryRouter>
            </Provider>
        );

        const firstCheckbox = getByTestId('checkbox-0');

        expect(firstCheckbox).not.toBeChecked();

        fireEvent.click(firstCheckbox);

        expect(firstCheckbox).toBeChecked();

        fireEvent.click(firstCheckbox);

        expect(firstCheckbox).not.toBeChecked();
    });
});
