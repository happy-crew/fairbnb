## Frontend Data Models

### Profile

The `Profile` table stores authentication/authorization data.

- id: UUID of Profile,
- firstName: First name of Profile
- lastName: Last name of Profile,
- username: Username of Profile,
- email: Email of Profile,
- profileImage: URL of profile image,
- createdAt: Datetime when profile was created,HIGHLIGHT
- updatedAt: Datetime when profile was last updated,HIGHLIGHT

---

- **id**: UUID of user.
- **first_name**: First name of user
- **last_name**: Last name of user
- **username**: Username of user.
- **email**: Email of user.
- **hashed_password**: Hashed password of user.HIGHLIGHT
- **date_joined**: Datetime when profile was created HIGHLIGHT

### Profile

The `Profile` table stores additional information about users.

- **user_id**: UUID of user associated with profile.
- **image**: URL of user profile image HIGHLIGHT
- **updated_at**: Datetime when profile was last updated HIGHLIGHT

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
- createdAt: Datetime when property was created,HIGHLIGHT
- updatedAt: Datetime when property was updated,HIGHLIGHT
- profileId: User ID of owner of property,

- **id**: UUID of property
- **name**: Name of property.
- **tagline**: Tagline or short description of property.
- **category**: Category of property.
- **image**: URL of property's image.
- **location**: Location of property.
- **country**: Country where property is located.
- **description**: Description of property
- **price**: Nightly price to stay at property.
- **guests**: Maximum number of guests allowed to stay at property.
- **bedrooms**: Number of bedrooms at property.
- **beds**: Number of beds at property.
- **baths**: Number of bathrooms at property.
- **amenities**: List of amenities at property.
- **owner**: Profile ID of owner of property. HIGHLIGHT

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
