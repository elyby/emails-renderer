This package allows rendering of React components into plain HTML to use it in emails. Each directory in `emails` dir corresponds to separate email template. Each email component will receive payload, passed from command line:

```
node cli --type=<email_dir_name> --payload=<json_encoded_in_base64> [--assetsHost=<scheme://host:port>] [--locale=be]
```

Try `php example.php` for demo.

# Email component structure

* `index.js` — required. This file should export the main component, wich will receive payload.
* `fixtures.js` — an optional file exports hash `{featureId: payload, featureId2: payload}`. Use this to create data samples for testing in dev mode.
* `styles.js` — an optional file, that will hold style objects for email components to allow style inlining.
* `messages.intl.json` — an optional file, that exports hash with `{messageId: defaultMessage}` for `react-intl`.

# Available npm scripts

* `npm start` — starts app in dev mode.
* `npm run i18n` — collects translations and places in `src/i18n`.
* `npm run build` — builds app for usage in `cli.js`.
* `npm run eslint` — lints source files.
