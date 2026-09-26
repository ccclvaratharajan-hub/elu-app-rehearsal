# ELU Rehearsal V9 — Command Centre

A working HTML/CSS design rehearsal based on the reference dashboard image. The production app is separate. Open `index.html` or upload the contents of this ZIP to the root of `elu-app-rehearsal` on GitHub Pages. The package includes the generated HDB hero asset, project-zone illustration, code and icons.

## Screens

Dashboard: project hero, sample progress, status cards, six-zone view, illustrative zone diagram, two-team appointments, photo workflow and quick actions. Inner screens have their own layouts: Appointment Planner, Photo Report, Unit Register, Block Board, Survey Visits, Issues and Meeting Report. Links and navigation work across them.

## Demo behavior

A single in-memory sample record updates the survey, planner, dashboard, read-only Unit Register, Block Board and report. The fixed slots are 9–11, 11–1, 2–4 and 4–6; Team 1 and Team 2 each have a lane. Unit duplicates and double bookings are rejected. A requires a completion date; C requires a team and appointment date. New survey entries may leave the appointment date blank. Photo upload and review are local previews. CSV exports sample records. Calls and WhatsApp open previews without contacting anyone. The activity drawer shows demo events.

All figures, owner names and unit records in this package are sample content and reset on refresh. The diagram shows correct block ranges but is an illustrative layout, not a surveyed map. The photo banner is an AI-created illustrative HDB scene, not a photograph of the project blocks. No real project data, authentication, server storage or message integration is connected.

## Upload

Extract the ZIP, then upload the files inside it to `elu-app-rehearsal`. Do not upload to the production `elu-upgrading-app`. After the Pages build, use Ctrl+Shift+R to refresh.

Creator/Admin: manoharan varatharajan.
