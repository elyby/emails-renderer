import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import { colors, green } from 'components/ui/colors';

export default class Button extends Component {

    static propTypes = {
        label: PropTypes.node.isRequired,
        color: PropTypes.oneOf(Object.values(colors))
    };

    static defaultProps = {
        color: green
    };

    render() {
        const {props} = this;
        const {color, label} = props;

        return (
            <div style={{
                ...styles.button,
                ...styles[color],
                ...props.style
            }}>
                {label}
            </div>
        );
    }

}
