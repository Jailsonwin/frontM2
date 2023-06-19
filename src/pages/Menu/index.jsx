import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="container">
      <div className="column">
        <Link legacyBehavior href="/Users">
          <a className="button">Users</a>
        </Link>
        <Link legacyBehavior href="/Products">
          <a className="button">Products</a>
        </Link>
        <Link legacyBehavior href="/OrderProduct">
          <a className="button">Order Product</a>
        </Link>
        <Link legacyBehavior href="/Order">
          <a className="button">Order</a>
        </Link>
      </div>
      <div className="column">
        <Link legacyBehavior href="/CreateUser">
          <a className="button">Create Users</a>
        </Link>
        <Link legacyBehavior href="/CreateProduct">
          <a className="button">Create Products</a>
        </Link>
        <Link legacyBehavior href="/CreateOrderProduct">
          <a className="button">Create Order Product</a>
        </Link>
        <Link legacyBehavior href="/CreateOrder">
          <a className="button">Create Order</a>
        </Link>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .column {
          display: flex;
          flex-direction: column;
          margin-right: 20px;
        }

        .button {
          width: 400px;
          height: 100px;
          background-color: #007bff;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          margin-bottom: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .button:last-child {
          margin-bottom: 0;
        }

        .button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Menu;
