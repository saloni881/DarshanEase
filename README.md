# Technical Architecture – DarshanEase

## 1. Architectural Overview

DarshanEase is designed as a three-tier full-stack MERN application that ensures modularity, scalability, and secure data management. The system separates concerns across presentation, application, and data layers.

### Architecture Layers

1. Presentation Layer – React.js (Frontend UI)
2. Application Layer – Node.js + Express.js (Backend API & Business Logic)
3. Data Layer – MongoDB (Persistent Data Storage)

Client (Browser)
      ↓
React.js Frontend
      ↓ (REST API via Axios)
Express.js Server (Node.js)
      ↓
Authentication & Role Middleware
      ↓
MongoDB Database (Mongoose ODM)

This layered approach ensures clear responsibility separation and maintainable code structure.

## 2. Architectural Pattern

The system follows:
- MVC (Model–View–Controller) Pattern
- RESTful API Architecture
- Role-Based Access Control (RBAC)
- Modular Backend Structure

### MVC Mapping
- Model → Mongoose Schemas (User, Temple, Slot, Booking, Donation)
- View → React Components and Pages
- Controller → Express Route Controllers handling business logic

## 3. Frontend Architecture

The frontend is built using React.js with a component-based architecture.

### Key Characteristics

- Reusable UI components
- Page-level routing using React Router
- Axios for API communication
- Context API for global authentication state
- Role-based UI rendering

User Action
   ↓
React Component
   ↓
Axios API Request
   ↓
Backend Response
   ↓
UI State Update

The frontend handles validation, protected routes, and responsive layouts.

## 4. Backend Architecture

The backend is built using Node.js and Express.js with a modular folder structure.

### Request Processing Flow

Route → Controller → Business Logic → Model → Database

### Core Modules
- Authentication Module
- Temple Management Module
- Darshan Slot Management Module
- Booking Module
- Donation Module
- Admin & Organizer Management Module

Each module is independently structured with dedicated routes, controllers, and models.

## 5. Authentication & Authorization

DarshanEase implements JWT-based authentication and role-based authorization.

### Authentication Flow

1. User submits credentials.
2. Password verified using bcrypt.
3. JWT token generated.
4. Token returned to client. 
5. Token attached in request header for protected routes.

Header Format:

Authorization: Bearer <JWT_TOKEN>

### Role-Based Access Control

Roles implemented:

- USER
- ORGANIZER
- ADMIN

Middleware validates:
- Token authenticity
- User role
- Route access permission

This ensures secure access to sensitive operations.

## 6. Database Architecture

The application uses MongoDB with Mongoose ODM for schema modeling and relationship management.

### Collections

- Users – Authentication and role information
- Temples – Temple details and organizer reference
- DarshanSlots – Slot timings, capacity, and availability
- Bookings – User-slot relationship and booking records
- Donations – Temple donation records

Relationship Structure

User → Booking → DarshanSlot → Temple

Indexes are applied on frequently queried fields such as:
- userId
- templeId
- slotId

This improves query performance and scalability.

## 7. Booking System Architecture

The booking system is designed to ensure data consistency and prevent overbooking.

### Booking Flow

1. User selects temple and slot.
2. Backend validates:
- Authentication status
- Slot availability
- Seat capacity

3. Available seats are updated.
4. Booking record is created.
5. Confirmation response is returned.

This controlled flow prevents unauthorized access and seat conflicts.

## 8. API Design

All APIs follow REST principles:

- Proper HTTP methods (GET, POST, PUT, DELETE)
- JSON request/response format
- Standard HTTP status codes
- Centralized error handling

Example Endpoints:

POST   /api/auth/login
GET    /api/temples
POST   /api/slots
POST   /api/bookings
DELETE /api/bookings/:id

## 9. Security Architecture

- Password hashing using bcrypt
- JWT-based stateless authentication
- Role validation middleware
- Protected routes
- Environment variable configuration
- Centralized error handling middleware
- CORS configuration for controlled acces

## 10. Scalability & Maintainability

The architecture ensures:
- Clear separation of concerns
- Modular codebase
- Independent feature expansion
- Stateless authentication for horizontal scaling
- Optimized database queries through indexing

# Entity Relationship Diagram

![ER Diagram](docs/er-diagram.png)

# Features
## Authentication & User Management

- Secure Devotee Registration and Login system.
- Role-based authentication (Devotee, Organizer, Admin).
- Secure access control for booking and management operations.
- Profile management and booking history access.

## Temple & Darshan Management
### Temple Directory
- Comprehensive listing of registered temples.
- Detailed temple information including location and darshan offerings.
- Structured temple categorization for easy browsing.
### Darshan Slot Management
- Dynamic creation and management of darshan slots.
- Real-time slot availability tracking.
- Configurable capacity limits per slot.
- Automatic updates upon booking or cancellation.

## Ticket Booking System
- Seamless darshan slot selection.
- Multi-devotee booking support.
- Booking validation to prevent overbooking.
- Instant booking confirmation with unique Booking ID.
- Email-based confirmation system.

## Secure Payment & Donations
- Integrated secure payment gateway.
- Support for online donations along with ticket booking.
- Transaction validation and confirmation tracking.
- Secure handling of payment details.

## Dashboards & Role-Based Panels
### Organizer Dashboard
- Manage temple details and darshan slots.
- Monitor booking statistics.
- Issue and manage tickets.
- Track slot capacity and availability.

### Admin Dashboard
- Manage users (Devotees, Organizers).
- Approve and oversee temple registrations.
- Monitor bookings and system activity.
- Centralized administrative control panel.

## Reporting & Analytics
- Generate reports on:
   - Total bookings
   - Popular temples
   - Slot occupancy rates
   - Devotee participation trends
- Data-driven insights for operational optimization.

## External API Integration
- Third-party payment gateway integration.
- Real-time synchronization for slot availability.
- Scalable API architecture for future integrations.
#Roles & Responsibilities
The system follows a Role-Based Access Control (RBAC) model with three primary roles:
- Devotee (User)
- Organizer
- Administrator
Each role has clearly defined permissions and responsibilities to ensure secure and efficient system operations.

## Devotee (User)
The Devotee interacts with the platform to book darshan tickets and manage personal information.
### Responsibilities
- Registration & Authentication
    - Create an account using basic credentials (Name, Email, Password).
    - Secure login and logout functionality.
- Profile Management
    - Update personal details (Name, Email, Password).
    - Manage account settings securely.

- Darshan Booking
   - Browse available temples and darshan slots.
   - Book preferred slots based on availability.
   - Receive electronic ticket with unique Booking ID.
- Booking History
   - View past and upcoming bookings.
   - Cancel or modify bookings (if permitted).
- Feedback & Ratings
   - Submit ratings and feedback for darshan experience.

## Organizer
Temple Organizers manage temple-specific operations including slot scheduling and booking oversight.
### Responsibilities
- Profile Management
   - Update personal and contact information.
   - Secure authentication and logout access.
- Darshan Slot Management
   - Create, update, and delete darshan slots.
   - Configure slot capacity and special entries.
   - Monitor real-time slot availability.
- Booking Management
   - View and manage devotee bookings.
   - Validate and assign darshan slots.
   - Make necessary booking adjustments.
- Notifications
   - Receive booking alerts and updates.
   - Communicate changes effectively to devotees.

## Administrator
The Administrator has full system-level control and oversees overall platform governance.

### Responsibilities
- System Management
   - Manage system configurations and security settings.
   - Oversee overall platform performance and reliability.
- Devotee Management
   - Create, update, or delete devotee accounts.
   - Monitor feedback and ratings.
   - Handle account-related issues.
- Organizer Management
   - Approve and manage temple organizer accounts.
   - Grant or revoke access permissions.
- Temple & Slot Oversight
   - Supervise darshan slot scheduling.
   - Ensure proper allocation of resources.
   - Manage maintenance and operational workflows.
- Event Management
   - Create and manage temple events.
   - Schedule, update, or remove special event slots.
- Security & Compliance
   - Enforce role-based access control.
   - Ensure secure handling of user data.
