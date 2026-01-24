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

  // ---- TEXT INPUT HANDLER ----
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ---- FILE INPUT HANDLER ----
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  // ---- SUBMIT ----
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // password match validation
    if (form.password !== form.confirmPassword) {
      alert("Password таарахгүй байна");
      return;
    }

    console.log("FORM DATA:", form);
  };

  return (
    <div
      style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          name="userName"
          placeholder="Username"
          value={form.userName}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phoneNumber"
          placeholder="Phone number"
          value={form.phoneNumber}
          onChange={handleChange}
        />

        <input
          name="dateOfBirth"
          type="date"
          value={form.dateOfBirth}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <input type="file" onChange={handleFileChange} />

        <button type="submit">Submit</button>
      </form>

      {/* DEBUG VIEW */}
      <pre style={{ marginTop: 20, background: "#f5f5f5", padding: 10 }}>
        {JSON.stringify(
          {
            ...form,
            profileImage: form.profileImage?.name || null,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
}
