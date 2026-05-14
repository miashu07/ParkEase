# ParkEase Deployment Guide (Free)

This guide covers deploying your full-stack parking application for free using **Render** (backend) and **Vercel** (frontend).

---

## Prerequisites

- GitHub account
- Render.com account (free)
- Vercel.com account (free)

---

## Part 1: Prepare Your Code

### Step 1: Create Render Configuration File

Create `backend/Dockerfile` (or render.yaml for auto-detection):

```dockerfile
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN apk add --no-cache maven && mvn clean package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/parkease-0.0.1-SNAPSHOT.jar"]
```

> **Note**: Replace `parkease-0.0.1-SNAPSHOT.jar` with your actual JAR filename after building locally first.

### Step 2: Build Your JAR Locally

```bash
cd backend
./mvnw clean package -DskipTests
```

Find the JAR file in `backend/target/` — note its exact name for the Dockerfile.

### Step 3: Update Dockerfile with Correct JAR Name

```dockerfile
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN apk add --no-cache maven && mvn clean package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/YOUR-ACTUAL-JAR-FILE.jar"]
```

### Step 4: Check Application Properties

Ensure `backend/src/main/resources/application.properties` has:

```properties
spring.datasource.url=${DATABASE_URL}
spring.datasource.username=${DATABASE_USERNAME}
spring.datasource.password=${DATABASE_PASSWORD}
```

> Render provides free PostgreSQL — use environment variables!

---

## Part 2: Deploy Backend to Render

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"

### Step 3: Deploy Backend

1. Select your repository
2. Set:
   - **Name**: `parkease-backend`
   - **Branch**: `main`
   - **Build Command**: `mvn clean package -DskipTests`
   - **Start Command**: `java -jar target/YOUR-JAR-FILE.jar`
3. Click "Create Web Service"

### Step 4: Add Environment Variables

In Render dashboard, go to "Environment" and add:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | `postgres://username:password@host:5432/dbname` |
| `DATABASE_USERNAME` | (from Render PostgreSQL) |
| `DATABASE_PASSWORD` | (from Render PostgreSQL) |

### Step 5: Create Free PostgreSQL Database

1. In Render dashboard: "New +" → "PostgreSQL"
2. Set:
   - **Name**: `parkease-db`
   - **Plan**: Free
3. Copy the "Internal Database URL" to your backend environment variables

### Step 6: Wait for Deployment

- Build takes ~5-10 minutes on free tier
- Once complete, you'll get a URL like: `https://parkease-backend.onrender.com`

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Update API Base URL

Edit `frontend/src/services/auth.js` and other files that call the backend:

```javascript
// Change from:
const API_URL = 'http://localhost:8080';

// To your Render backend URL:
const API_URL = 'https://parkease-backend.onrender.com';
```

Also check `frontend/src/main.jsx` and other files for hardcoded `localhost` references.

### Step 2: Push Changes to GitHub

```bash
git add .
git commit -m "Update API URLs for production"
git push origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New..." → "Project"
4. Select your repository
5. Set:
   - **Framework Preset**: `Vite` (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Step 4: Get Your Frontend URL

After ~1-2 minutes, you'll get a URL like: `https://parkease-frontend.vercel.app`

---

## Part 4: Configure CORS (Important!)

In your backend `application.properties`, add:

```properties
cors.allowed-origins=https://your-vercel-frontend-url.vercel.app
```

Or allow all (less secure for production):

```properties
cors.allowed-origins=*
```

> After changing CORS settings, redeploy your backend on Render.

---

## Part 5: Verify Deployment

### Test Backend Health

Visit: `https://parkease-backend.onrender.com/api/health`

### Test Frontend

Visit your Vercel URL and try logging in.

---

## Alternative: All-in-One on Railway

If you want both frontend + backend on one platform:

1. Go to [railway.app](https://railway.app)
2. Create project → "Deploy from GitHub repo"
3. Add both frontend and backend services
4. Connect PostgreSQL plugin
5. Set environment variables similarly

---

## Summary of URLs

| Service | Platform | Free Tier | URL Example |
|---------|----------|-----------|--------------|
| Backend API | Render | Yes (750 hrs/mo) | `parkease-backend.onrender.com` |
| Database | Render PostgreSQL | Yes (rows limited) | Internal |
| Frontend | Vercel | Yes (bandwidth limited) | `parkease-frontend.vercel.app` |

---

## Troubleshooting

### Backend Won't Start
- Check Build Logs in Render dashboard
- Ensure JAR filename in Dockerfile matches exactly

### CORS Errors
- Add your Vercel URL to `cors.allowed-origins`

### Database Connection Failed
- Verify DATABASE_URL format: `postgres://user:pass@host:5432/db`

### Frontend Shows "Network Error"
- Confirm API_URL points to correct Render backend URL

---

## Cost

| Service | Free Tier Limits |
|---------|-------------------|
| Render Web Service | 750 hours/month |
| Render PostgreSQL | 1 database, 512MB storage |
| Vercel | 100GB bandwidth/month |

This is sufficient for learning, portfolios, and small demos.