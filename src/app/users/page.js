"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { TextReveal } from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";

import { Pencil, Trash2, Users, UserRound } from "lucide-react";

import "./page.css";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export const dynamic = "force-dynamic";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  // =========================
  // GET USERS
  // =========================

  const fetchUsers = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error(error);

      setIsError(true);

      Swal.fire({
        icon: "warning",
        title: "ไม่สามารถโหลดข้อมูลได้",
        text: "กรุณาลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // EDIT USER
  // =========================

  const handleEdit = async (id) => {
    const user = users.find((item) => item.id === id);

    if (!user) return;

    const result = await Swal.fire({
      title: "แก้ไขสมาชิก",

      html: `
        <input
          id="firstname"
          class="swal2-input"
          placeholder="ชื่อ"
          value="${user.firstname || ""}"
        />

        <input
          id="lastname"
          class="swal2-input"
          placeholder="นามสกุล"
          value="${user.lastname || ""}"
        />

        <input
          id="username"
          class="swal2-input"
          placeholder="Username"
          value="${user.username || ""}"
        />
      `,

      showCancelButton: true,
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#18181b",
    });

    if (!result.isConfirmed) return;

    const firstname =
      document.getElementById("firstname").value;

    const lastname =
      document.getElementById("lastname").value;

    const username =
      document.getElementById("username").value;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstname,
          lastname,
          username,
        }),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      await Swal.fire({
        icon: "success",
        title: "แก้ไขสำเร็จ",
        text: "ข้อมูลสมาชิกถูกอัปเดตแล้ว",
        confirmButtonColor: "#18181b",
      });

      fetchUsers();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "แก้ไขไม่สำเร็จ",
        text: "ไม่สามารถแก้ไขข้อมูลได้",
      });
    }
  };

  // =========================
  // DELETE USER
  // =========================

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "ลบสมาชิก?",
      text: "ข้อมูลสมาชิกจะถูกลบออกจากระบบ",

      showCancelButton: true,

      confirmButtonText: "ลบข้อมูล",
      cancelButtonText: "ยกเลิก",

      confirmButtonColor: "#dc2626",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );

      Swal.fire({
        icon: "success",
        title: "ลบสำเร็จ",
        text: "ลบสมาชิกออกจากระบบแล้ว",
        confirmButtonColor: "#18181b",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "ลบไม่สำเร็จ",
        text: "ไม่สามารถลบข้อมูลได้",
      });
    }
  };

  // =========================
  // LOADING
  // =========================

  if (isLoading) {
    return (
      <main className="min-h-screen bg-stone-950 text-white">
        <Navbar />

        <div className="users-loading">
          <div className="loading-circle"></div>

          <p>กำลังโหลด Lunar Watch...</p>
        </div>

        <Footer />
      </main>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (isError) {
    return (
      <main className="min-h-screen bg-stone-950 text-white">
        <Navbar />

        <div className="users-message">
          <UserRound size={45} />

          <h2>เกิดข้อผิดพลาด</h2>

          <p>
            ไม่สามารถโหลดข้อมูลสมาชิกได้
          </p>

          <button
            onClick={fetchUsers}
            className="retry-button"
          >
            ลองอีกครั้ง
          </button>
        </div>

        <Footer />
      </main>
    );
  }

  // =========================
  // MAIN
  // =========================

  return (
    <main className="lunar-users-page">

      <AnimatedBackground />

      <Navbar />

      {/* HERO */}

      <section className="users-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <AnimatedSection>

            <p className="hero-label">
              LUNAR WATCH • MEMBERS
            </p>

            <TextReveal
              as="h1"
              className="hero-title"
            >
              Our Members
            </TextReveal>

            <p className="hero-description">
              จัดการข้อมูลสมาชิกของ Lunar Watch
              อย่างง่ายและเป็นระบบ
            </p>

          </AnimatedSection>

        </div>

      </section>

      {/* MEMBER SECTION */}

      <section className="members-section">

        <div className="members-container">

          <AnimatedSection className="members-heading">

            <div>

              <p className="section-label">
                MEMBER MANAGEMENT
              </p>

              <TextReveal
                as="h2"
                className="section-title"
              >
                Member Collection
              </TextReveal>

              <p className="section-description">
                รายชื่อสมาชิกทั้งหมดของ Lunar Watch
              </p>

            </div>

            <div className="total-members">

              <Users size={22} />

              <div>

                <span>
                  สมาชิกทั้งหมด
                </span>

                <strong>
                  {users.length}
                </strong>

              </div>

            </div>

          </AnimatedSection>

          {/* DESKTOP TABLE */}

          <AnimatedSection>

            <div className="members-table-wrapper">

              <table className="members-table">

                <thead>

                  <tr>
                    <th>NO.</th>
                    <th>NAME</th>
                    <th>LAST NAME</th>
                    <th>USERNAME</th>
                    <th>ACTION</th>
                  </tr>

                </thead>

                <tbody>

                  {users.map((user, index) => (

                    <tr key={user.id}>

                      <td>
                        <span className="user-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </td>

                      <td>

                        <div className="name-wrapper">

                          <div className="user-icon">

                            {(user.firstname || "L")
                              .charAt(0)
                              .toUpperCase()}

                          </div>

                          <span>
                            {user.firstname || "-"}
                          </span>

                        </div>

                      </td>

                      <td>
                        {user.lastname || "-"}
                      </td>

                      <td>

                        <span className="username-tag">
                          @{user.username || "-"}
                        </span>

                      </td>

                      <td>

                        <div className="action-buttons">

                          <button
                            onClick={() =>
                              handleEdit(user.id)
                            }
                            className="edit-button"
                          >
                            <Pencil size={15} />
                            แก้ไข
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(user.id)
                            }
                            className="delete-button"
                          >
                            <Trash2 size={15} />
                            ลบ
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </AnimatedSection>

          {/* MOBILE CARDS */}

          <div className="mobile-member-list">

            {users.map((user, index) => (

              <AnimatedSection
                key={user.id}
                delay={index * 0.08}
              >

                <div className="member-card">

                  <div className="member-card-top">

                    <span className="card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="card-avatar">

                      {(user.firstname || "L")
                        .charAt(0)
                        .toUpperCase()}

                    </div>

                    <div className="card-user-info">

                      <h3>
                        {user.firstname}{" "}
                        {user.lastname}
                      </h3>

                      <span>
                        @{user.username}
                      </span>

                    </div>

                  </div>

                  <div className="card-actions">

                    <button
                      onClick={() =>
                        handleEdit(user.id)
                      }
                      className="edit-button"
                    >
                      <Pencil size={15} />
                      แก้ไข
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(user.id)
                      }
                      className="delete-button"
                    >
                      <Trash2 size={15} />
                      ลบ
                    </button>

                  </div>

                </div>

              </AnimatedSection>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="users-cta">

        <AnimatedSection className="cta-content">

          <p className="section-label">
            LUNAR WATCH
          </p>

          <TextReveal
            as="h2"
            className="cta-title"
          >
            Timeless. Elegant. Lunar.
          </TextReveal>

          <p>
            สมาชิกของคุณคือส่วนสำคัญ
            ของประสบการณ์ Lunar Watch
          </p>

        </AnimatedSection>

      </section>

      <Footer />

    </main>
  );
}