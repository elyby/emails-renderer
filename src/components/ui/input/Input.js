import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors, green } from 'components/ui/colors';

import styles from './styles';

export default class Input extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        color: PropTypes.oneOf(Object.values(colors)),
    };

    static defaultProps = {
        color: green,
    };

    render() {
        const {props} = this;
        const {value, color, style} = props;

        return (
            <div style={{
                ...styles.input,
                ...styles[color],
                ...style
            }}>
                {value}
            </div>
        );
    }
}
