# ♟️ ChessPY — Classic Board Game

A fully-featured web-based chess application with AI opponent, multiple difficulty levels, and time controls.

**Developed by:** Adonai Call & B-MAC Operations  
**AI Powered by:** Claude — Anthropic

## Features

- 🤖 **Play vs AI** — Easy, Medium, Hard, and Expert difficulty levels
- 👥 **Local Multiplayer** — Play with a friend on the same device
- ⏱️ **Time Challenge** — Preset or custom time controls (Bullet, Blitz, Rapid, Classical)
- 🎨 **6 Board Themes** — Classic Wood, Midnight Blue, Forest Green, Ruby Red, Royal Purple, Golden Hour
- 🌙 **Dark/Light Mode** — Toggle between themes
- 🔊 **Sound Effects** — Audio feedback for moves and captures
- 💡 **Hints** — Highlight valid moves while selecting pieces
- 📚 **Learn Chess** — Interactive tutorial with piece guide, rules, and AI tutor
- 🏠 **PWA Ready** — Install as an app on mobile and desktop

## How to Play

1. Choose a game mode: AI, Local, or Time Challenge
2. Select difficulty (for AI mode)
3. Click pieces to select them and see valid moves
4. Move pieces by clicking target squares
5. Promote pawns when they reach the opposite end
6. Checkmate your opponent to win!

## Installation

### Play Online
1. Open `index.html` in a modern web browser
2. Click the menu option to install as an app (on supported browsers)

### Install Locally
- Clone this repository
- Open `index.html` in your browser
- Or serve with a local server: `python -m http.server 8000`

## Technologies

- **HTML5** — Game interface and layout
- **CSS3** — Styling with themes and animations
- **Vanilla JavaScript** — Game logic and AI engine
- **Web Audio API** — Sound effects
- **Service Workers** — Offline support
- **Progressive Web App (PWA)** — Installable application

## Game Modes

### Play with AI
- **Easy:** Random moves
- **Medium:** Captures pieces, avoids blunders
- **Hard:** Minimax algorithm, 2-move lookahead
- **Expert:** Deep search with board evaluation, 3-move lookahead

### Local Multiplayer
- Two players take turns on the same device

### Time Challenge
- Pre-set time controls: 1min, 3min, 5min, 10min, 15min, 30min
- Custom time selection
- Clock display with low-time warning

## Special Features

- **Pawn Promotion** — Choose Queen, Rook, Knight, or Bishop
- **Move History** — Undo moves (even against AI!)
- **Check Detection** — Board highlights King under attack
- **Stalemate Detection** — Game ends in draw
- **Board Themes** — 6 unique color schemes
- **Settings Panel** — Customize sound, hints, and appearance
- **Developer Info** — Credits and attribution

## Future Enhancements

- Online multiplayer with WebSocket
- Game replay and analysis
- Opening book for better AI
- Move notation and PGN export
- Tournament mode

## License

Created for educational and entertainment purposes.

## Support

For issues, feedback, or suggestions, please open an issue on GitHub.

---

**Made with ❤️ by Adonai Call & B-MAC Operations**  
*Powered by Claude — Anthropic*
