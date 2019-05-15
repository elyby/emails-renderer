declare module '*.intl.json' {
    const content: {
        [key: string]: {
            id: string;
            defaultMessage: string;
        };
    };
    export default content;
}
