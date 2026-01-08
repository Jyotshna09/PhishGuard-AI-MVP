# PhishGuard AI – Browser Extension

This folder contains the browser extension component of **PhishGuard AI**, built as part of the Microsoft Imagine Cup 2026 MVP.

## Purpose
The browser extension helps users detect phishing and unsafe websites while browsing.  
It allows users to manually scan a webpage and get a clear risk indication.

## Key Features
- Scan the currently opened webpage
- Classifies the page as:
  - Safe
  - Suspicious
  - Dangerous
- Shows a simple explanation for the risk
- Allows users to report phishing attempts

## How It Works
1. User opens a webpage in Chrome or Edge
2. User clicks the PhishGuard AI extension
3. Clicks **Scan Page**
4. The extension analyzes:
   - URL structure
   - Domain patterns
   - Presence of login or urgent keywords
5. Result is shown inside the extension popup

## Files Description
- `manifest.json` – Extension configuration
- `popup.html` – User interface
- `popup.js` – Handles user actions (scan, report)
- `content.js` – Reads webpage URL and content

## MVP Note
- This is a **manual scan MVP**
- Automatic blocking and background scanning are planned as future enhancements
