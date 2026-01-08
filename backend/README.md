# PhishGuard AI – Backend Service

This folder contains the backend service for the PhishGuard AI MVP.

## Purpose
The backend is responsible for analyzing webpage data sent from the browser extension and determining phishing risk.

## Responsibilities
- Receives webpage URL and content from the extension
- Applies phishing detection logic
- Returns risk classification:
  - Safe
  - Suspicious
  - Dangerous
- Handles user-reported phishing data

## MVP Note
- The backend runs locally for the prototype
- No permanent database is used in the MVP
- In production, this service is designed to be deployed on Azure App Service
