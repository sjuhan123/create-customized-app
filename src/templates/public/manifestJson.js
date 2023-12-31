const manifestJsonTemplate = `{
  "short_name": "My App",
  "name": "My App",
  "icons": [
    {
      "src": "%PUBLIC_URL%/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}`;

module.exports = manifestJsonTemplate;
