# Next.js Learning Management Application

A **full-stack learning management application** built using **Next.js**, **Node.js**, and various **AWS services**. The application allows users to browse, purchase, and track progress in courses, while instructors can create, manage, and upload course content such as videos and chapters.

## Live Demo

You can try out the deployed version of the application here:  
[**Live Project Demo**](https://nextjs-learning-management-app.vercel.app)

You can use the following test card for payments:
<br/>
**4242 4242 4242 4242**

For the rest of the payment form, you can enter any information you like.

## Tech Stack

- **Frontend**:

  - **Next.js** (React framework for SSR and static site generation)
  - **Tailwind CSS** (Utility-first CSS framework for responsive design)
  - **Redux Toolkit** (State management)
  - **Redux Toolkit Query** (Data fetching and caching)
  - **Stripe** (Payment processing)

- **Backend**:

  - **Node.js** (JavaScript runtime)
  - **Express.js** (Web framework for handling API requests)

- **Cloud Services**:
  - **AWS ECR** (Docker container registry)
  - **AWS Lambda** (Serverless functions)
  - **AWS DynamoDB** (NoSQL database)
  - **AWS API Gateway** (API management and integration)
  - **AWS S3** (Storage for static files and media)
  - **AWS CloudFront** (Content delivery network)

## Features

- **Browse and Search Courses**:  
  Easily search for and view available courses from a variety of categories.

- **Course Purchase**:  
  Securely purchase courses through Stripe, ensuring reliable and safe transactions.

- **Video Streaming**:  
  Watch course videos stored in AWS S3 and delivered efficiently via AWS CloudFront.

- **Progress Tracking**:  
  Monitor course progress through visual indicators like completion bars and status updates, ensuring an engaging learning experience.

- **Course Creation**:  
  Instructors can create courses with detailed descriptions, and organize them into sections and chapters.

- **Video Uploading**:  
  Instructors can upload an instructional video for each chapter, stored securely in AWS S3.

- **Responsive Design**:  
  Fully responsive and mobile-friendly interface, ensuring a seamless user experience across devices.

- **Cloud Integration with AWS**:  
  Leverage AWS services for scalability, security, and reliability, including storage, hosting, and serverless functions.

- **Data Security**:  
  Ensure the protection of user data with secure authentication and user management powered by Clerk.

## Installation Steps

Follow these instructions to set up and run the project locally.

1. **Clone the repository**:

   Start by cloning the repository to your local machine:

   ```
   git clone https://github.com/ArmanWain/nextjs-learning-management-app.git
   cd nextjs-learning-management-app
   ```

2. **Configure environment variables**:

   You need to create and configure two `.env` files for server and client settings.

   - **Server-side** `.env`: Set the following environment variables to configure server settings.

     ```bash
     PORT=8001
     NODE_ENV=development

     AWS_REGION=YOUR-AWS-REGION
     S3_BUCKET_NAME=YOUR-S3-BUCKET-NAME
     CLOUDFRONT_DOMAIN=YOUR-CLOUDFRONT-DOMAIN

     STRIPE_SECRET_KEY=YOUR-STRIPE-SECRET-KEY

     CLERK_PUBLISHABLE_KEY=YOUR-CLERK-PUBLISHABLE-KEY
     CLERK_SECRET_KEY=YOUR-CLERK-SECRET-KEY
     ```

   - **Client-side** `.env.local`: Set the following environment variables to configure client settings.

     ```bash
     NEXT_PUBLIC_API_BASE_URL=http://localhost:8001
     NEXT_PUBLIC_LOCAL_URL=http://localhost:3000

     NEXT_PUBLIC_STRIPE_PUBLIC_KEY=YOUR-STRIPE-PUBLIC-KEY

     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR-CLERK-PUBLISHABLE-KEY
     CLERK_SECRET_KEY=YOUR-CLERK-SECRET-KEY
     ```

   Make sure to replace the placeholders with your actual values.

3. **Install dependencies for both client and server**:

   Next, install the necessary dependencies for the client and server:

   ```
   cd client
   npm i
   cd ..
   cd server
   npm i
   ```

4. **Run the project**:

   Finally, start the development server to run the project locally:

   ```
   npm run dev
   ```
