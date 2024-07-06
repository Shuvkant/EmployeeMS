## To run dev 
```
cd EmployeeMS
npm run dev
```
## To Start
```
cd server
npm start 
```
<img src=EmployeeMS/public/images/employeems.jpeg>
The Employee Management System is a comprehensive solution designed to simplify and streamline the processes of managing employee data and related operations within an organization. Leveraging modern technologies such as MySQL for data storage, React for the front-end user interface, and Axios for handling back-end operations, the system centralizes all employee information in a secure, user-friendly platform. This document details the system's requirements, software development model, key functional and non-functional requirements, and the proposed process for system development.

It is a simple management system for the employe. It uses mysql and then react app that contains all the logic for managing employee and axios to send employee data to the database.

| Requirements | Description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| Database     | A MySQL database is used to store all the employee data                                  |
| Frontend     | This system uses a React App for the frontend design and user interface                  |
| Backend      | Axios is used to handle the backend operations and to send employee data to the database |

## Requirement Analysis

Before building the Employee Management System, it is crucial to conduct a comprehensive requirement analysis. Understanding the system requirements thoroughly will eliminate the risk of project failure due to a lack of understanding of the requirements. Here are some of the key requirements:

1. **Data Storage**: The system should be capable of storing extensive employee data. This includes personal details, professional records, and other related information. Therefore, a robust and reliable database like MySQL is required. MySQL can handle a vast amount of data and can maintain the data's integrity and security.
2. **User Interface**: The success of a system greatly depends on its user interface. It should be user-friendly and intuitive. React, a popular JavaScript library, is used to build the system's frontend. Its component-based architecture allows for a seamless user experience and makes the interface easier to manage and update.
3. **Data Transmission**: The system should efficiently send and retrieve data from the database. Axios, a promise-based HTTP client, handles these backend operations. Axios is renowned for its ability to handle requests and responses, intercept request and response, and transform request and response data.

## Additional Key Requirements

After understanding the core requirements, it's essential to delve into additional requirements that enhance the system's performance and usability.

1. **Security**: One of the primary concerns when dealing with employee data is security. The system should employ secure protocols and mechanisms, such as secure API keys, to protect sensitive information. It should also have features like data encryption and user authentication to further enhance data security.
2. **Performance**: A good system is one that maintains its performance even under heavy loads. The Employee Management System should handle large volumes of data and high user traffic without compromising on speed and efficiency. Techniques such as data caching and load balancing could be employed to maintain optimal system performance.
3. **Scalability**: As the organization expands, so too will the volume of employee data. The system should be built with scalability in mind, to accommodate future growth without the need for significant system overhauls. This could include database partitioning, distributed systems, and cloud-based solutions.
4. **Usability**: The system should not only perform well but also be easy to use. A clear and intuitive user interface is a must. Consideration should be given to the user journey and the intuitiveness of the system layout and navigation. User feedback should be collected and implemented to continually improve the user experience.
5. **Maintenance and Support**: Post-deployment, the system will require regular maintenance and updates to keep up with the changing needs of the organization. A plan should be in place for ongoing system support and maintenance, including periodic checks, debugging, updates, and user support.

In conclusion, a comprehensive understanding of these requirements will drive the successful development and deployment of the Employee Management System. This preparation will not only guide the development process but also ensure that the end product aligns with the organization's needs and expectations.

## Proposed Software Development Process

The software development process for this Employee Management System involves several key stages. Here is how each of the mentioned points will be addressed:

1. **Dashboard Development**: This is the first development stage, where we create a comprehensive dashboard for easy navigation and overview of the system. It will provide quick access to all other features of the system, and display key metrics and information at a glance.
2. **Employee Management**: This phase involves the development of features that allow for the addition, modification, and deletion of employee records in the database. This should be designed in a user-friendly way, allowing easy access and manipulation of employee data.
3. **Category Management**: This stage will involve the implementation of a feature that allows for the creation and management of different categories for employee classification. This could include job roles, departments, or any other relevant grouping mechanism.
4. **Profile Settings**: Here, we will develop a feature that allows each employee to manage their own profile settings. This includes personal details, contact information, and password settings.
5. **Payroll Information**: The payroll information of the employee is seen in this section.
6. **Logout Functionality**: The final stage involves creating a secure logout mechanism that ensures user sessions are ended securely and all sensitive information is protected.

Each of these stages will follow the standard software development life cycle of planning, designing, coding, testing, deploying, and maintenance.

## Functional Requirements

The functional requirements specify what the Employee Management System should do. Here are some key functional requirements:

1. **Employee Profile Management**: The system should allow employees to create, view, edit, and delete their personal profiles. This includes personal details, contact information, and password settings.
2. **Employee Data Management**: Administrators should be able to add, modify, and remove employee records in the system. This should include the ability to categorize employees by job roles, departments, or other relevant groupings.
3. **Dashboard**: The system should feature a comprehensive dashboard that provides a quick overview of key metrics and information. It should also provide quick access to other system features.
4. **Logout Functionality**: The system should securely end user sessions when the logout function is used, protecting all sensitive information.

## Non-Functional Requirements

The non-functional requirements specify how the Employee Management System should perform. Here are some key non-functional requirements:

1. **Security**: The system should employ secure protocols and mechanisms to protect sensitive information. This includes secure API keys, data encryption, and user authentication.
2. **Performance**: The system should maintain optimal performance even under heavy loads. This includes handling large volumes of data and high user traffic without compromising on speed or efficiency.
3. **Scalability**: The system should be scalable to accommodate future growth. This could include implementing database partitioning, distributed systems, and cloud-based solutions.
4. **Usability**: The system should be easy to use, with a clear and intuitive user interface. Feedback should be collected and implemented to continually improve the user experience.
5. **Maintenance and Support**: Regular system maintenance and updates should be planned to keep up with the changing needs of the organization. This includes periodic checks, debugging, updates, and user support.
