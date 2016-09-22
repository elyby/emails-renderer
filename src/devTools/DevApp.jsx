import { Component } from 'react';

import App from 'App';

import List from './List';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from 'constants';

const EVAILABLE_EMAILS = require.context('emails', true, /index\.js$/).keys().map((path) => path.split('/')[1]);

export default class DevApp extends Component {
    state = {
        locale: DEFAULT_LANGUAGE,
        type: EVAILABLE_EMAILS[0],
        fixture: 'default',
        isMinimized: false
    };

    componentWillMount() {
        try {
            const lastState = JSON.parse(localStorage.getItem('emailRendererState'));
            lastState && this.setState(lastState);
        } catch (err) {/* no state was saved */}
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('emailRendererState', JSON.stringify(nextState));
    }

    render() {
        const {locale, type, isMinimized} = this.state;
        let {fixture} = this.state;

        let fixturesAvailable = {};
        try {
            fixturesAvailable = require(`emails/${type}/fixtures`).default;
        } catch (err) {/* no fixtures available */}

        if (!fixturesAvailable[fixture]) {
            fixture = 'default';
        }

        const payload = {
            locale,
            ...(fixturesAvailable[fixture] || {})
        };

        return (
            <div>
                <div style={isMinimized ? {
                    opacity: 0.4,
                    position: 'fixed'
                } : {}}>
                    [<a href="#" style={{textDecoration: 'none', padding: '6px'}} onClick={this.onMinimizeToggle}>
                        {isMinimized ? '+' : '-'}
                    </a>]

                    <div style={isMinimized ? {display: 'none'} : {}}>
                        <List label="Lang"
                            items={SUPPORTED_LANGUAGES}
                            active={locale}
                            onChange={this.onLocaleChange}
                        />

                        <List label="Email"
                            items={EVAILABLE_EMAILS}
                            active={type}
                            onChange={this.onTypeChange}
                        />

                        <List label="Fixtures"
                            items={Object.keys(fixturesAvailable)}
                            active={fixture}
                            onChange={this.onFixtureChange}
                        />
                    </div>
                </div>

                <App type={type} payload={payload} />
            </div>
        );
    }

    onLocaleChange = (locale) => this.setState({locale});
    onTypeChange = (type) => this.setState({type});
    onFixtureChange = (fixture) => this.setState({fixture});
    onMinimizeToggle = (event) => {
        event.preventDefault();

        this.setState({
            isMinimized: !this.state.isMinimized
        });
    }
}
