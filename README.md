# 🌲 Timber Halo Front-Facing Website Overview

The Timber Halo website serves as the primary interface for both potential and actual guests of the Timber Halo Hotel. It provides essential information, booking capabilities, and user account management features to streamline the guest experience.

---

## ✨ Features

The website is designed to support the following core functionalities:

- **Hotel Information**
  - Guests can learn about the Timber Halo Hotel, its philosophy, location, and amenities.

- **Cabin Listings**
  - View detailed information about each cabin including photos, descriptions, and availability.
  - Filter cabins by maximum guest capacity to find suitable accommodations.
  - See booked dates to avoid scheduling conflicts.

- **Reservations**
  - Guests can reserve a cabin for a specific date range.
  - Reservations are currently **not paid online**; payment is made upon arrival.
  - New reservations are marked as **"unconfirmed"** until check-in.
  - Guests can view a list of all their **past and upcoming reservations**.

- **Authentication**
  - Guests must **sign up and log in** to make reservations or access account features.
  - Upon sign-up, a **profile** is created in the database.

- **Profile Management**
  - Guests can set and update basic profile information to facilitate faster check-in.

---

## 📂 Feature Categories

- **About** – General information about Timber Halo Hotel.
- **Cabins** – Cabin listings, details, and filtering.
- **Reservations** – Booking, viewing, and editing reservations.
- **Authentication** – Sign-up and login functionality.
- **Profile** – Guest profile creation and updates.

---

## 🗺️ Pages

| Page Name           | Route                          | Description |
|---------------------|--------------------------------|-------------|
| Homepage            | `/`                            | Landing page with hotel highlights |
| About Page          | `/about`                       | Hotel background and story |
| Cabin Overview      | `/cabins/`                     | List of all cabins with filters |
| Cabin Detail        | `/cabins/:cabinId`             | Individual cabin details |
| Authentication      | `/login`                       | Login and sign-up page |
| Reservation List    | `/account/reservations`        | View all reservations |
| Edit Reservation    | `/account/reservations/edit`   | Modify existing reservations |
| Update Profile      | `/account/profile`             | Manage guest profile information |

---

## 🛠️ Technology Stack

| Component             | Choice        | Purpose |
|-----------------------|---------------|---------|
| **Framework**         | Next.js       | Server-side rendering and routing |
| **UI State Management** | Context API | Manage global state across components |
| **Database/API**      | Supabase      | Backend-as-a-service for data and auth |
| **Styling**           | TailwindCSS   | Utility-first CSS framework for styling |

---

This structure ensures a seamless and informative experience for guests while laying the groundwork for future enhancements like online payments and advanced booking features.
