import React from "react";
import "./style.css";

let data = [
  {
    sortCode: "55-77-42",
    accountNumber: "08488234",
    accountType: "Savings Account",
    accountName: "Mannuel Sam"
  },
  {
    sortCode: "12-43-98",
    accountNumber: "12365432",
    accountType: "Savings Account",
    accountName: "John Cena"
  },
  {
    sortCode: "87-20-51",
    accountNumber: "76491234",
    accountType: "Savings Account",
    accountName: "Shweta Pandey"
  },
  {
    sortCode: "56-73-39",
    accountNumber: "09865479",
    accountType: "Savings Account",
    accountName: "Prerna Singh"
  }
];
export default function App() {
  return (
    <div style={styles.container}>
      {data.map(item => {
        return (
          <div style={styles.card}>
            <p>
              <strong>Sort Code:</strong> {item.sortCode}
            </p>
            <p>
              <strong>Account Number:</strong> {item.accountNumber}
            </p>
            <p>
              <strong>Account Type:</strong> {item.accountType}
            </p>
            <p>
              <strong>Account Name:</strong> {item.accountName}
            </p>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "rgba(21,21,21,0.2)",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    boxShadow: "5px 5px rgb(124, 236, 130)",
    width: 250
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row"
  }
};
