declare module 'i18n/index.json' {
    const content: {
        [key: string]: {
            code: string;
            name: string;
            englishName: string;
            progress: number;
            isReleased: boolean;
        },
    };
    export default content;
}
