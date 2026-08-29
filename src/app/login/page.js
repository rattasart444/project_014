"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const LOGIN_URL = "https://api.itdev.cmtc.ac.th/auth/login";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล
    if (!form.username.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอก Username",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    if (!form.password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกรหัสผ่าน",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      const result = await response.json().catch(() => ({}));

      // =========================
      // Login สำเร็จ Status 200
      // =========================
      if (response.status === 200) {
        if (result.token) {
          localStorage.setItem("token", result.token);
        }

        if (result.user) {
          localStorage.setItem(
            "user",
            JSON.stringify(result.user)
          );
        }

        await Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          text: "ยินดีต้อนรับเข้าสู่ Lunar",
          timer: 1500,
          showConfirmButton: false,
        });

        router.push("/users");
        return;
      }

      // =========================
      // Username / Password ผิด
      // =========================
      if (response.status === 401) {
        await Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text:
            result.message ||
            "Username หรือรหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ลองใหม่",
        });
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
            "กรุณาตรวจสอบ Username และรหัสผ่าน",
          confirmButtonText: "ตกลง",
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
        });
        return;
      }

      // =========================
      // Status อื่น ๆ
      // =========================
      await Swal.fire({
        icon: "error",
        title: `เข้าสู่ระบบไม่สำเร็จ`,
        text:
          result.message ||
          `Status ${response.status}`,
        confirmButtonText: "ตกลง",
      });
    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์",
        text: "กรุณาตรวจสอบ Internet แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-4 py-10">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">

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

        {/* Login Card */}
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-7 md:p-9 shadow-2xl">

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-amber-400/30 mb-4">
              <span className="text-2xl">⌚</span>
            </div>

            <h2 className="text-2xl font-serif text-white">
              Welcome Back
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              เข้าสู่ระบบเพื่อเลือกนาฬิกาที่คุณชื่นชอบ
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Username */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
                placeholder="Enter your username"
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
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                placeholder="Enter your password"
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

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
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
              {isLoading
                ? "กำลังเข้าสู่ระบบ..."
                : "เข้าสู่ระบบ"}
            </button>

          </form>

          {/* Register */}
          <div className="text-center mt-7 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-500">
              ยังไม่มีบัญชี?
            </p>

            <Link
              href="/register"
              className="
                inline-block
                mt-2
                text-amber-400
                hover:text-amber-300
                transition
              "
            >
              สมัครสมาชิก
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