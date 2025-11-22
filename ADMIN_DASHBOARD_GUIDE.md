# Admin Dashboard Guide

## Overview

The Admin Dashboard is now **fully functional** with real MongoDB integration! Manage your entire job platform from one central location.

## 🚀 Features

### 1. **Dashboard Statistics**
- Total Jobs & Active Jobs count
- Total Users (Employers + Seekers)
- Applications tracking
- Real-time data updates

### 2. **Jobs Management**
- ✅ View all jobs in the platform
- ✅ Filter by status (Active, Closed)
- ✅ Search jobs by title or company
- ✅ Toggle job status (Active ↔ Closed)
- ✅ Delete jobs
- ✅ View job details

### 3. **User Management**
- ✅ View all employers and job seekers
- ✅ Filter by user type (Employer, Seeker)
- ✅ Search users by name, email, or company
- ✅ Ban/Unban users
- ✅ View user registration dates

### 4. **Analytics**
- Platform statistics
- User distribution
- Growth metrics

## 📦 Setup Instructions

### Step 1: Set Up MongoDB Database

You have two options:

#### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Add it to your environment variables as `MONGODB_URI`

#### Option B: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/globaljobpoint`

### Step 2: Configure Environment Variable

In Replit:
1. Click on **Secrets** tab (🔒 icon on left sidebar)
2. Add new secret:
   - **Key**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string

Example connection strings:
```
mongodb+srv://username:password@cluster.mongodb.net/globaljobpoint
mongodb://localhost:27017/globaljobpoint
```

### Step 3: Add Sample Data (Optional)

To quickly test the dashboard with sample data, run the seed script:

```bash
node scripts/seed-data.ts
```

This will create:
- 4 sample employers
- 5 sample job seekers
- 7 sample jobs (6 active, 1 closed)

## 🎯 Using the Admin Dashboard

### Access the Dashboard
Navigate to: **`/admin/dashboard`**

### Managing Jobs

1. **View All Jobs**: Click on "Manage Jobs" tab
2. **Filter Jobs**: Use the status dropdown (All/Active/Closed)
3. **Search Jobs**: Type in the search box to find specific jobs
4. **Toggle Status**: Click the edit icon to activate/close a job
5. **Delete Job**: Click the trash icon to permanently remove a job

### Managing Users

1. **View All Users**: Click on "Manage Users" tab
2. **Filter Users**: Select user type (All/Employers/Seekers)
3. **Search Users**: Type to find users by name, email, or company
4. **Ban User**: Click the ban icon to restrict user access
5. **Unban User**: Click the checkmark icon to restore user access

### Viewing Analytics

1. Click on "Analytics" tab
2. View platform statistics
3. See user distribution
4. Track platform growth

## 🔄 API Endpoints

The admin dashboard uses these API endpoints:

### Statistics
```
GET /api/admin/stats
```
Returns dashboard statistics and recent activity

### Jobs Management
```
GET /api/admin/jobs?status={active|closed}&search={term}
PUT /api/admin/jobs/{id}
DELETE /api/admin/jobs/{id}
```

### Users Management
```
GET /api/admin/users?type={employer|seeker}&search={term}
PUT /api/admin/users/{id}
```

## ⚠️ Important Notes

1. **No Database Connection**: If MongoDB is not connected, the dashboard will show a loading spinner or error message.

2. **Sample Data**: The seed script creates sample data with password `password123` for all users.

3. **Real-time Updates**: All changes are immediate - no page refresh needed.

4. **Error Handling**: The dashboard gracefully handles errors and provides retry options.

## 🛠️ Troubleshooting

### Issue: Dashboard shows "Loading..." forever
**Solution**: Check that MongoDB is connected and `MONGODB_URI` is set correctly.

### Issue: No data showing
**Solution**: Run the seed script to add sample data, or create jobs/users manually.

### Issue: API errors
**Solution**: Check server logs for MongoDB connection errors. Restart the application.

## 📱 Screenshots Expected

- **Overview**: Statistics cards with real numbers, recent jobs/users tables
- **Manage Jobs**: Full job listings with filter/search, action buttons
- **Manage Users**: User table with ban/unban options
- **Analytics**: Platform metrics and growth indicators

## 🎉 You're Ready!

The admin dashboard is production-ready and fully functional. Just connect your MongoDB database and you're good to go!

---

**Version**: 1.0.0  
**Last Updated**: November 22, 2025  
**Status**: ✅ Fully Functional
