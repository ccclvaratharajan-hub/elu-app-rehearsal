# ELU Rehearsal V7 — Today Operations

Separate design checkpoint, continuing the V6 rehearsal. Production is unchanged.

## Open

Extract the ZIP and open `index.html` in your browser. No build or installation is required.

For GitHub Pages: upload the files INSIDE this ZIP to the root of the existing `elu-app-rehearsal` repository, replacing files with the same name. Keep this package out of `elu-upgrading-app`. The existing GitHub Pages branch/root setting can stay as it is. After the Pages build finishes, refresh the rehearsal page with Ctrl+Shift+R. Unused V6 `ui-v3.js` may remain but is no longer loaded. This package's service worker retires old rehearsal caches; V7 has no offline cache.

## New layout

- Compact icon rail and command header; no hero banner or KPI card grid.
- Horizontal zone filter with the six correct block ranges.
- Today Operations timeline: four fixed slots, two team lanes.
- Photo queue with before/during/after local image previews and review states.
- Floating action dock and responsive Activity / Alerts drawer.
- Read-only Unit Register, block board, survey workspace, issue list and meeting summary.
- Responsive desktop, tablet and mobile layouts, accessible control labels and keyboard focus.

## Working rehearsal interactions

Zone and text filters; schedule date and day controls; add/edit appointments; survey entry; issue creation/resolution; local photo previews/review; sample CSV export and report printing. All unit views use the same in-memory records. Duplicate units and conflicting bookings are rejected. A requires a completion date. C requires an assigned team.

## Design first — data later

All records and activity are illustrative. Changes and selected photographs exist only in the current browser tab and reset on refresh. There is no database, login, production integration or persistent storage. Actual overall progress is not calculated from these samples. Call and WhatsApp buttons open clear previews because no real phone numbers are supplied; they do not call or send messages. An exported CSV is explicitly labelled sample data.

Status colours: A green, C pink, D yellow, NR red. Appointments use 9am–11am, 11am–1pm, 2pm–4pm and 4pm–6pm. The initial date uses Singapore time. Zone 1: 564–569; Zone 2: 544–550; Zone 3: 531–536; Zone 4: 557–562; Zone 5: 537–543; Zone 6: 551–556.

Creator / Admin: manoharan varatharajan

## Verification

JavaScript syntax and DOM interaction checks passed for all seven workspaces, zone filtering, completion-date validation, duplicate-unit prevention, slot collision prevention, survey-to-register updates, local photo review, issue updates and the activity drawer. Browser rendering/screenshots could not be verified in the build environment because the browser download was unavailable. Review the desktop and mobile appearance before using this as the next design checkpoint.
