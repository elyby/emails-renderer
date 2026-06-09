export default [
    {
        locale: 'udm',
        pluralRuleFunction: () => 'other',
        fields: {
            year: {
                displayName: 'ар',
                relative: {
                    0: 'таяз аре',
                    1: 'вуоно аре',
                    '-1': 'кылем аре',
                },
                relativeTime: {
                    future: { other: '{0} ар ортчыса' },
                    past: { other: '{0} ар талэсь азьло' },
                },
            },
            'year-short': {
                displayName: 'ар',
                relative: {
                    0: 'туэ',
                    1: 'вуоно аре',
                    '-1': 'кылем аре',
                },
                relativeTime: {
                    future: { other: '{0} ар ортчыса' },
                    past: { other: '{0} ар талэсь азьло' },
                },
            },
            month: {
                displayName: 'толэзь',
                relative: {
                    0: 'таяз толэзе',
                    1: 'вуоно толэзе',
                    '-1': 'ортчем толэзе',
                },
                relativeTime: {
                    future: { other: '{0} толэзь ортчыса' },
                    past: { other: '{0} толэзь талэсь азьло' },
                },
            },
            'month-short': {
                displayName: 'толэзь',
                relative: {
                    0: 'таяз толэзе',
                    1: 'вуоно толэзе',
                    '-1': 'ортчем толэзе',
                },
                relativeTime: {
                    future: { other: '{0} толэзь ортчыса' },
                    past: { other: '{0} толэзь талэсь азьло' },
                },
            },
            day: {
                displayName: 'нунал',
                relative: {
                    0: 'туннэ',
                    1: 'ӵуказе',
                    2: 'ӵуказе улыса',
                    '-2': 'валлян',
                    '-1': 'толон',
                },
                relativeTime: {
                    future: { other: '{0} нунал ортчыса' },
                    past: { other: '{0} нунал талэсь азьло' },
                },
            },
            'day-short': {
                displayName: 'нунал',
                relative: {
                    0: 'туннэ',
                    1: 'ӵуказе',
                    2: 'ӵуказе улыса',
                    '-2': 'валлян',
                    '-1': 'толон',
                },
                relativeTime: {
                    future: { other: '{0} нунал ортчыса' },
                    past: { other: '{0} нунал талэсь азьло' },
                },
            },
            hour: {
                displayName: 'час',
                relative: {
                    0: 'таяз часэ',
                },
                relativeTime: {
                    future: { other: '{0} час ортчыса' },
                    past: { other: '{0} час талэсь азьло' },
                },
            },
            'hour-short': {
                displayName: 'час',
                relative: {
                    0: 'таяз часэ',
                },
                relativeTime: {
                    future: { other: '{0} час ортчыса' },
                    past: { other: '{0} час талэсь азьло' },
                },
            },
            minute: {
                displayName: 'минут',
                relative: {
                    0: 'таяз минутэ',
                },
                relativeTime: {
                    future: { other: '{0} минут ортчыса' },
                    past: { other: '{0} минут талэсь азьло' },
                },
            },
            'minute-short': {
                displayName: 'минут',
                relative: {
                    0: 'таяз минутэ',
                },
                relativeTime: {
                    future: { other: '{0} минут ортчыса' },
                    past: { other: '{0} минут талэсь азьло' },
                },
            },
            second: {
                displayName: 'секунд',
                relative: {
                    0: 'таяз секундэ',
                },
                relativeTime: {
                    future: { other: '{0} секунд ортчыса' },
                    past: { other: '{0} секунд талэзь азьло' },
                },
            },
            'second-short': {
                displayName: 'секунд',
                relative: {
                    0: 'таяз секундэ',
                },
                relativeTime: {
                    future: { other: '{0} секунд ортчыса' },
                    past: { other: '{0} секунд талэзь азьло' },
                },
            },
        },
    },
];
