# Chat Personal Trainer

A React Native mobile app concept that delivers personalized training plans and coaching via a conversational interface backed by the ChatGPT API.

## Vision
Build an always-available personal trainer that can:

- create personalized training plans based on goals, equipment, schedule, and experience,
- provide real-time coaching and form cues through chat,
- adapt plans using check-ins and progress metrics,
- support habit-building with reminders and streaks.

## Planned Features
- Onboarding flow to capture goals, limitations, equipment, and availability.
- Daily workout generator with warm-up, main sets, and cooldown.
- Progress tracking (workouts completed, volume, PRs, body metrics).
- Recovery & rest guidance (sleep, soreness, readiness).
- Safety guardrails and clear disclaimers.

## Tech Stack
- **React Native (Expo)**
- **TypeScript**
- **ChatGPT API** (coach logic)
- **SQLite** or **AsyncStorage** (local data)
- Optional backend for sync & analytics

## Repository Structure
```
.
├── app/                 # React Native app (Expo)
├── docs/                # Product and technical notes
└── tools/               # Scripts and utilities
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo Go app (for running on a device)

### Install
```
cd app
npm install
```

### Run
```
npm run start
```

Follow the Expo prompts to open the app on an emulator or a physical device.

## Roadmap
See [docs/roadmap.md](docs/roadmap.md).

## License
TBD
