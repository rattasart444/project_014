"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const REGISTER_URL = "https://api.itdev.cmtc.ac.th/users";

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // =========================
    // ตรวจสอบข้อมูล
    // =========================
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.username.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      await Swal.fire({
        icon: "warning",
        title: "ข้อมูลไม่ครบ",
        text: "กรุณากรอกข้อมูลให้ครบทุกช่อง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#d4af37",
      });

      return;
    }

    // =========================
    // ตรวจสอบ Password
    // =========================
    if (formData.password.length < 8) {
      await Swal.fire({
        icon: "warning",
        title: "รหัสผ่านสั้นเกินไป",
        text: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#d4af37",
      });

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json().catch(() => ({}));

      // =========================
      // สมัครสำเร็จ
      // =========================
      if (response.status === 200 || response.status === 201) {
        await Swal.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ",
          text: "ยินดีต้อนรับสู่ Lunar",
          confirmButtonText: "เข้าสู่ระบบ",
          confirmButtonColor: "#d4af37",
        });

        router.push("/login");
        return;
      }

      // =========================
      // ข้อมูลไม่ถูกต้อง
      // =========================
      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: "ข้อมูลไม่ถูกต้อง",
          text:
            result.message ||
            "กรุณาตรวจสอบข้อมูลที่กรอกอีกครั้ง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#d4af37",
        });

        return;
      }

      // =========================
      // Username ซ้ำ
      // =========================
      if (response.status === 409) {
        await Swal.fire({
          icon: "warning",
          title: "Username ถูกใช้งานแล้ว",
          text: "กรุณาเลือก Username อื่น",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#d4af37",
        });

        return;
      }

      // =========================
      // Server Error
      // =========================
      if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: "เซิร์ฟเวอร์มีปัญหา",
          text:
            result.message ||
            "กรุณาลองใหม่อีกครั้งภายหลัง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dc2626",
        });

        return;
      }

      // =========================
      // Error อื่น ๆ
      // =========================
      await Swal.fire({
        icon: "error",
        title: "สมัครสมาชิกไม่สำเร็จ",
        text:
          result.message ||
          `Status ${response.status}`,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#dc2626",
      });
    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบ Internet แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-4 py-10">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg">

        {/* Logo */}
        <div className="text-center mb-8">

          <Link href="/" className="inline-block">
            <h1 className="text-5xl font-serif tracking-[0.25em] text-white">
              LUNAR
            </h1>
          </Link>

          <p className="text-xs tracking-[0.35em] text-gray-500 uppercase mt-3">
            Luxury Timepieces
          </p>

        </div>

        {/* Register Card */}
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-7 md:p-9 shadow-2xl">

          {/* Header */}
          <div className="text-center mb-8">

            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-amber-400/30 mb-4">
              <span className="text-2xl">
                ⌚
              </span>
            </div>

            <h2 className="text-2xl font-serif text-white">
              Create Account
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              สมัครสมาชิกเพื่อเริ่มต้นการเดินทางกับ Lunar
            </p>

          </div>

          <form
            onSubmit={handleRegisterSubmit}
            className="space-y-5"
          >

            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border border-white/10
                    rounded-xl
                    px-4 py-3
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-amber-400
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border border-white/10
                    rounded-xl
                    px-4 py-3
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-amber-400
                    transition
                  "
                />
              </div>

            </div>

            {/* Username */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                placeholder="Choose your username"
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  focus:border-amber-400
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="you@example.com"
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  focus:border-amber-400
                  transition
                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                placeholder="At least 8 characters"
                className="
                  w-full
                  bg-[#0b0b0b]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  focus:border-amber-400
                  transition
                "
              />

              <p className="text-xs text-gray-600 mt-2">
                รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร
              </p>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-gray-500 cursor-pointer">

              <input
                type="checkbox"
                className="mt-1 accent-amber-400"
              />

              <span>
                ฉันยอมรับ Terms และ Privacy Policy
              </span>

            </label>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-white
                text-black
                rounded-xl
                py-3.5
                font-medium
                tracking-wide
                hover:bg-amber-400
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "กำลังสมัครสมาชิก..."
                : "สร้างบัญชี"}
            </button>

          </form>

          {/* Login */}
          <div className="text-center mt-7 pt-6 border-t border-white/10">

            <p className="text-sm text-gray-500">
              มีบัญชีอยู่แล้ว?
            </p>

            <Link
              href="/login"
              className="
                inline-block
                mt-2
                text-amber-400
                hover:text-amber-300
                transition
              "
            >
              เข้าสู่ระบบ
            </Link>

          </div>

        </div>

        {/* Back Home */}
        <div className="text-center mt-6">

          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-white transition"
          >
            ← กลับหน้าแรก
          </Link>

        </div>

      </div>

    </main>
  );
}