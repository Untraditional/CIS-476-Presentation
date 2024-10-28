# Drop Logger Backend - CQRS Design Pattern

This project is the backend for the **Drop Logger** system, which is part of a demonstration of the **CQRS (Command Query Responsibility Segregation)** design pattern in the context of the game **Old School Runescape**. The backend is built using **Node.js**, **Express**, and **PostgreSQL**.

## Overview

The **Drop Logger** backend allows users to manage and query monsters and their associated drops within the game. The system is designed using the **CQRS** pattern, separating **commands** (write operations) from **queries** (read operations) to improve performance and scalability.

### Key Features:
- **Command operations**: Users can create, update, and delete monsters and drops.
- **Query operations**: Users can fetch detailed information about monsters and drops, such as drop rates and monster stats.
- **CQRS Pattern**: Commands and queries are handled separately, improving maintainability and allowing for future scalability and optimization.

## CQRS Pattern Implementation

### Command Side:
- **Purpose**: The command side is responsible for handling write operations, ensuring data integrity and consistency.
- **Files**:
  - `monsterCommandService.js`: Handles adding, updating, and deleting monsters.
  - `dropCommandService.js`: Handles adding, updating, and deleting drops.
  
- **Example Command Operations**:
  - **Add Monster**: Admins can create a new monster by specifying a name and combat level.
  - **Add Drop**: Admins can associate a new drop with a specific monster.
  - **Update Drop Table**: Admins can update the drop table of a monster, adjusting item drop rates or adding new items.

### Query Side:
- **Purpose**: The query side is optimized for read operations, allowing users to retrieve data quickly without affecting the command side.
- **Files**:
  - `monsterQueryService.js`: Handles retrieving monster details by name, combat level, or other criteria.
  - `dropQueryService.js`: Handles fetching drop rates and drop details for specific monsters.
  
- **Example Query Operations**:
  - **Fetch Monster Details**: Users can query for detailed monster stats based on the monster's name.
  - **Fetch Drops by Monster Name**: Users can retrieve all drops associated with a particular monster by searching by name.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the backend.
- **Express.js**: Framework for building the RESTful API.
- **PostgreSQL**: Database used to store monsters and drop data.
- **Sequelize**: ORM (Object-Relational Mapping) tool used for interacting with the database.
- **Axios**: Used in development and testing for API requests.

## API Endpoints

### Command Endpoints:
- **POST /api/monsters**: Add a new monster to the database.
- **POST /api/drops**: Add a new drop to an existing monster.
- **PUT /api/monsters/:id**: Update an existing monster by its ID.
- **DELETE /api/monsters/:id**: Delete a monster from the database.

### Query Endpoints:
- **GET /api/monsters/:name**: Fetch details for a specific monster by name.
- **GET /api/drops/monster/:name**: Fetch all drops associated with a specific monster.
- **GET /api/drops/item/:itemName**: Fetch all monsters that drop a specific item.

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
- **PostgreSQL**: Make sure PostgreSQL is installed and a database is set up.

### Clone the Repository

```bash
git clone https://github.com/Untraditional/CIS-476-Presentation.git

