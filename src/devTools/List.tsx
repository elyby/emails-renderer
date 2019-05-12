import React, { FunctionComponent } from 'react';

interface Props {
    label: string;
    items: ReadonlyArray<string>;
    active: string;
    onChange: (item: string) => any;
}

const List: FunctionComponent<Props> = ({ label, items, active, onChange = () => {} }) => {
    return (
        <div>
            {label}:
            {items.map((item) =>
                <a
                    href="#"
                    key={item}
                    onClick={(event) => {
                        event.preventDefault();
                        onChange(item);
                    }}
                    style={{
                        padding: '0 5px',
                        color: active === item ? 'red' : '',
                    }}
                >
                    {item}
                </a>
            )}
        </div>
    );
};

export default List;
