# Gthnk integration for VS Code

This VS Code extension provides [Gthnk](http://www.gthnk.com) integration.

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

Now connect to http://localhost:1620 and log in with the username `user@example.com` and the password `secret`.

## Changelog

See the [Changelog](CHANGELOG.md) for an itemized list of changes.

### For more information

- [Gthnk Website](http://gthnk.com)
- [Gthnk Documentation](http://docs.gthnk.com)
- [Gthnk on Github](https://github.com/iandennismiller/gthnk)
- [Gthnk Docker image on Github](https://github.com/iandennismiller/docker-gthnk)
- [Gthnk VS Code extension on Github](https://github.com/iandennismiller/vscode-gthnk)
