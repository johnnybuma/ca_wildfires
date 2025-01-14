# **California Wildfire Map**

This is a Node.js application that visualizes California wildfire data on an interactive map. It integrates Highcharts Maps for geographic visualization and DataTables for tabular data presentation.

## **Features**

- Displays wildfire incidents on a geographic map with bubble markers.
- Provides a searchable and sortable table of incident details.
- Highlights map bubbles when hovering over associated table rows.
- Displays tooltips with detailed information for map markers.
- Dynamically fetches wildfire data from a local JSON file (`data/ca_fires.json`).

---

## **Installation Instructions**

Follow these steps to set up and run the application locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/california-wildfire-map.git
cd california-wildfire-map
```

### **2. Install Dependencies**
Ensure you have Node.js installed, then run:
```bash
npm install
```

### **3. Set Up the Environment**
Place your wildfire data file (`ca_fires.json`) in the `data/` directory. Ensure the directory structure looks like this:
```
project-root/
  ├── public/                # Static files (HTML, CSS, JS)
  │   └── index.html         # Main application
  ├── data/                  # Local data directory
  │   └── ca_fires.json      # Wildfire data
  ├── server.js              # Node.js server
  ├── package.json           # Node dependencies
  └── README.md              # Project documentation
```

### **4. Start the Server**
Run the following command to start the application:
```bash
node server.js
```

By default, the application will run on `http://localhost:3000`.

---

## **Usage**

1. Open your browser and navigate to:  
   **`http://localhost:3000`**

2. Explore the interactive map and table:
    - **Map**: Click or hover over markers to see detailed incident information.
    - **Table**: Search, filter, or hover over rows to highlight corresponding map markers.

---

## **Development**

### **File Structure**
- **`public/`**: Contains the front-end files (HTML, CSS, JS).
- **`data/`**: Contains the wildfire dataset (`ca_fires.json`).
- **`server.js`**: The Node.js server responsible for serving the app and data.

### **Customizing the Data**
Update or replace the `ca_fires.json` file with your own wildfire data. Ensure the JSON structure matches the existing format.

---

## **Dependencies**

- [Node.js](https://nodejs.org)
- [Highcharts Maps](https://www.highcharts.com/products/maps/)
- [DataTables.js](https://datatables.net/)
- [Bootstrap](https://getbootstrap.com/)

---

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Acknowledgments**

- Data sourced from the [California Fire Department](https://www.fire.ca.gov/).
- Map visualization powered by [Highcharts Maps](https://www.highcharts.com/products/maps/).

---
