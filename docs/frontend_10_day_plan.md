# Frontend Development Plan – Next 10 Days

This plan focuses only on the frontend first. The goal is to make the website look professional, complete, and ready for future backend integration.

## Goal of the frontend
Build a polished campus lost & found web app that can:
- show a strong home page
- let users browse items
- let users register/login
- let users post lost/found items
- let users view item details
- show a dashboard for normal users
- show an admin dashboard for admins

The frontend should feel like a real product, even before the backend is fully connected.

---

## Overall design approach
Build the frontend in this order:
1. Layout and navigation
2. Home page
3. Authentication pages
4. Browse items page
5. Item details page
6. Post item page
7. Dashboard page
8. Admin dashboard page
9. Polish and responsiveness
10. Prepare for backend connection

---

## Day 1 – Project frontend foundation
### Objectives
- review current React structure
- make the app layout consistent
- improve the navbar and page spacing

### What to build
- sticky navbar
- responsive page container
- consistent colors and typography
- reusable button and card styles

### What to display
- app name: Campus Lost & Found
- nav links: Home, Browse, Post Item, Dashboard, Admin, Login

### Deliverable
A clean and professional base layout for the whole website.

---

## Day 2 – Home page design
### Objectives
- create a strong main landing page

### What to build
- hero section with headline and CTA buttons
- statistics cards
- recent items section
- call-to-action section for posting items

### What to display
- welcome heading
- short introduction about the platform
- recent lost and found items cards
- numbers like total items, resolved, claims, active users

### Deliverable
A polished homepage that looks like a real SaaS/product website.

---

## Day 3 – Authentication pages
### Objectives
- design login and register pages

### What to build
- login form
- register form
- simple validation UI
- toggle between login and register
- success/error message placeholders

### What to display
- email and password fields
- name field for register
- submit buttons
- links to switch forms

### Deliverable
Pages that look professional and ready for future backend authentication.

---

## Day 4 – Browse Items page
### Objectives
- design the main listing page

### What to build
- search bar
- filter controls
- item cards grid
- empty state for no results

### What to display
- item title
- item description preview
- category
- location
- status badge
- image preview

### Deliverable
A page where users can browse all current listings.

---

## Day 5 – Item Details page
### Objectives
- design a full detail page for one item

### What to build
- large image section
- item description
- metadata section
- reporter information placeholder
- claim button
- similar items section

### What to display
- item title
- status
- location
- category
- description
- date reported
- claim action

### Deliverable
A detailed view that makes users feel the item is real and actionable.

---

## Day 6 – Post Item page
### Objectives
- create the form used to report a new item

### What to build
- form with title, category, status, location, description, image URL field
- clear labels
- success message placeholder

### What to display
- option to report lost item
- option to report found item
- short instruction text

### Deliverable
A fully styled form for posting new items.

---

## Day 7 – User Dashboard page
### Objectives
- create the personal dashboard view

### What to build
- summary cards
- recent activity section
- list of user posts
- list of claims made by the user

### What to display
- total posts
- lost items count
- found items count
- claims count
- recent actions

### Deliverable
A dashboard that helps a user monitor their activity.

---

## Day 8 – Admin Dashboard page
### Objectives
- create the admin management view

### What to build
- summary cards for pending items and users
- pending approvals section
- user management section
- analytics panel placeholder

### What to display
- pending items needing review
- number of users
- claims waiting approval
- category trends placeholder

### Deliverable
A clear admin interface for moderation and review.

---

## Day 9 – Responsive polish and consistency
### Objectives
- make the website look smooth on all screen sizes

### What to build
- mobile-friendly navbar
- stacked card layout on smaller screens
- consistent spacing
- hover states and transitions

### What to display
- same experience on mobile and desktop

### Deliverable
A polished and professional responsive UI.

---

## Day 10 – Prepare for backend connection
### Objectives
- make the frontend ready for API integration

### What to build
- clear structure for services folder
- placeholders for API calls
- state management for auth and items
- loading and error states design

### What to display
- loading spinners or placeholders
- empty states
- future-ready form handling

### Deliverable
A frontend that is clean, structured, and ready for backend integration.

---

## Pages we need to build

### 1. Home page
Purpose: show the product and attract users

Content:
- hero section
- recent items
- statistics cards
- CTA buttons

### 2. Login page
Purpose: allow registered users to sign in

Content:
- email field
- password field
- login button
- register link

### 3. Register page
Purpose: allow new users to create accounts

Content:
- name field
- email field
- password field
- register button
- login link

### 4. Browse Items page
Purpose: let users discover lost and found items

Content:
- search bar
- category filter
- status filter
- location filter
- item cards

### 5. Item Details page
Purpose: show a full item record

Content:
- image
- title
- description
- category
- location
- status
- report details
- claim button

### 6. Post Item page
Purpose: let users report lost or found items

Content:
- title
- category
- status
- location
- image upload field
- description
- submit button

### 7. Dashboard page
Purpose: show user-specific activity

Content:
- total posts
- lost/found counts
- claims count
- recent activity list

### 8. Admin Dashboard page
Purpose: moderate content and manage users

Content:
- pending approvals
- user list
- stats cards
- moderation panel

---

## What data should each page display

### Home page
- recent items
- featured stats
- call-to-action buttons

### Login page
- email/password input
- no sensitive data shown yet

### Register page
- full name, email, password

### Browse page
- title
- description preview
- category
- location
- status
- image

### Item details page
- full description
- reporter name
- location
- date reported
- claim status

### Post Item page
- title
- category
- status
- location
- image
- description

### Dashboard page
- personal post list
- personal claims list
- totals and activity

### Admin Dashboard page
- pending items
- user list
- analytics cards
- moderation controls

---

## What should be shown for normal users
Normal users should see:
- home page
- browse items
- item details
- post item page
- dashboard
- login/register

They should not see admin-only management features.

---

## What should be shown for admins
Admins should see:
- admin dashboard
- pending items queue
- user management panel
- moderation actions
- analytics summary

Admin pages should be clearly separated from normal user pages.

---

## Authentication design for frontend
For the frontend, we should prepare for:
- login state
- logout action
- protected routes for dashboard and post item
- admin route protection later

### Suggested frontend auth behavior
- if user is logged in, show their name in navbar
- if not logged in, show login link
- dashboard and post item should require authentication later

---

## Recommended frontend components
Create reusable components such as:
- Navbar
- HeroSection
- ItemCard
- SearchBar
- FilterPanel
- ItemForm
- ProtectedRoute
- AdminSidebar

---

## Recommended styling direction
Use a modern clean style:
- white cards
- blue accent color
- rounded corners
- soft shadows
- responsive grid layout

This will make the project look professional and portfolio-ready.

---

## What to avoid in the first 10 days
Do not focus on:
- real backend APIs yet
- cloud deployment yet
- complex charts and animations
- too many advanced features

Focus on:
- clean design
- complete page flow
- clear structure
- simple user experience

---

## Final outcome after 10 days
After these 10 days, the frontend should feel like a real product with:
- polished layout
- complete pages
- clear user flow
- admin and user separation
- ready structure for later backend integration
