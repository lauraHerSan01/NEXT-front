"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, X } from "lucide-react";

interface LoginResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName?: string;
    type: string;
  };
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.access_token || "Email o contraseña incorrectos");
      }

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.type === "admin" || data.user.type === "architect") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Email o contraseña incorrectos");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex">
      {/* Left - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-foreground">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source
            src="https://videos.pexels.com/video-files/6527370/6527370-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link href="/" className="font-serif text-3xl text-white tracking-tight">
            HABITAR
          </Link>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
              Tu proyecto,
              <br />
              nuestra pasión.
            </h2>
            <p className="text-white/70 max-w-md">
              Accede a tu panel de cliente para seguir el progreso de tu proyecto arquitectónico en tiempo real.
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-background relative">
        <Link 
          href="/" 
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          aria-label="Cerrar y volver al inicio"
        >
          <X className="w-5 h-5" />
        </Link>
        <div className="w-full max-w-md">
          <Link href="/" className="lg:hidden font-serif text-3xl text-foreground tracking-tight block mb-12">
            HABITAR
          </Link>

          <div className="mb-10">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Iniciar Sesión</h1>
            <p className="text-muted-foreground">
              Accede a tu espacio de cliente
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 border border-destructive/30 bg-destructive/5 text-destructive text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-secondary border border-border text-black focus:border-black focus:outline-none transition-colors placeholder:text-gray-500"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-secondary border border-border text-black focus:border-black focus:outline-none transition-colors placeholder:text-gray-500 pr-12"
                  placeholder="Tu contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-foreground text-background font-medium text-sm tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isLoading ? "Cargando..." : "Ingresar"}
              {!isLoading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              {"¿Quieres iniciar un proyecto? "}
              <Link href="/solicitud" className="text-foreground underline underline-offset-4 hover:opacity-80">
                Solicitar obra
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
