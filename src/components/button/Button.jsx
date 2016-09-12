import styles from './styles';

export default function Button(props) {
    return (
        <div style={{
            ...styles.button,
            ...props.style
        }}>
            {props.children}
        </div>
    );
}
