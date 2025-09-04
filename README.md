
# 🎨 Portafolio Full-Stack para Artista Plástica

Este proyecto es un portafolio digital moderno e interactivo para una artista plástica, con panel de administración (CMS) para gestionar obras, exposiciones, blog y pedidos. Es un ejemplo profesional de aplicación full-stack, con buenas prácticas de arquitectura, seguridad, CI/CD y despliegue en la nube.

---

## 🚀 Tecnologías Principales

- **Frontend:** Next.js 14 (React, SSR/SSG, App Router), TailwindCSS, shadcn/ui
- **Backend:** NestJS (API REST modular), Supabase (PostgreSQL)
- **Autenticación:** JWT (backend), NextAuth (frontend)
- **Infraestructura:** Vercel (frontend), Render/Railway (backend), Supabase (DB)
- **Media Storage:** Cloudinary / Next.js Image Optimization
- **CI/CD:** GitHub Actions
- **Testing:** Jest (unitario), Cypress (end-to-end)

---

## � Estructura del Proyecto

```
karelys-art/
│
├── backend/      # API REST (NestJS)
│   └── src/
│       ├── artworks/   # Obras
│       ├── blog/       # Blog
│       ├── comments/   # Comentarios
│       ├── contact/    # Contacto
│       ├── orders/     # Pedidos
│       └── users/      # Usuarios
│
├── frontend/     # Web pública y panel admin (Next.js)
│   └── src/
│       ├── app/         # Páginas principales
│       ├── components/  # Componentes UI
│       ├── lib/         # Utilidades
│       └── types/       # Tipos globales
│
└── README.md     # Este archivo
```

---

## ✅ Funcionalidades

### 🎨 Frontend (público)

- [x] Landing Page moderna
- [x] Galería de obras con filtros
- [x] Página de detalle de obra
- [x] Sección de exposiciones
- [x] Blog de la artista
- [x] Formulario de contacto

### 🛠️ Backend (API y Admin)

- [x] API REST segura (obras, exposiciones, blog, contacto, pedidos, usuarios)
- [x] Autenticación y roles (artista/admin, visitante)
- [x] CRUD completo de entidades
- [x] Validaciones, seguridad y rate limiting
- [x] Documentación de API con Swagger

### 🗄️ Base de Datos

- [x] Modelado de entidades: User, Artwork, Order, Comment
- [x] Relaciones entre tablas

### ⚙️ DevOps & Infra

- [x] Frontend desplegado en Vercel
- [x] Backend en Render/Railway
- [x] PostgreSQL en Supabase
- [x] Imágenes en Cloudinary
- [x] CI/CD con GitHub Actions

### 🧪 Testing

- [x] Pruebas unitarias (Jest)
- [x] Pruebas E2E (Cypress)
- [x] Integración en CI/CD

---

## 🛠️ Instalación y Ejecución Local

### 1. Clona el repositorio

```bash
git clone https://github.com/AlexanderManriquez/karelys-art.git
cd karelys-art
```

### 2. Configura variables de entorno

- Copia los archivos `.env.example` de `backend/` y `frontend/` a `.env` y completa con tus credenciales (Supabase, Cloudinary, JWT, etc).

### 3. Instala dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Ejecuta en desarrollo

```bash
# Backend
npm run start:dev

# Frontend
npm run dev
```

- Backend: [http://localhost:3000](http://localhost:3000)
- Frontend: [http://localhost:3001](http://localhost:3001)

---

## �‍💻 Comandos Útiles

### Backend

- Lint: `npm run lint`
- Test unitarios: `npm run test`
- Test e2e: `npm run test:e2e`
- Cobertura: `npm run test:cov`
- Documentación Swagger: [http://localhost:3000/api](http://localhost:3000/api)

### Frontend

- Lint: `npm run lint`
- Test unitarios: `npm run test`
- Test e2e: `npm run cypress`
- Formateo: `npm run format`

---

## 🚀 Despliegue

- **Frontend:** Vercel (conectado a GitHub, despliegue automático)
- **Backend:** Render o Railway (configura variables de entorno)
- **Base de datos:** Supabase (PostgreSQL)
- **Imágenes:** Cloudinary

---

## 📚 Recursos y Documentación

- [Next.js Docs](https://nextjs.org/docs)
- [NestJS Docs](https://docs.nestjs.com)
- [Supabase Docs](https://supabase.com/docs)
- [Swagger API Docs](http://localhost:3001/api)
- [Cloudinary Docs](https://cloudinary.com/documentation)

---

## 🤝 Contribución

¿Quieres mejorar el proyecto? Haz un fork, crea una rama y envía tu PR. ¡Toda ayuda es bienvenida!

---

## � Troubleshooting

- Verifica variables de entorno y credenciales.
- Revisa logs en consola para errores de conexión.
- Consulta la documentación oficial de cada tecnología.

---

¿Listo para crear y mostrar arte al mundo? ✨
