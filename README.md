## Absence Manager App - Frontend Coding Challenge

## Tech
- React
- TypeScript
- Redux
- Tests: enzyme


## Workflow

- When you run the App a loader will popup until the data is loaded.
- After the loading state is done you will see a list of absences including the names of the employees, images, types of absences,s, etc, and a total number of absence records.
- You can filer by using types of absence or start date, end date, confirmed date, and rejected date.
- there is a pagination checkbox at the top of the table when you select the checkbox will see 10 records with pagination.
- If an error occurs then the "something went wrong" message will pop up.
- 
## Features

- [ ] I want to see a list of absences including the names of the employees.
- [ ] I want to see the first 10 absences, with the ability to paginate.
- [ ] I want to see a total number of absences.
- [ ] For each absence I want to see:
  - [ ] Member name
  - [ ] Type of absence
  - [ ] Period
  - [ ] Member note (when available)
  - [ ] Status (can be 'Requested', 'Confirmed' or 'Rejected')
  - [ ] Admitter note (when available)
- [ ] I want to filter absences by type.
- [ ] I want to filter absences by date.
- [ ] I want to see a loading state until the list is available.
- [ ] I want to see an error state if the list is unavailable.
- [ ] I want to see an empty state if there are no results.

## Installation

- Please clone the repository
- Install nodemodule - [yarn install or npm install]
- run the project - [yarn start or npm start]
