# Gthnk integration for VS Code

This VS Code extension provides [Gthnk](http://www.gthnk.com) integration.

This extension can be installed through the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IanDennisMiller.gthnk).

## Features

Install this extension to easily insert date and time markers within your Gthnk journal.

- Ctrl-Alt-Cmd-N: date marker
- Ctrl-Alt-Cmd-M: time marker

For Windows machines, use the `Windows key` instead of `Cmd`.

## Requirements

This extension requires [Gthnk](http://www.gthnk.com) to be installed.

Gthnk runs inside a Docker container:

```
docker run -d --rm \
    --name gthnk \
    -p 1620:1620 \
    -v ~/.gthnk:/home/gthnk/storage \
    iandennismiller/gthnk
```

## Usage

The default journal is `~/.gthnk/journal.txt`, where you will record your notes.
Open `journal.txt` in VS Code:

```
code ~/.gthnk/journal.txt
```

### Journal Entries

To get started with `journal.txt`, insert a date marker (Ctrl-Alt-Cmd-N) to start a new journal day.
Then, insert a time marker (Ctrl-Alt-Cmd-M) to start a journal entry.
Now you can compose your note in `journal.txt`.

You can add multiple entries per day - and even multiple days - by inserting date and time markers as you work.

### Gthnk Interface

To interact with the Gthnk journal, connect to http://localhost:1620 and log in with the username `user@example.com` and the password `secret`.

Click the **refresh** icon in the Journal interface to make Gthnk import from `journal.txt`.
Now your journal entries are indexed and searchable - and `journal.txt` is a blank document waiting for your next entries.

### Next Steps

Gthnk can do much more than this - [see the Gthnk website](http://www.gthnk.com) to learn about Gthnk.

## Changelog

See the [Changelog](CHANGELOG.md) for an itemized list of changes.

### For more information

- [Gthnk Website](http://gthnk.com)
- [Gthnk Documentation](http://docs.gthnk.com)
- [Gthnk on Github](https://github.com/iandennismiller/gthnk)
- [Gthnk Docker image on Github](https://github.com/iandennismiller/docker-gthnk)
- [Gthnk VS Code extension on Github](https://github.com/iandennismiller/vscode-gthnk)
- [Gthnk Extension from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IanDennisMiller.gthnk)