# ChatPotion

**ChatPotion** is a polished collection of 21 themes for [The Lounge](https://thelounge.chat/), focused on clean dark interfaces, readable chat layouts, distinct unread and mention indicators, and a compact Halloy-inspired sidebar.

All 21 ChatPotion themes are published on npm and can be installed individually through The Lounge or together using the ChatPotion all-theme installer.

ChatPotion is designed to be usable on both **desktop and mobile** layouts.

* [GitHub Repository](https://github.com/ggvolta/ChatPotion)
* [ChatPotion Installer](https://www.npmjs.com/package/chatpotion-installer)
* [ggvolta npm Profile](https://www.npmjs.com/~ggvolta)

## Preview

### Featured Themes

| Deep Sea Cyan                                   | Gruvbox Material                                      |
| ----------------------------------------------- | ----------------------------------------------------- |
| ![Deep Sea Cyan](screenshots/deep-sea-cyan.png) | ![Gruvbox Material](screenshots/gruvbox-material.png) |

| Tokyo Night                                 | Catppuccin Mocha                                      |
| ------------------------------------------- | ----------------------------------------------------- |
| ![Tokyo Night](screenshots/tokyo-night.png) | ![Catppuccin Mocha](screenshots/catppuccin-mocha.png) |

<details>
<summary>View all 21 theme previews</summary>

<br>

| Theme             | Preview                                                 |
| ----------------- | ------------------------------------------------------- |
| Arctic Aurora     | ![Arctic Aurora](screenshots/arctic-aurora.png)         |
| Ayu Mirage        | ![Ayu Mirage](screenshots/ayu-mirage.png)               |
| Catppuccin Mocha  | ![Catppuccin Mocha](screenshots/catppuccin-mocha.png)   |
| Crimson Noir      | ![Crimson Noir](screenshots/crimson-noir.png)           |
| Cyberpunk Neon    | ![Cyberpunk Neon](screenshots/cyberpunk-neon.png)       |
| Deep Sea Cyan     | ![Deep Sea Cyan](screenshots/deep-sea-cyan.png)         |
| Dracula Soft      | ![Dracula Soft](screenshots/dracula-soft.png)           |
| Everforest Dark   | ![Everforest Dark](screenshots/everforest-dark.png)     |
| Forest Night      | ![Forest Night](screenshots/forest-night.png)           |
| GitHub Dark       | ![GitHub Dark](screenshots/github-dark.png)             |
| Gruvbox Material  | ![Gruvbox Material](screenshots/gruvbox-material.png)   |
| Kanagawa Wave     | ![Kanagawa Wave](screenshots/kanagawa-wave.png)         |
| Matrix Terminal   | ![Matrix Terminal](screenshots/matrix-terminal.png)     |
| Midnight Sapphire | ![Midnight Sapphire](screenshots/midnight-sapphire.png) |
| Monokai Pro       | ![Monokai Pro](screenshots/monokai-pro.png)             |
| Nord Frost        | ![Nord Frost](screenshots/nord-frost.png)               |
| One Dark Pro      | ![One Dark Pro](screenshots/one-dark-pro.png)           |
| Rosé Pine Moon    | ![Rosé Pine Moon](screenshots/rose-pine-moon.png)       |
| Solarized Night   | ![Solarized Night](screenshots/solarized-night.png)     |
| Synthwave Sunset  | ![Synthwave Sunset](screenshots/synthwave-sunset.png)   |
| Tokyo Night       | ![Tokyo Night](screenshots/tokyo-night.png)             |

</details>

## Features

* 21 custom themes for The Lounge
* Installable npm package for every theme
* One-command installer for the complete collection
* Usable on desktop and mobile layouts
* Morning base CSS bundled into installable theme packages
* Halloy-inspired compact sidebar
* Adjustable sidebar width
* Accordion Stack control for expanding and collapsing networks
* Improved unread message dots
* Separate mention and ping indicators
* Themed recent-mentions panel
* Improved nickname colors and readability
* Cleaner message spacing and typography
* Improved context-menu readability
* Fixed private-message highlight behavior
* Better image-preview overlay styling
* Responsive layout adjustments
* Free and open source

## npm Packages

All 21 individual ChatPotion themes are available on npm under **ggvolta**.

* **npm profile:** https://www.npmjs.com/~ggvolta
* **Theme package naming:** `thelounge-theme-chatpotion-*`
* **Complete installer:** [chatpotion-installer](https://www.npmjs.com/package/chatpotion-installer)

## Installation

### Install All 21 Themes

Install the complete ChatPotion collection with one command:

```bash
npx chatpotion-installer
```

The installer will display all included themes and ask for confirmation before installation.

To skip the confirmation prompt:

```bash
npx --yes chatpotion-installer@latest --accept
```

The all-theme installer requires Node.js and npm. The `thelounge` command must also be available to the user running the installer.

After installation, restart The Lounge and open:

```text
Settings → Appearance
```

All 21 themes will remain individually selectable inside The Lounge.

### Debian and Ubuntu `.deb` Installations

If The Lounge was installed using the official Debian or Ubuntu `.deb` package, run the installer as the `thelounge` system user:

```bash
sudo -u thelounge -H npx --yes chatpotion-installer@latest --accept
```

Restart The Lounge afterward:

```bash
sudo systemctl restart thelounge.service
```

Then open:

```text
Settings → Appearance
```

### Preview the Installer Without Installing

To display all included packages without installing anything:

```bash
npx chatpotion-installer --dry-run
```

### Install a Single Theme

Install an individual ChatPotion theme directly through The Lounge:

```bash
thelounge install thelounge-theme-chatpotion-theme-name
```

Example:

```bash
thelounge install thelounge-theme-chatpotion-midnight-sapphire
```

Restart The Lounge after installation, then open:

```text
Settings → Appearance
```

The installable packages already include the **Morning** base CSS, so you do not need to select Morning separately.

<details>
<summary>Show installation commands for all 21 themes</summary>

<br>

| Theme             | Command                                                          |
| ----------------- | ---------------------------------------------------------------- |
| Arctic Aurora     | `thelounge install thelounge-theme-chatpotion-arctic-aurora`     |
| Ayu Mirage        | `thelounge install thelounge-theme-chatpotion-ayu-mirage`        |
| Catppuccin Mocha  | `thelounge install thelounge-theme-chatpotion-catppuccin-mocha`  |
| Crimson Noir      | `thelounge install thelounge-theme-chatpotion-crimson-noir`      |
| Cyberpunk Neon    | `thelounge install thelounge-theme-chatpotion-cyberpunk-neon`    |
| Deep Sea Cyan     | `thelounge install thelounge-theme-chatpotion-deep-sea-cyan`     |
| Dracula Soft      | `thelounge install thelounge-theme-chatpotion-dracula-soft`      |
| Everforest Dark   | `thelounge install thelounge-theme-chatpotion-everforest-dark`   |
| Forest Night      | `thelounge install thelounge-theme-chatpotion-forest-night`      |
| GitHub Dark       | `thelounge install thelounge-theme-chatpotion-github-dark`       |
| Gruvbox Material  | `thelounge install thelounge-theme-chatpotion-gruvbox-material`  |
| Kanagawa Wave     | `thelounge install thelounge-theme-chatpotion-kanagawa-wave`     |
| Matrix Terminal   | `thelounge install thelounge-theme-chatpotion-matrix-terminal`   |
| Midnight Sapphire | `thelounge install thelounge-theme-chatpotion-midnight-sapphire` |
| Monokai Pro       | `thelounge install thelounge-theme-chatpotion-monokai-pro`       |
| Nord Frost        | `thelounge install thelounge-theme-chatpotion-nord-frost`        |
| One Dark Pro      | `thelounge install thelounge-theme-chatpotion-one-dark-pro`      |
| Rosé Pine Moon    | `thelounge install thelounge-theme-chatpotion-rose-pine-moon`    |
| Solarized Night   | `thelounge install thelounge-theme-chatpotion-solarized-night`   |
| Synthwave Sunset  | `thelounge install thelounge-theme-chatpotion-synthwave-sunset`  |
| Tokyo Night       | `thelounge install thelounge-theme-chatpotion-tokyo-night`       |

</details>

### Custom Stylesheet Installation

The standalone CSS files inside the `themes` folder can also be used through The Lounge's Custom Stylesheet feature.

1. Open The Lounge.
2. Go to **Settings → Appearance**.
3. Select **Morning** as the base theme.
4. Open a CSS file inside the `themes` folder.
5. Copy the complete CSS.
6. Paste it into **Custom Stylesheet**.
7. Save the changes and refresh The Lounge.

## Themes Included

1. Arctic Aurora
2. Ayu Mirage
3. Catppuccin Mocha
4. Crimson Noir
5. Cyberpunk Neon
6. Deep Sea Cyan
7. Dracula Soft
8. Everforest Dark
9. Forest Night
10. GitHub Dark
11. Gruvbox Material
12. Kanagawa Wave
13. Matrix Terminal
14. Midnight Sapphire
15. Monokai Pro
16. Nord Frost
17. One Dark Pro
18. Rosé Pine Moon
19. Solarized Night
20. Synthwave Sunset
21. Tokyo Night

## Support

ChatPotion is free and open source. If you like the project and want to support future updates, you can donate here:

* **Bitcoin:** `152t9E459z3o2C7Nt5ZsFCgfV6YcKtEph8`
* **Ethereum:** `0xf5e3dc3f7b421f66fd53b83a1e24dfe0f3b06103`
* **Solana:** `DwkYxTJ33QUzuuDP4GLJNSzLWD3wUHjiCyiW4ztzYcwW`
* **Dogecoin:** `DRyszSw99c7z82nfZBjrCgdPmc5QGymC74`
* **Litecoin:** `LQLoyKQuyd2gCGrNn6FLfVjjHuUz5oPXnm`

Please double-check the address and network before sending. Cryptocurrency transactions cannot be reversed.

If you would like to be added to the supporters list, contact:

```text
acidvoltax@proton.me
```

## Project Structure

```text
ChatPotion
├── base
│   └── morning.css
├── packages
│   ├── chatpotion-installer
│   │   ├── bin
│   │   │   └── chatpotion-installer.js
│   │   ├── LICENSE
│   │   ├── README.md
│   │   └── package.json
│   └── thelounge-theme-chatpotion-*
├── screenshots
├── scripts
│   └── generate-packages.js
├── themes
├── CHANGELOG.md
├── LICENSE
├── package.json
└── README.md
```

## Development

After editing files inside `themes`, regenerate every installable theme package from the project root:

```bash
npm run generate:packages
```

Before publishing a package, inspect its contents:

```bash
npm pack --dry-run
```

## Notes

* The files inside `themes` are intended for The Lounge's Custom Stylesheet feature.
* The folders named `thelounge-theme-chatpotion-*` inside `packages` are complete installable The Lounge theme packages.
* The `chatpotion-installer` package installs all 21 individual theme packages.
* Every installed theme remains separately selectable in **Settings → Appearance**.
* ChatPotion is designed for desktop and mobile layouts.
* ChatPotion is an independent project and is not an official The Lounge theme collection or plugin.

## Feedback

Bug reports, theme suggestions and interface feedback are welcome.

* [Open an issue](https://github.com/ggvolta/ChatPotion/issues)
* [View the latest release](https://github.com/ggvolta/ChatPotion/releases/latest)

## Author

Made by **ggvolta**.

## License

This project is licensed under the MIT License.
