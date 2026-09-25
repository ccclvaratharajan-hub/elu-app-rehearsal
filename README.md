# ELU Upgrading — Rehearsal Functional V7

This rehearsal build is intentionally separate from production.

## Foundation
- Built from the current V7.56 production source structure and secure project seed.
- Rehearsal secure storage key is `elu_rehearsal_secure_state_v7`.
- Rehearsal photo database is `ELU_Photo_Inbox_Rehearsal_V7`.
- Production localStorage / photo IndexedDB names are not used or cleared.
- Existing project `data.js` source is copied unchanged into the rehearsal package.

## Functional modules
Dashboard, Block Board, Survey, Appointment Schedule, Unit Register, Complaint Register, Appointment Planner, Photo Report and Meeting Report use the working production logic inside the isolated rehearsal store.

## V7 premium work
- Premium command-centre shell and hero.
- Functional global Block / Unit / Name / Contact search.
- Premium Appointment Control Centre styling.
- Premium Planner styling.
- Real Call (`tel:`) and WhatsApp (`wa.me`) shortcuts where a resident contact exists.
- Functional quick actions for Planner, Appointment, Photo, Block Board, Meeting Report and Backup.
- PWA manifest and rehearsal service worker.

No production browser data is modified by this package.
