import styles from './styles';

export default function Input(props) {
    return (
        <div style={{
            ...styles.input,
            ...props.style
        }}>
            {props.children}
        </div>
    );
}
