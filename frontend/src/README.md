## Frontend interface

### Profile

The `Profile` table stores authentication/authorization data.

- id: UUID of Profile,
- firstName: First name of Profile
- lastName: Last name of Profile,
- username: Username of Profile,
- email: Email of Profile,
- profileImage: URL of profile image,
- date_joined: Datetime when profile was created,
- updatedAt: Datetime when profile was last updated,

### Property

The `Property` table stores information about properties.

- id: UUID of Property,
- name: Name of Property,
- tagline: Tagline or short description of property,
- category: Category of property,
- image: URL of property's image,
- country: Country where property is located,
- description: Description of property,
- price: Nightly price to stay at property,
- guests: Maximum number of guests allowed to stay at property,
- bedrooms: Number of bedrooms at property,
- beds: Number of beds at property,
- baths: Number of bathrooms at property,
- amenities: List of amenities at property,
- createdAt: Datetime when property was created,
- updatedAt: Datetime when property was updated,
- profileId: User ID of owner of property,

### PropertyDetails

The `PropertyDetails` table stores information about properties.

- id: UUID of Property,
- name: Name of Property,
- tagline: Tagline or short description of property,
- category:
- image: URL of property's image,
- country: Country where property is located,
- description: Description of property,
- price: Nightly price to stay at property,
- guests: Maximum number of guests allowed to stay at property,
- bedrooms: Number of bedrooms at property,
- beds: Number of beds at property,
- baths: Number of bathrooms at property,
- amenities: List of amenities at property,
- createdAt: Datetime when property was created,
- updatedAt: Datetime when property was updated,
- profileId: Profile ID of owner of property,

- firstName: First name of Profile
- profileImage: URL of profile image,
- createdAt: Datetime when profile was created,
