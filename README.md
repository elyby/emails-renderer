# E-mails renderer

An internal tool used to render beautiful multilingual E-mail templates on the Accounts Ely.by project.
The template engine uses React.js components, which are rendered into pure HTML with inlined styles, ready to be sent
to the mail.

Each directory in `emails` dir corresponds to separate email template. Each email component will receive payload, passed from command line:

## Development

First of all you need a copy of the repository. If you are planning to send a Pull Request, first
[create a fork](https://help.github.com/en/articles/fork-a-repo) of the repository. Then run the following commands:

```sh
# Clone your fork
git clone https://github.com/<your_username>/emails-renderer.git
# Switch to the project folder
cd emails-renderer
# Install dependencies
yarn install
```

For the purpose of development, the project has a convenient development server and a toolbar that simplifies
templates debugging. To run it, use the `start` command:

```sh
yarn start
```

The server will be started at port `8080`. You can open it in your browser by going to `http://localhost:8080`.

### Email component structure

* `index.ts` — required. This file should export the main component, which will receive payloads.
* `fixtures.ts` — an optional file exports hash `{featureId: payload, featureId2: payload}`.
  Use this to create data samples for testing in dev mode.
* `styles.ts` — an optional file, that will hold styles objects for email components to allow styles inlining.
* `messages.intl.json` — an optional file, that exports hash with `{messageId: defaultMessage}` for `react-intl`.

## Translating

Ely.by translation is done through the [Crowdin](https://crowdin.com) service.
[Click here](https://translate.ely.by/project/elyby/invite) to participate in the translation of the project.
