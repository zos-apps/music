# 🎵 Music

> Music player with playlist support

Part of the [zOS Apps](https://github.com/zos-apps) ecosystem.

## Installation

```bash
npm install github:zos-apps/music
```

## Usage

```tsx
import App from '@zos-apps/music';

function MyApp() {
  return <App />;
}
```

## Package Spec

App metadata is defined in `package.json` under the `zos` field:

```json
{
  "zos": {
    "id": "ai.hanzo.music",
    "name": "Music",
    "icon": "🎵",
    "category": "entertainment",
    "permissions": ["storage"],
    "installable": true
  }
}
```

## Version

v4.2.0

## License

MIT © Hanzo AI
