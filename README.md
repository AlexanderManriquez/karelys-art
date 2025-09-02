# 🎨 Portafolio Full-Stack para Artista Plástica

Este proyecto consiste en el desarrollo de un **portafolio digital moderno e interactivo** para una artista plástica.  
El objetivo es mostrar sus obras, exposiciones y biografía, además de integrar un **panel de administración (CMS)** que le permita gestionar su contenido sin necesidad de conocimientos técnicos.

El proyecto se plantea como **ejemplo de aplicación full-stack profesional**, mostrando dominio de **frontend, backend, base de datos, autenticación, seguridad, despliegue en la nube y CI/CD**.

---

## 🚀 Tecnologías Principales

- **Frontend**: Next.js 14 (React, SSR/SSG, App Router) + TailwindCSS + shadcn/ui
- **Backend**: NestJS (API REST modular) + Express
- **Base de Datos**: PostgreSQL (via Supabase)
- **Autenticación**: JWT con refresh tokens / NextAuth
- **Infraestructura**:
  - Vercel (Frontend)
  - Render / Railway (Backend)
  - Supabase (DB)
- **Media Storage**: Cloudinary / Next Image Optimization
- **CI/CD**: GitHub Actions
- **Testing**: Jest (unit) + Cypress (end-to-end)

---
## 📝 Justificación Técnica

### 🚀 Escalabilidad y rendimiento
- **Next.js** aprovecha SSR/SSG para SEO y velocidad ⚡
- **Vercel** distribuye contenido globalmente a través de CDN 🌍

### 🛠 Modularidad y mantenibilidad
- **NestJS** organiza la lógica en módulos claros y escalables 📦
- **Prisma** facilita migraciones, consultas y proporciona tipado fuerte en la base de datos 📝

### 🎨 Gestión de contenido real
- Panel de administración con **CRUD** para que la artista gestione obras, exposiciones y blog 🖌️

### 🔒 Buenas prácticas de seguridad
- Autenticación con **JWT**, validaciones, **CORS**, **rate limiting** y sanitización de datos 🛡️

### 🖼 Experiencia visual optimizada
- **Cloudinary** o **Next/Image** para imágenes de alta calidad con carga diferida 🖼️⚡

### 📈 Flujo profesional
- **CI/CD** con GitHub Actions, tests automatizados y documentación con **Swagger** ✅


---

## ✅ Checklist de Funcionalidades

### 🎨 Frontend (público)
- [x] 🏠 Landing Page moderna con hero section
- [x] 🖼 Galería dinámica de obras con filtros (año, técnica, categoría)
- [x] 🔍 Página de detalle de obra
- [x] 📅 Sección de exposiciones (pasadas y futuras)
- [x] ✍️ Blog con artículos/artista
- [x] 📬 Formulario de contacto con envío al backend

### 🛠 Backend (API y Admin)
- [x] 🌐 API REST con endpoints seguros (obras, exposiciones, blog, contacto)
- [x] 🔑 Autenticación y roles (artista/admin, visitante)
- [x] 📝 CRUD de obras, exposiciones y entradas de blog
- [x] 🛡 Validaciones, seguridad y rate limiting
- [x] 📄 Documentación de API con **Swagger**

### 🗄️ Base de Datos
- [x] 💾 Modelado de entidades: `User`, `Artwork`, `Order`, `Comment`
- [x] 🔗 Relaciones entre tablas (ej: obras ↔ exposiciones)

### ⚙️ DevOps & Infra
- [x] ☁️ Frontend desplegado en **Vercel**
- [x] 🔧 Backend en **Render / Railway**
- [x] 🗃 PostgreSQL en **Supabase**
- [x] 🖼 Almacenamiento de imágenes en **Cloudinary**
- [x] 🔄 CI/CD con **GitHub Actions**

### 🧪 Testing
- [x] 🧩 Pruebas unitarias (Jest / Vitest)
- [x] 🧪 Pruebas E2E (Cypress)
- [x] 🔄 Integración en CI/CD
