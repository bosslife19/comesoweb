import { render, screen } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal Component', () => {
    test('renders the modal when isOpen is true', () => {

        const isOpen = true;

        render(
            <Modal isOpen={isOpen}>
                <div data-testid="modal-content">Modal Content</div>
            </Modal>
        );

        const modalContent = screen.getByTestId('modal-content');
        expect(modalContent).toBeInTheDocument();
    });

    test('does not render the modal when isOpen is false', () => {

        const isOpen = false;


        render(
            <Modal isOpen={isOpen}>
                <div data-testid="modal-content">Modal Content</div>
            </Modal>
        );

        const modalContent = screen.queryByTestId('modal-content');
        expect(modalContent).not.toBeInTheDocument();
    });
});
