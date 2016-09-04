import { PropTypes } from 'react';

export default function List({label, items, active, onChange}) {
    return (
        <div>
            {label}:
            {items.map((key) =>
                <a href="#"
                    key={key}
                    onClick={(event) => {
                        event.preventDefault();

                        onChange && onChange(key);
                    }}
                    style={{
                        margin: '0 5px',
                        color: active === key ? 'red' : ''
                    }}
                >{key}</a>
            )}
        </div>
    );
}

List.propTypes = {
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.string,
    onChange: PropTypes.func
};
