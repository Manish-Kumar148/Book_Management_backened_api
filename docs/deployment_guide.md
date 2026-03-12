# GitHub and Render Deployment Guide

## GitHub

1. Initialize Git if needed:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial library management backend"
   ```
2. Create an empty GitHub repository named `library-management-backend`.
3. Add the remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/library-management-backend.git
   git push -u origin main
   ```

## Render

1. Log in to [Render](https://render.com/).
2. Create a MongoDB Atlas database or use another hosted MongoDB instance.
3. From the Render dashboard, create a new `Blueprint` deployment.
4. Connect the GitHub repository.
5. Render will detect `render.yaml`.
6. Add the `MONGODB_URI` environment variable.
7. Deploy and copy the live URL into the report.

## Before Submission

- Add the final GitHub repository link to the report
- Add the final Render live URL to the report
- Capture screenshots from Postman and MongoDB Compass/Atlas
