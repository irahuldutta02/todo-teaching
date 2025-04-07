## Task - 08/04/2025

### contact api

- [ ] Create a contact API with the following endpoints:

  - [ ] `GET /contacts` - Get all contacts
  - [ ] `GET /contacts/:id` - Get a contact by ID
  - [ ] `POST /contacts` - Create a new contact
  - [ ] `PUT /contacts/:id` - Update a contact by ID
  - [ ] `DELETE /contacts/:id` - Delete a contact by ID
  - [ ] `GET /contacts/search` - Search contacts by search term (name, email, phone, address) (query parameter) [return all contacts that match the search term eg: `/contacts/search?search=John` / eg: `/contacts/search?search=johon@gmail.com`]

- Contact model should have the following fields:
  - [ ] `id` (integer, auto-incrementing primary key)
  - [ ] `name` (string, required)
  - [ ] `email` (string, required, unique)
  - [ ] `phone` (string, optional)
  - [ ] `address` (string, optional)
  - [ ] `created_at` (timestamp, auto-generated)
  - [ ] `updated_at` (timestamp, auto-updated)
