import './Title.scss';
import PT from 'prop-types';

export const Title = ({ children, amount }) => {
    // for return => null, false, true, 23, 'Hello', []

    return (
        <h1 className="title">
            {children} <span className="title__amount">{amount}</span>
        </h1>
    );
};

Title.propTypes = {
    amount: PT.number.isRequired
};
