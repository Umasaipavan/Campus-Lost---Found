# Campus Lost & Found – 100 Day Development Plan

This plan is based on the full project design you shared and the current project structure already present in this workspace.

## What already exists
- Backend starter project with Spring Boot and Maven
- Frontend starter project with React and Vite
- Basic pages and components folders
- Authentication context and route structure already started

## What still needs to be built
- Full backend architecture: controllers, services, DTOs, repositories, entities
- MySQL database schema and seed data
- JWT authentication and Spring Security
- Cloudinary image upload flow
- Full React pages for home, browse, details, dashboard, and admin panel
- Tailwind styling, API layer, validation, deployment setup, and documentation

## Phase 1 – Foundation and setup (Days 1–20)

### Day 1
- Review the current frontend and backend structure
- Set the final feature list for the project

### Day 2
- Create the exact folder structure for frontend, backend, database, and docs
- Organize the project clearly

### Day 3
- Create the backend package structure under com.srkr.lostfound
- Prepare the main Spring Boot application class

### Day 4
- Create the frontend folder structure for components, pages, services, context, routes, and utils
- Prepare the app shell

### Day 5
- Add Tailwind CSS configuration to the frontend
- Set up the base UI styling system

### Day 6
- Create the MySQL database schema for users, items, and claims
- Add indexes and foreign keys

### Day 7
- Add seed data for admin user, sample users, sample items, and sample claims

### Day 8
- Configure backend application properties for MySQL
- Prepare environment variable support

### Day 9
- Create the User entity, Item entity, and Claim entity
- Add basic field mappings

### Day 10
- Create repositories for users, items, and claims
- Prepare JPA query methods

### Day 11
- Create DTO classes for login, registration, items, claims, and dashboard stats

### Day 12
- Create the health check endpoint in the backend
- Make sure the backend runs correctly

### Day 13
- Build the main frontend layout with navbar and page container
- Prepare a clean app shell

### Day 14
- Create the Home page structure
- Add hero section and basic content blocks

### Day 15
- Create the AppRoutes file
- Connect the main pages with React Router

### Day 16
- Create the reusable components: Navbar, ItemCard, ItemForm, SearchBar, FilterPanel, ProtectedRoute, AdminSidebar

### Day 17
- Connect the frontend to the backend health endpoint
- Confirm API communication works

### Day 18
- Create environment files for frontend and backend
- Add the base API URL configuration

### Day 19
- Review folder organization and naming conventions
- Fix early structural issues

### Day 20
- Finish the foundation milestone
- Prepare for authentication implementation

## Phase 2 – Authentication and security (Days 21–40)

### Day 21
- Create the authentication controller and register endpoint

### Day 22
- Create the login endpoint and return a JWT token

### Day 23
- Create the JWT service for token generation and validation

### Day 24
- Implement Spring Security configuration
- Add password hashing with BCrypt

### Day 25
- Create the JWT authentication filter
- Add token validation logic

### Day 26
- Create the custom user details service
- Set up authentication principal loading

### Day 27
- Add role-based authorization for USER and ADMIN

### Day 28
- Create the frontend auth service with Axios
- Add token storage handling

### Day 29
- Build the Login page UI
- Connect it to the backend login API

### Day 30
- Build the Register page UI
- Connect it to the backend registration API

### Day 31
- Create the AuthContext for global authentication state

### Day 32
- Create ProtectedRoute and AdminRoute guards in React

### Day 33
- Add logout functionality
- Clear token and user state safely

### Day 34
- Add request interceptors for JWT attachment
- Add response interceptors for error handling

### Day 35
- Add frontend validation for login and register forms

### Day 36
- Add backend validation for email, password, and required fields

### Day 37
- Add CORS configuration for frontend-backend communication

### Day 38
- Test the full auth flow end-to-end
- Fix issues with token handling

### Day 39
- Improve auth error messages and loading states

### Day 40
- Finish authentication milestone
- Prepare for item creation and listing

## Phase 3 – Item module (Days 41–60)

### Day 41
- Create the ItemController and item CRUD endpoints

### Day 42
- Implement item create and item list APIs

### Day 43
- Implement item detail and item update APIs

### Day 44
- Implement item delete API
- Add ownership checks

### Day 45
- Implement search and filter APIs for items

### Day 46
- Create the frontend item service for API calls

### Day 47
- Build the BrowseItems page UI
- Show item cards in a responsive grid

### Day 48
- Build the ItemDetails page UI
- Display image, description, location, and reporter info

### Day 49
- Build the PostItem page UI
- Create the item submission form

### Day 50
- Add image upload support in the frontend
- Prepare file selection and preview

### Day 51
- Create the backend upload endpoint for image files

### Day 52
- Integrate Cloudinary service for image upload and storage

### Day 53
- Connect item creation flow from frontend to backend
- Save image URL and item data

### Day 54
- Add item status handling: LOST, FOUND, RESOLVED

### Day 55
- Add item approval logic for moderation

### Day 56
- Create the MyPosts page
- Show items posted by the logged-in user

### Day 57
- Add validation for required item fields
- Improve the form experience

### Day 58
- Add pagination to item listing
- Improve browse performance

### Day 59
- Add similar items section on the item details page

### Day 60
- Finish the item module milestone
- Prepare for claims workflow

## Phase 4 – Claim workflow (Days 61–80)

### Day 61
- Create the Claim entity and repository

### Day 62
- Create the claim controller and claim creation API

### Day 63
- Create the claim list API for the logged-in user

### Day 64
- Implement claim approval and rejection APIs

### Day 65
- Add logic to update item status after claim approval

### Day 66
- Build the claim button and claim form UI

### Day 67
- Create the MyClaims page
- Show all claims made by the current user

### Day 68
- Show claim status on item details and dashboard pages

### Day 69
- Add success and error messages for claim actions

### Day 70
- Prevent duplicate claims for the same item

### Day 71
- Add claim validation and better error handling

### Day 72
- Add simple claim history or status timeline logic

### Day 73
- Improve item resolution flow after approved claims

### Day 74
- Make the claim UI clear and responsive

### Day 75
- Test the full claim workflow from start to finish

### Day 76
- Fix issues in claim approval and rejection flow

### Day 77
- Improve loading states for claim actions

### Day 78
- Review security for claim operations
- Ensure only allowed users can act

### Day 79
- Improve frontend feedback for pending, approved, and rejected claims

### Day 80
- Finish the claim workflow milestone
- Prepare admin features

## Phase 5 – Admin panel and moderation (Days 81–90)

### Day 81
- Create the admin controller and stats API

### Day 82
- Create admin endpoints for pending items and user list

### Day 83
- Add admin approval and deletion endpoints for items

### Day 84
- Build the AdminDashboard page
- Add summary cards and overview metrics

### Day 85
- Build the AdminModeration page
- Show items that need approval

### Day 86
- Build the AdminUsers page
- Show registered users and roles

### Day 87
- Add admin actions for approve, reject, and remove items

### Day 88
- Add simple analytics views for resolution and category trends

### Day 89
- Improve admin UX and table layout

### Day 90
- Finish admin milestone
- Prepare deployment and documentation

## Phase 6 – Deployment, documentation, and polish (Days 91–100)

### Day 91
- Add Dockerfile for backend deployment

### Day 92
- Add Procfile and deployment notes for hosting platforms

### Day 93
- Add a health check endpoint for production readiness

### Day 94
- Prepare the frontend production build
- Fix build issues

### Day 95
- Configure production environment variables for frontend and backend

### Day 96
- Deploy the backend to Render or Railway
- Test live API endpoints

### Day 97
- Deploy the frontend to Vercel
- Test the live web app

### Day 98
- Test the full user journey end-to-end
- Register, login, post item, claim item, and admin review

### Day 99
- Improve UI polish, responsiveness, and error handling

### Day 100
- Final review, documentation cleanup, and portfolio-ready presentation prep
