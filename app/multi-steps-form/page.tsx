"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

// ================= TYPES =================
interface RegisterFormState {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
  profileImage: File | null;
}

// ================= COMPONENT =================
export default function RegisterForm() {
  const [form, setForm] = useState<RegisterFormState>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, profileImage: file }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password таарахгүй байна");
      return;
    }
    console.log("FORM DATA:", form);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <input
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <input
            name="userName"
            placeholder="Username"
            value={form.userName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="phoneNumber"
            placeholder="Phone number"
            value={form.phoneNumber}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="dateOfBirth"
            type="date"
            value={form.dateOfBirth}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />

          <input type="file" onChange={handleFileChange} style={styles.file} />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

// ================= STYLES =================
const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a", // dark minimal background
    fontFamily: "Inter, sans-serif",
  },

  card: {
    background: "#ffffff",
    padding: 32,
    borderRadius: 12,
    width: 420,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  title: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 20,
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  row: {
    display: "flex",
    gap: 12,
  },

  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    fontSize: 14,
    outline: "none",
  },

  file: {
    fontSize: 13,
  },

  button: {
    marginTop: 10,
    padding: "10px",
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: 500,
    cursor: "pointer",
  },
};
