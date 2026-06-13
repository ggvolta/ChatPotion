const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const themesDir = path.join(rootDir, "themes");
const packagesDir = path.join(rootDir, "packages");
const licensePath = path.join(rootDir, "LICENSE");
const morningPath = path.join(rootDir, "base", "morning.css");
const packageVersion = "1.0.2";

const cryptoSupport = `## Support

ChatPotion is free and open source. If you like the project and want to support future updates, you can donate here:

- **Bitcoin:** \`152t9E459z3o2C7Nt5ZsFCgfV6YcKtEph8\`
- **Ethereum:** \`0xf5e3dc3f7b421f66fd53b83a1e24dfe0f3b06103\`
- **Solana:** \`DwkYxTJ33QUzuuDP4GLJNSzLWD3wUHjiCyiW4ztzYcwW\`
- **Dogecoin:** \`DRyszSw99c7z82nfZBjrCgdPmc5QGymC74\`
- **Litecoin:** \`LQLoyKQuyd2gCGrNn6FLfVjjHuUz5oPXnm\`

Please double-check the address and network before sending. Crypto transactions cannot be reversed.

If you would like to be added to the supporters list, contact \`acidvoltax@proton.me\`.
`;

const themes = [
  ["arctic-aurora.css", "Arctic Aurora"],
  ["ayu-mirage.css", "Ayu Mirage"],
  ["catppuccin-mocha.css", "Catppuccin Mocha"],
  ["crimson-noir.css", "Crimson Noir"],
  ["cyberpunk-neon.css", "Cyberpunk Neon"],
  ["deep-sea-cyan.css", "Deep Sea Cyan"],
  ["dracula-soft.css", "Dracula Soft"],
  ["everforest-dark.css", "Everforest Dark"],
  ["forest-night.css", "Forest Night"],
  ["github-dark.css", "GitHub Dark"],
  ["gruvbox-material.css", "Gruvbox Material"],
  ["kanagawa-wave.css", "Kanagawa Wave"],
  ["matrix-terminal.css", "Matrix Terminal"],
  ["midnight-sapphire.css", "Midnight Sapphire"],
  ["monokai-pro.css", "Monokai Pro"],
  ["nord-frost.css", "Nord Frost"],
  ["one-dark-pro.css", "One Dark Pro"],
  ["rose-pine-moon.css", "Rosé Pine Moon"],
  ["solarized-night.css", "Solarized Night"],
  ["synthwave-sunset.css", "Synthwave Sunset"],
  ["tokyo-night.css", "Tokyo Night"]
];

if (!fs.existsSync(themesDir)) {
  throw new Error("themes folder not found.");
}

if (!fs.existsSync(licensePath)) {
  throw new Error("LICENSE file not found.");
}

if (!fs.existsSync(morningPath)) {
  throw new Error("base/morning.css file not found.");
}

fs.mkdirSync(packagesDir, { recursive: true });

const licenseText = fs.readFileSync(licensePath, "utf8");
const morningCss = fs.readFileSync(morningPath, "utf8").trimEnd();

for (const [fileName, displayName] of themes) {
  const slug = fileName.replace(".css", "");
  const packageName = `thelounge-theme-chatpotion-${slug}`;
  const packageDir = path.join(packagesDir, packageName);
  const sourceCss = path.join(themesDir, fileName);

  if (!fs.existsSync(sourceCss)) {
    throw new Error(`Missing theme file: ${sourceCss}`);
  }

  fs.mkdirSync(packageDir, { recursive: true });

  const css = fs.readFileSync(sourceCss, "utf8").trimStart();
  const fullThemeCss = `${morningCss}\n\n${css}\n`;

  fs.writeFileSync(path.join(packageDir, "theme.css"), fullThemeCss, "utf8");
  fs.writeFileSync(path.join(packageDir, "LICENSE"), licenseText, "utf8");

  const packageJson = {
    name: packageName,
    version: packageVersion,
    description: `${displayName} theme from ChatPotion for The Lounge IRC client.`,
    main: "package.json",
    keywords: [
      "thelounge",
      "thelounge-theme",
      "irc",
      "theme",
      "css",
      "dark-theme",
      "chatpotion"
    ],
    thelounge: {
      css: "theme.css",
      name: `ChatPotion ${displayName}`,
      type: "theme"
    },
    homepage: "https://github.com/ggvolta/ChatPotion#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/ggvolta/ChatPotion.git",
      directory: `packages/${packageName}`
    },
    bugs: {
      url: "https://github.com/ggvolta/ChatPotion/issues"
    },
    author: "ggvolta",
    license: "MIT",
    publishConfig: {
      access: "public"
    },
    files: [
      "theme.css",
      "README.md",
      "LICENSE"
    ]
  };

  fs.writeFileSync(
    path.join(packageDir, "package.json"),
    `${JSON.stringify(packageJson, null, 2)}\n`,
    "utf8"
  );

  const readme = `# ${packageJson.thelounge.name}

${displayName} theme from **ChatPotion** for [The Lounge](https://thelounge.chat/) IRC client.

![${displayName} preview](https://raw.githubusercontent.com/ggvolta/ChatPotion/main/screenshots/${slug}.png)

## Installation

Install the theme with The Lounge:

\`\`\`sh
thelounge install ${packageName}
\`\`\`

Restart The Lounge, open **Settings → Appearance**, and select:

\`\`\`text
${packageJson.thelounge.name}
\`\`\`

The **Morning** base CSS is bundled into this package, so no separate base-theme selection is required.

## Features

- Clean dark interface with a theme-specific color palette
- Halloy-inspired compact sidebar
- Separate unread and mention indicators
- Accordion Stack control for expanding and collapsing networks
- Improved recent-mentions panel and context-menu readability
- Responsive layout adjustments

## ChatPotion

This package is part of the complete ChatPotion collection. All 21 themes are published on npm:

- GitHub: https://github.com/ggvolta/ChatPotion
- npm profile: https://www.npmjs.com/~ggvolta

${cryptoSupport}

## License

MIT License.
`;

  fs.writeFileSync(path.join(packageDir, "README.md"), readme, "utf8");

  console.log(`Created ${packageName}@${packageVersion}`);
}

console.log("All ChatPotion theme packages generated successfully.");
