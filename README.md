# 🎵 Music

[![Version](https://img.shields.io/badge/version-4.2.0-blue.svg)](https://github.com/zos-apps/music/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-online-purple.svg)](https://zos-apps.github.io/music)

> Music player with playlist support

**[Documentation](https://zos-apps.github.io/music)** • **[App Store](https://zos-apps.github.io/app-store)** • **[All Apps](https://github.com/zos-apps)**

## Installation

```bash
npm install github:zos-apps/music
```

Or install via the [zOS App Store](https://zos-apps.github.io/app-store).

## Usage

```tsx
import Music from '@zos-apps/music';

function App() {
  return <Music />;
}
```

## Features

- Native zOS window integration
- Dark mode support
- Keyboard shortcuts (`Cmd+M`)
- Context menu actions
- Menu bar integration

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+M` | Open Music |

## Context Menu

Right-click the app icon for:
- **Open** - Launch the app
- **Open in New Window** - Open a new instance
- **Get Info** - View app details
- **Show in Finder** - Locate app files

## Menu Bar

When active, adds menus: Music, File, Edit, View, Window, Help

## Permissions

- `storage`

## Links

- [Documentation](https://zos-apps.github.io/music)
- [GitHub Repository](https://github.com/zos-apps/music)
- [Report Issues](https://github.com/zos-apps/music/issues)
- [All zOS Apps](https://github.com/zos-apps)

## License

MIT © [Hanzo AI](https://hanzo.ai)
