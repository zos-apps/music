import React, { useState } from 'react';

interface MusicProps { onClose: () => void; }

const PLAYLISTS = ['Recently Added', 'Top 25 Most Played', 'Favorites'];
const SONGS = [
  { title: 'Midnight City', artist: 'M83', album: 'Hurry Up, We\'re Dreaming', duration: '4:03' },
  { title: 'Starboy', artist: 'The Weeknd', album: 'Starboy', duration: '3:50' },
  { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20' },
  { title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23' },
  { title: 'Save Your Tears', artist: 'The Weeknd', album: 'After Hours', duration: '3:35' },
];

const Music: React.FC<MusicProps> = ({ onClose }) => {
  const [playing, setPlaying] = useState<number | null>(null);
  const [view, setView] = useState('library');

  return (
    <div className="h-full flex bg-gradient-to-b from-red-600 to-red-900">
      <div className="w-56 bg-black/50 p-4">
        <h1 className="text-xl font-bold text-white mb-6">🎵 Music</h1>
        <div className="space-y-1">
          {['Library', 'For You', 'Browse', 'Radio'].map(item => (
            <button key={item} onClick={() => setView(item.toLowerCase())} className={`w-full text-left px-3 py-2 rounded ${view === item.toLowerCase() ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}>{item}</button>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-xs uppercase text-white/40 mb-2">Playlists</h2>
          {PLAYLISTS.map(p => <button key={p} className="block w-full text-left px-3 py-1 text-white/60 hover:text-white text-sm">{p}</button>)}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Library</h2>
          <table className="w-full text-white">
            <thead><tr className="text-left text-white/40 border-b border-white/10"><th className="pb-2">#</th><th className="pb-2">Title</th><th className="pb-2">Artist</th><th className="pb-2">Album</th><th className="pb-2">⏱</th></tr></thead>
            <tbody>
              {SONGS.map((s, i) => (
                <tr key={i} onClick={() => setPlaying(i)} className={`hover:bg-white/10 cursor-pointer ${playing === i ? 'bg-white/20' : ''}`}>
                  <td className="py-3">{playing === i ? '▶️' : i + 1}</td>
                  <td className="py-3">{s.title}</td>
                  <td className="py-3 text-white/60">{s.artist}</td>
                  <td className="py-3 text-white/60">{s.album}</td>
                  <td className="py-3 text-white/40">{s.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {playing !== null && (
          <div className="mt-auto p-4 bg-black/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center text-2xl">🎵</div>
            <div className="flex-1"><div className="text-white font-bold">{SONGS[playing].title}</div><div className="text-white/60 text-sm">{SONGS[playing].artist}</div></div>
            <div className="flex gap-2">{['⏮', '⏸', '⏭'].map(b => <button key={b} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full">{b}</button>)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Music;
