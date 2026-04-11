# 🏗️ GORUN System Architecture & Operational Blueprint
**Status:** Finalized Logic Phase
**Focus:** B2B Expert Outsourcing & Staff Management

---

## 🟢 1. Corporate Dashboard (The Client Hub)
*Self-service portal for corporate entities to hire and monitor experts.*

### A. Job Placement Engine
- **Minimum Rate Guard:** Dynamic Hourly Rate control (Admin Managed). Rejects input < `min_hourly_rate`.
- **Task Specification:** Multi-step checklist for staff to follow.
- **Geo-Tagging:** Clients drop office location (Lat/Lng) for 50-meter radius verification.
- **Hiring Modes:** - *Instant Hiring:* Direct staff search and notification.
  - *Pre-booking:* Scheduled shifts.

### B. Approval & Live Monitoring
- **Check-in Request:** Receives notification when staff scans QR at the office location.
- **Authorization:** Countdown doesn't start until Client clicks **'Approve Check-in'**.
- **Live Tracker:** Real-time visibility of task completion (Tick marks) and work duration.

### C. Financials
- **Billing:** Generates a **Payment Slip (Total Bill)** addressed to GORUN Admin.
- **History:** Full ledger of active, completed, and pending transactions.

---

## 🔵 2. Staff Dashboard (The Expert Hub)
*Clean, action-oriented interface for experts.*

### A. Availability & Locking
- **Active Toggle:** Staff must be 'Active' to appear in client searches.
- **Job Locking:** Once a job is accepted, `isLocked = true` prevents others from seeing it.

### B. Smart Check-in System (Dual-Layer)
1. **Layer 1 (Geo-Fencing):** GPS check via browser API. Scan button only enables if within **50 meters** of client location.
2. **Layer 2 (QR + Approval):** QR scan sends a request to Client. Timer starts only upon Client's digital approval.

### C. Earnings & Wallet
- **Commission Logic:** - `Display_Earnings = Total_Bill - Admin_Commission (%)`.
  - Staff sees only their net share.
- **Wallet:** Automatic credit after check-out invoice generation.

---

## 🔴 3. Admin Panel (The Nerve Center)
*Central authority and regulatory control.*

- **Global Rate Controller:** Set and update `min_hourly_rate` globally.
- **Commission Manager:** Define commission percentages per client or per category.
- **Financial Clearing:** Manage corporate payments and approve staff withdrawal requests.
- **QR Generator:** Generate dedicated, unique QR codes for each corporate office desk.
- **KYC Manager:** Verify NID, Academic Certificates, and Business Licenses.

---

## ⚡ 4. Advanced Logic & Pro-Features
- **Staff Replacement & Penalty:** - If staff doesn't enter Geo-fence within 1 hour of acceptance, job reverts to `Public`.
  - Automatic **'Warning Strike'** added to staff profile.
- **Overtime Management:** - Notification to Client & Staff 10 mins before shift ends.
  - Option to **'Extend Session'** with hourly rate multiplication.
- **Security:** Geo-verification prevents "Proxy Check-ins" from remote locations.

---

## 📊 5. Simplified Database Workflow (Firebase)

| Event | Action | Outcome |
| :--- | :--- | :--- |
| **Job Post** | Check `min_rate` | Rejects if input < Admin limit. |
| **Accept** | Set `isLocked = true` | Job hidden from others. |
| **Check-in** | `geo_verify` + `client_approval` | Live countdown & status active. |
| **Task Tick** | Update `task_list[index]` | Real-time sync to Client Dashboard. |
| **Check-out** | Calc `Total Bill` & `Net Share` | Auto-generate Invoice & Slip. |

---

## 🛠️ Technical Stack Reference
- **Frontend:** HTML5, CSS3 (Inter Font), JavaScript (ES6+).
- **Backend:** Firebase Firestore (Jobs/Staff/Corporate) & Realtime Database (Onboarding).
- **Scanner:** `html5-qrcode`.
- **Map:** Google Maps API or Browser Geolocation API.