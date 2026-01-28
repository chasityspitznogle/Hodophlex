# Hodophlex – Design Document

## Overview
A hybrid web app for Amazon Flex drivers to track and organize earnings, mileage, expenses, and blocks, generate printable reports (PDF/print/doc), and spot trends/patterns. Works on mobile and desktop.

## Goals & Vision
- Main problem(s) this solves
- Who benefits from the app

## User Stories
- As a driver, I want to track my earnings, mileage, expenses, and blocks in one app for easier tax reporting and future planning.
- As a driver, I want to log each block, including earnings, times, and delivered packages, to compare patterns.
- As a driver, I want to report accidents, safety issues, or hazards during a block and link them.
- As a driver, I want a fast, customizable report generator (PDF/print/doc) for any timeframe, with visual graphs/charts.
- As a driver, I want to enter multiple blocks per day, and track packages delivered per block.

## Key Features
- List the main features you want in version 1

## App Workflow
Describe the major screens or steps a user takes (block entry → review earnings → generate report, etc.)

## Requirements
- Functional Requirements:
    - Track earnings, mileage, expenses
    - Log blocks with all details, allow multiple per day
    - Report and track incidents tied to blocks
    - Save account info and allow sign-in across devices
    - Online storage with ability to download/print/export reports
    - Allow manual data corrections anywhere
- Non-functional: 
    - Auto-mileage tracking with map
    - Block schedule/offer and package tracking
    - Prediction/stats features (patterns)
    - AI assistance (optional)
    - Visual graphs for performance
    - Customizations (themes, logo, etc.)
    - Fast, intuitive UI optimized for mobile
    - Robust error handling, support for manual input

## Technology/Architecture
- Planned tech stack/platform (web, mobile, database)
- Free libraries/services/tools to use

- Data Model Entities (with sample fields):
    - User: profile, login info, linked vehicles/stations
    - Block: unique BlockID, date, scheduled/actual times, earnings, packages delivered/undelivered, linked incidents, vehicle, station
    - Vehicle: year, make, model, avg. mpg, repairs, usage count, documents (registration, insurance), accidents
    - Expense: unique ID, date, amount, type (fuel, repair…), details (fuel: gas station, gallons, price; repair: shop, service...), linked block/vehicle, optional location
    - Station: ID, location, usage count, incident reports
    - Earnings: unique ID, date, linked block, base pay, bonuses/adjustments, type/source
    - Incident: unique ID, type (safety, dog, vehicle, etc.), date, title/desc, resolved?, linked block/vehicle/station
- Architecture:
    - Hybrid web app (works on web/mobile/tablet)
    - Uses open-source tools if possible
    - Git for version control
    - Web app + database (possibly cloud-based for sync/backup)

## Risks & Limitations
- Data mistakes: allow manual input/editing
- GPS failures: offer manual input
- Report generation errors: provide reports by email/alternate file type

## Wireframes or Sketches
Attach images or describe layouts for key screens.
- lock entry: simple form with text fields, drop-downs for station/vehicle
- Reports: summary cards, report type buttons, range picker, output type select, download button
- Incident/issue form: checkboxes, fields for details, confirmation step

---
