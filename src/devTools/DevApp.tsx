import React, {
    BaseSyntheticEvent,
    FunctionComponent,
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from 'params';

import App from 'App';

import List from './List';

const AVAILABLE_TEMPLATES = require.context('emails', true, /index\.[jt]s$/).keys().map((path) => path.split('/')[1]);

interface LocalStorageState {
    locale: string;
    template: string;
    fixture: string;
    isMinimized: boolean;
}

const DevApp: FunctionComponent = () => {
    const [ locale, setLocale ] = useState(DEFAULT_LANGUAGE);
    const [ template, setTemplate ] = useState(AVAILABLE_TEMPLATES[0]);
    const [ fixture, setFixture ] = useState('default');
    const [ isMinimized, setIsMinimized ] = useState(false);

    // Load stored state from local storage on the first run
    useLayoutEffect(() => {
        let state: LocalStorageState;
        try {
            state = JSON.parse(localStorage.getItem('emailRendererState') || '');
            if (!state) {
                return;
            }
        } catch (err) {
            return;
        }

        setLocale(state.locale);
        setTemplate(state.template);
        setFixture(state.fixture);
        setIsMinimized(state.isMinimized);
    }, []);

    // Store current state to the local storage when any param is changed
    useEffect(() => {
        const state: LocalStorageState = { locale, template, fixture, isMinimized };
        localStorage.setItem('emailRendererState', JSON.stringify(state));
    }, [locale, template, fixture, isMinimized]);

    const availableFixtures = useMemo(() => {
        try {
            return require(`emails/${template}/fixtures`).default;
        } catch (err) {
            return {};
        }
    }, [template]);

    const payload = useMemo(() => ({
        locale,
        ...availableFixtures[fixture] || availableFixtures.default || {},
    }), [locale, availableFixtures, fixture]);

    const onMinimizeClick = useCallback((event: BaseSyntheticEvent) => {
        event.preventDefault();
        setIsMinimized(!isMinimized);
    }, [isMinimized, setIsMinimized]);

    return (
        <div>
            <div style={isMinimized ? {
                opacity: 0.4,
                position: 'fixed',
            } : {}}>
                [
                <a
                    href="#"
                    style={{
                        textDecoration: 'none',
                        padding: '6px',
                    }}
                    onClick={onMinimizeClick}
                >
                    {isMinimized ? '+' : '-'}
                </a>
                ]

                <div style={isMinimized ? {display: 'none'} : {}}>
                    <List
                        label="Lang"
                        items={SUPPORTED_LANGUAGES}
                        active={locale}
                        onChange={setLocale}
                    />

                    <List
                        label="Email"
                        items={AVAILABLE_TEMPLATES}
                        active={template}
                        onChange={setTemplate}
                    />

                    <List
                        label="Fixtures"
                        items={Object.keys(availableFixtures)}
                        active={fixture}
                        onChange={setFixture}
                    />
                </div>
            </div>

            <App type={template} payload={payload} />
        </div>
    );
};

export default DevApp;
