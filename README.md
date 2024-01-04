Certainly! Here's the provided documentation converted to Markdown format:

---

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
  "name": "New Area",
  "topographicInfo": "Sample topographic info",
  "demographicData": "Sample demographic data",
  "population": 5000,
  "ageRatio": { "male": 2500, "female": 2500 },
  "genderRatio": { "male": 0.5, "female": 0.5, "other": 0 },
  "marketTrend": "Emerging market trend",
  "location": {
    "type": "Point",
    "coordinates": [77.5, 23.2]
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