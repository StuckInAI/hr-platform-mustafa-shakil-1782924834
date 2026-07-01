---
status: pending
title: HR Platform – Full Featured
---

## Overview
A friendly, colorful HR platform with soft pastels, rounded shapes, and realistic sample data. It includes a sidebar navigation linking to all 8 sections. All data is stored in-memory as sample data files.

---

## Step 1 – Global styles and layout foundation
- In `/app/src/styles/global.css`, ensure it starts with `@import "tailwindcss";` and define a pastel color palette using CSS custom properties (e.g. soft purple, teal, pink, yellow, green accents).
- In `/app/src/main.tsx`, ensure the global CSS is imported once.
- Create `/app/src/components/Layout.tsx` — a full-page shell with a fixed left sidebar and a scrollable main content area.
- Create `/app/src/components/Sidebar.tsx` — a soft-colored sidebar with the app logo/name ("PeopleHub"), and navigation links for all 8 sections. Each link has a pastel icon background, label, and active highlight.
- **Expected outcome:** Opening the app shows a sidebar on the left and a blank content area on the right.

---

## Step 2 – Shared types
- Create `/app/src/types/employee.ts` — defines the `Employee` type: id, name, avatar (initials-based), role, department, email, phone, location, startDate, salary, status (active/on-leave/terminated).
- Create `/app/src/types/leave.ts` — defines `LeaveRequest`: id, employeeId, type, startDate, endDate, status (pending/approved/rejected), reason.
- Create `/app/src/types/recruitment.ts` — defines `JobOpening`: id, title, department, location, type (full-time/part-time/contract), status (open/closed), applicants count, postedDate.
- Create `/app/src/types/performance.ts` — defines `Review`: id, employeeId, reviewerId, period, rating (1–5), comments, status (pending/completed).
- Create `/app/src/types/announcement.ts` — defines `Announcement`: id, title, body, date, category, pinned.
- **Expected outcome:** All shared data shapes are defined and importable across the app.

---

## Step 3 – Sample data
- Create `/app/src/lib/data/employees.ts` — exports an array of 15 realistic sample employees across departments (Engineering, Design, Marketing, Sales, HR, Finance). Each has full fields including salary and startDate.
- Create `/app/src/lib/data/leaveRequests.ts` — exports ~10 sample leave requests referencing employee IDs, with mixed statuses.
- Create `/app/src/lib/data/jobOpenings.ts` — exports ~8 sample job openings across departments with mixed statuses.
- Create `/app/src/lib/data/reviews.ts` — exports ~12 sample performance reviews across employees and periods.
- Create `/app/src/lib/data/announcements.ts` — exports ~6 company announcements with varied categories (Policy, Event, Milestone).
- Create `/app/src/lib/data/orgChart.ts` — exports a nested tree structure representing the company hierarchy (CEO → VPs → Managers → ICs), using employee names.
- **Expected outcome:** Rich mock data is available for every section of the platform.

---

## Step 4 – Routing setup
- Install and configure `react-router-dom` in `/app/src/main.tsx` using `BrowserRouter`.
- In `/app/src/App.tsx`, define routes for:
  - `/` → redirects to `/dashboard`
  - `/dashboard` → Dashboard page
  - `/employees` → Employee Directory page
  - `/recruitment` → Recruitment page
  - `/leave` → Leave & Time-off page
  - `/payroll` → Payroll & Compensation page
  - `/performance` → Performance Reviews page
  - `/onboarding` → Onboarding page
  - `/org-chart` → Org Chart page
  - `/announcements` → Announcements page
- Wrap all routes inside the `Layout` component so sidebar is always visible.
- **Expected outcome:** Clicking sidebar links navigates to different pages without full page reload.

---

## Step 5 – Dashboard page
- Create `/app/src/pages/DashboardPage.tsx`.
- Show a welcome banner with a friendly greeting and today's date.
- Display 4 stat cards: Total Employees, Open Positions, Pending Leave Requests, Upcoming Reviews — each with a pastel background, large number, icon, and label.
- Show a "Recent Announcements" section with the latest 3 announcements as cards.
- Show a "Pending Leave Requests" mini-table with the top 5 pending requests (employee name, type, dates, status badge).
- Show a "New Hires This Month" strip listing employees who started recently.
- **Expected outcome:** Dashboard gives a visual summary of the entire HR platform at a glance.

---

## Step 6 – Employee Directory page
- Create `/app/src/pages/EmployeesPage.tsx`.
- Show a search bar and filter dropdowns (by department, status).
- Display employees in a responsive card grid — each card shows avatar initials in a pastel circle, name, role, department badge, email, and status pill (active = green, on-leave = yellow, terminated = red).
- Clicking a card opens a slide-in side drawer (`/app/src/components/EmployeeDrawer.tsx`) showing full employee details: contact info, salary, start date, leave history, and recent reviews.
- Include an "Add Employee" button (opens a modal form with all fields, saves to in-memory state).
- **Expected outcome:** Users can browse, search, filter, and view detailed profiles for all employees.

---

## Step 7 – Recruitment page
- Create `/app/src/pages/RecruitmentPage.tsx`.
- Show a header with total open positions count and an "Add Job Opening" button.
- Display job cards in a grid: title, department, location, type badge, applicant count, posted date, and open/closed status.
- Clicking a job card opens a modal with full details and a list of mock applicants (names + status: applied/interviewing/offered/rejected).
- Closed jobs appear greyed out.
- **Expected outcome:** HR can track open roles and their applicant pipeline.

---

## Step 8 – Leave & Time-off page
- Create `/app/src/pages/LeavePage.tsx`.
- Show a summary strip: total approved, total pending, total rejected.
- Display a filterable table of all leave requests: employee name, leave type, date range, duration (days), reason, and status badge with approve/reject action buttons for pending items.
- Clicking approve/reject updates the in-memory state and shows a success toast notification.
- Include a "Request Leave" button opening a form modal.
- **Expected outcome:** Managers can review and action all leave requests in one place.

---

## Step 9 – Payroll & Compensation page
- Create `/app/src/pages/PayrollPage.tsx`.
- Show a total payroll cost card, average salary card, and highest/lowest salary cards at the top.
- Display a sortable table of all employees: name, department, role, salary, and a mock "Last Paid" date.
- Include a department breakdown section showing average salary per department as a simple horizontal bar chart (built with plain divs and Tailwind widths — no chart library).
- **Expected outcome:** HR gets a clear overview of compensation across the company.

---

## Step 10 – Performance Reviews page
- Create `/app/src/pages/PerformancePage.tsx`.
- Show stat cards: total completed reviews, average rating across all, pending reviews.
- Display a filterable list of reviews: employee name, reviewer, period, star rating visual (filled circles or stars using characters), status badge, and a "View" button.
- Clicking "View" opens a modal with full review details and comments.
- Include a "Start Review" button opening a form modal to create a new review for any employee.
- **Expected outcome:** Teams can track and manage performance review cycles.

---

## Step 11 – Onboarding page
- Create `/app/src/pages/OnboardingPage.tsx`.
- Show a list of new hires (employees with a startDate within the last 30 days or marked as "onboarding").
- For each new hire, display an onboarding checklist with tasks: "Send welcome email", "Set up workstation", "IT access granted", "Introduction to team", "First 1:1 scheduled", "Benefits enrollment". Each task has a toggle checkbox (in-memory state per employee).
- Show a progress bar per employee based on how many tasks are completed.
- **Expected outcome:** HR can track onboarding progress for each new hire.

---

## Step 12 – Org Chart page
- Create `/app/src/pages/OrgChartPage.tsx`.
- Render the company hierarchy as a vertical tree using nested flexbox/grid divs. Each node is a rounded card with the person's name, title, and pastel avatar initials.
- Lines/connectors between nodes are drawn with Tailwind border utilities.
- Support at least 4 levels (CEO → VP → Manager → IC).
- **Expected outcome:** A clear visual map of who reports to whom across the company.

---

## Step 13 – Announcements page
- Create `/app/src/pages/AnnouncementsPage.tsx`.
- Show pinned announcements at the top in a highlighted pastel banner.
- Below, list all announcements as cards: title, category badge, date, and full body text.
- Include a category filter (All, Policy, Event, Milestone).
- Include a "Post Announcement" button opening a form modal (title, category, body, pin toggle) that prepends the new announcement to the list.
- **Expected outcome:** Company-wide updates are easy to browse and post.

---

## Step 14 – Shared UI components
- Create `/app/src/components/StatCard.tsx` — reusable pastel stat card with icon, label, and value.
- Create `/app/src/components/Badge.tsx` — colored pill for statuses, types, and categories.
- Create `/app/src/components/Modal.tsx` — centered overlay modal with backdrop, title, and close button.
- Create `/app/src/components/Toast.tsx` and `/app/src/hooks/useToast.ts` — a simple toast notification system that shows success/error messages at the bottom-right corner.
- Create `/app/src/components/Avatar.tsx` — initials-based avatar in a pastel circle with consistent color per name.
- **Expected outcome:** All pages use a consistent, polished set of reusable UI components.
