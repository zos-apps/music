# 🎵 Music

Music player

## Category
`media`

## Installation

```bash
npm install @anthropic/music
# or
pnpm add @anthropic/music
```

## Usage

```tsx
import App from '@anthropic/music';

function MyComponent() {
  return <App onClose={() => console.log('closed')} />;
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Watch mode
pnpm dev
```

## zOS Integration

This app is designed to run within zOS, a web-based operating system. It follows the zOS app specification with:

- Standalone React component
- TypeScript support
- Tailwind CSS styling
- Window management integration

## License

MIT
