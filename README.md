# Expense Tracker Next.js

Expense Tracker Next.js is a powerful and intuitive expense tracking application built with Next.js, Prisma, and Clerk for authentication. This project is bootstrapped with `create-next-app` and utilizes Neon database for data management.

## Features

- **Next.js**: Fast, optimized, and SEO-friendly React framework.
- **Prisma**: Modern database toolkit to query, migrate and model your data.
- **Clerk**: Easy-to-use authentication and user management.
- **Neon Database**: Scalable and efficient database solution.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (>=14.0.0)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (for running Neon database locally, optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expense-tracker-nextjs.git
   cd expense-tracker-nextjs
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root of your project and add the following variables:

   ```env
   DATABASE_URL=your_neon_database_url
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   ```

4. Set up the database:

   Initialize the Prisma schema and migrate the database:

   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To deploy the project, follow the deployment instructions for your preferred hosting service. Make sure to set the environment variables in your hosting platform.

## Built With

- [Next.js](https://nextjs.org/) - The React Framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Clerk](https://clerk.dev/) - Authentication and user management
- [Neon Database](https://neon.tech/) - Serverless Postgres Database

## Contributing

Feel free to submit issues and pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project wouldn't be possible without the [tutorials and resources](https://github.com/bradtraversy) provided by [Brad Traversy](https://github.com/bradtraversy). Thank you for your invaluable guidance!
