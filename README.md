# VIT Bhopal Area API - Routes

## 1. Get Areas

### Endpoint
```bash
GET /api/areas
```

### Description
Retrieve a list of areas within 100 km of VIT Bhopal University.

### Example
```bash
curl http://localhost:3000/api/areas
```

## 2. Add New Area

### Endpoint
```bash
POST /api/areas
```

### Description
Add a new area. Provide area details in the request body.

### Example
```bash
curl -X POST -H "Content-Type: application/json" -d '{
 {
  "name": "Tamil Nadu",
  "topographicInfo": "Urban",
  "demographicData": "City",
  "population": 1559522,
  "ageRatio": {
    "0-14": {
      "male": 16,
      "female": 14
    },
    "15-24": {
      "male": 19,
      "female": 17
    },
    "25-54": {
      "male": 41,
      "female": 39
    },
    "55+": {
      "male": 24,
      "female": 30
    }
  },
  "genderRatio": {
    "male": 52,
    "female": 48,
    "other": 0
  },
  "marketTrend": "study ka dookan",
  "location": {
    "type": "Point",
    "coordinates": [78.6569, 11.1271]
  }
}
}' http://localhost:3000/api/areas
```

## 3. Get Area by ID

### Endpoint
```bash
GET /api/areas/:id
```

### Description
Retrieve details of a specific area by providing its ID in the URL.

### Example
```bash
curl http://localhost:3000/api/areas/60f5c99b63bd18799807b16c
```

## 4. Delete Area by ID

### Endpoint
```bash
DELETE /api/areas/:id
```

### Description
Delete a specific area by providing its ID in the URL.

### Example
```bash
curl -X DELETE http://localhost:3000/api/areas/60f5c99b63bd18799807b16c
```

---