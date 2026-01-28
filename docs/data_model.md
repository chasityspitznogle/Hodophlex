# Hodophlex – Data Model

## Entities

### Block
- id: unique identifier (string/number)
- date: date of block
- scheduled_start: time
- scheduled_end: time
- actual_start: time
- actual_end: time
- earnings: number
- packages_delivered: number
- packages_undelivered: number
- vehicle_id: links to Vehicle
- station_id: links to Station

### Vehicle
- id: unique identifier
- make: text
- model: text
- year: number
- avg_mpg: number
- usage_count: number
- documents: list of file links
- repair_history: list of Expense IDs
- accident_reports: list of Incident IDs

### Station
- id: unique identifier
- name or code: text
- location: text
- block_count: number
- incident_reports: list of Incident IDs

### Expense
- id: unique identifier
- date: date
- amount: number
- type: text (fuel, repair, etc.)
- description: text
- location: text (optional)
- block_id: optional link
- vehicle_id: optional link

### Earnings
- id: unique identifier
- date: date
- block_id: link
- base_pay: number
- adjustments: number
- source: text
- notes: text (optional)

### Incident (Safety/Accident/Issue)
- id: unique identifier
- type: text (injury, vehicle, other)
- date: date/time
- title: text
- description: text
- resolved: true/false
- resolution_note: text
- related_block_id: optional
- related_vehicle_id: optional
- related_station_id: optional

---

## Relationships
- A Block links to one Vehicle, one Station, one User
- A Block can have many Expenses, Incidents, Earnings
- A Vehicle can have many Blocks, Expenses, Incidents

---

## Rules (optional)
- Expenses tied to a repair must link to a Vehicle
- An Incident marked “resolved” should have a resolution note

---
