import styles from './styles';

export default function Content(props) {
    return (
        <div style={styles.content}>
            {props.children}
        </div>
    );
}
