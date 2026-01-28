# 🚗 ParkEase API - Postman Collection Guide

## 📋 Overview

This comprehensive Postman collection provides complete access to all ParkEase backend APIs for testing and development.

**Collection File:** `ParkEase_Postman_Collection.json`

---

## 🚀 Quick Start

### 1. Import Collection

1. Open Postman
2. Click **Import** button
3. Select `ParkEase_Postman_Collection.json`
4. Collection will appear in your sidebar

### 2. Configure Environment

The collection uses two variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `base_url` | `http://localhost:8080/api` | Backend API base URL |
| `token` | (auto-filled) | JWT authentication token |

**Note:** The `token` variable is **automatically filled** when you login successfully!

### 3. First Steps

1. **Start Backend Server** (if not running):
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

2. **Login to get token**:
   - Go to **🔐 Authentication** → **Login as Admin**
   - Click **Send**
   - Token will auto-save to `{{token}}` variable
   - All authenticated requests will now work!

---

## 📚 Collection Structure

### 🔐 Authentication (7 Endpoints)

| Endpoint | Method | Description |
|----------|--------|-------------|
| Register New User | POST | Create new user account |
| Login | POST | Login + auto-save token |
| Login as Admin | POST | Login as admin + auto-save token |
| Forgot Password | POST | Request password reset |
| Reset Password | POST | Reset password with token |
| Get User Profile | GET | Get current user info |
| Update Profile | PUT | Update user profile |

**Demo Credentials:**
```
Admin:
  Email: admin@parkease.com
  Password: password123

Regular User:
  Email: user@example.com
  Password: password123
```

---

### 👤 User Operations (9 Endpoints)

#### Parking Zones
- **Get Parking Zones**: List all zones
- **Get Zones by Location**: Filter zones by location
- **Get Slots by Zone Name**: Get slots using zone name

#### Slots & Pricing
- **Get Available Slots by Zone**: List available slots
- **Calculate Price**: Calculate parking cost by vehicle type and hours

#### Reservations
- **Create Reservation**: Book a parking slot
- **Get My Reservations**: View current reservations
- **Get History**: View booking history
- **Cancel Reservation**: Cancel a booking

**Example: Create Reservation**
```json
{
    "slotId": 1,
    "startTime": "2026-01-26T10:00:00",
    "endTime": "2026-01-26T12:00:00",
    "vehicleType": "HATCHBACK",
    "vehicleNumber": "KA01AB1234"
}
```

**Vehicle Types:** `TWO_WHEELER`, `HATCHBACK`, `SEDAN`, `SUV`

---

### 👨‍💼 Admin - Zones (4 Endpoints)

**Requires:** Admin role + JWT token

- **Get All Zones (Admin)**: List all zones with details
- **Create Parking Zone**: Add new parking zone
- **Update Zone**: Modify zone details
- **Delete Zone**: Remove a zone

**Example: Create Zone**
```json
{
    "name": "North Parking",
    "location": "North Zone",
    "totalSlots": 50,
    "active": true
}
```

---

### 👨‍💼 Admin - Slots (3 Endpoints)

**Requires:** Admin role + JWT token

- **Get Slots by Zone**: List all slots in a zone
- **Create Slot**: Add new slot (auto-generates QR code)
- **Update Slot Status**: Change slot status

**Slot Status Values:** `AVAILABLE`, `OCCUPIED`, `RESERVED`, `MAINTENANCE`

---

### 👨‍💼 Admin - Pricing (2 Endpoints)

**Requires:** Admin role + JWT token

- **Get All Prices**: List all vehicle type prices
- **Update Price**: Modify pricing for vehicle types

---

### 👨‍💼 Admin - Analytics (1 Endpoint)

**Requires:** Admin role + JWT token

- **Get Reports**: Comprehensive analytics including:
  - Total users
  - Total reservations
  - Active reservations
  - Revenue statistics
  - Occupancy rate

---

### 💳 Demo Payment (7 Endpoints)

**No authentication required** - Demo mode for testing

| Endpoint | Purpose |
|----------|---------|
| Get Payment Mode | Check if demo mode is enabled |
| Get Demo Instructions | Get payment testing instructions |
| Create Demo Order | Generate demo payment order |
| Verify Demo Payment | Verify demo payment completion |
| Get Payment Status | Check payment status |
| Get Demo Receipt | Generate payment receipt |
| Simulate Payment Webhook | Test webhook integration |

**Example Workflow:**
1. Create Demo Order → Get `orderId`
2. Verify Demo Payment → Use `orderId` and `paymentId`
3. Get Demo Receipt → Retrieve receipt

---

### 🏥 Health & Diagnostics (2 Endpoints)

- **Health Check**: Backend health status (may require auth)
- **API Info**: Application information

---

## 🎯 Common Use Cases

### Use Case 1: User Books a Parking Slot

```
1. POST /auth/login
   → Save token

2. GET /user/zones
   → Get zone ID

3. GET /user/slots?zoneId=1
   → Find available slot

4. GET /user/price?vehicleType=HATCHBACK&hours=2
   → Calculate cost

5. POST /user/reserve
   → Create reservation

6. POST /payment/demo/create-order
   → Process payment

7. POST /payment/demo/verify
   → Confirm payment
```

### Use Case 2: Admin Manages Parking Zones

```
1. POST /auth/login (admin credentials)
   → Save admin token

2. GET /admin/zones
   → View all zones

3. POST /admin/zone
   → Create new zone

4. POST /admin/slots/{zoneId}
   → Add slots to zone

5. PUT /admin/pricing/1
   → Update pricing

6. GET /admin/reports
   → View analytics
```

---

## 🔑 Authentication Guide

### How Token Auto-Save Works

The **Login** and **Login as Admin** requests include a **Test Script** that automatically saves the JWT token:

```javascript
if (pm.response.code === 200) {
    const jsonData = pm.response.json();
    if (jsonData.token) {
        pm.collectionVariables.set('token', jsonData.token);
        console.log('✅ Token saved');
    }
}
```

### Manual Token Setup (if needed)

1. Send login request
2. Copy the `token` from response
3. Go to Collection → Variables
4. Paste token into `token` variable
5. Save

### Using Token in Requests

All authenticated endpoints include this header:
```
Authorization: Bearer {{token}}
```

The `{{token}}` variable is automatically replaced with your JWT token.

---

## 🧪 Testing Tips

### 1. Sequential Testing
Use the Postman **Collection Runner** to run multiple requests in sequence.

### 2. Environment Switching
Create different environments for:
- Local: `http://localhost:8080/api`
- Development: `http://dev.parkease.com/api`
- Production: `http://api.parkease.com/api`

### 3. Check Response Times
Monitor API performance in the **Tests** tab.

### 4. Save Example Responses
Click **Save Response** to document expected outputs.

---

## 🐛 Troubleshooting

### 401 Unauthorized
- **Solution**: Login again to refresh token
- Check if token is expired (24 hours validity)

### 403 Forbidden
- **Solution**: Ensure you're using admin credentials for admin endpoints
- Verify user role in profile response

### 400 Bad Request
- **Solution**: Check request body format matches examples
- Verify all required fields are present
- Check date format: `YYYY-MM-DDTHH:mm:ss`

### 404 Not Found
- **Solution**: Verify the resource ID exists
- Check if base_url is correct

### Connection Refused
- **Solution**: Ensure backend server is running
- Check port 8080 is accessible
- Verify `base_url` variable

---

## 📊 Response Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | Success | Request completed successfully |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Check request payload |
| 401 | Unauthorized | Login to get valid token |
| 403 | Forbidden | Check user permissions |
| 404 | Not Found | Verify resource ID |
| 500 | Server Error | Check backend logs |

---

## 🔄 API Updates

**Last Updated:** January 26, 2026

### What's New:
- ✅ Comprehensive 45+ endpoint collection
- ✅ Auto token-saving on login
- ✅ Complete demo payment flow
- ✅ Admin analytics endpoints
- ✅ Detailed descriptions for all endpoints
- ✅ Example request bodies
- ✅ Query parameter documentation

---

## 📞 Support

For backend issues or questions:
1. Check backend console logs
2. Review `logs/parkease.log`
3. Check Swagger UI: `http://localhost:8080/swagger-ui.html` (if accessible)
4. Review API documentation in backend README.md

---

## 🎓 Learning Resources

### Postman Features to Explore:
- **Collection Runner**: Test multiple requests
- **Environments**: Switch between dev/prod
- **Tests Tab**: Write automated assertions
- **Pre-request Scripts**: Setup before requests
- **Documentation**: Auto-generate API docs

### Example Test Script:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has token", function () {
    pm.expect(pm.response.json()).to.have.property('token');
});
```

---

## ✅ Checklist

Before sharing with team:
- [ ] Backend server is running
- [ ] Database is connected
- [ ] Login works and token saves
- [ ] Admin endpoints tested
- [ ] User endpoints tested
- [ ] Payment flow tested
- [ ] Collection exported and shared

---

**Happy Testing! 🚀**

*ParkEase Team*
